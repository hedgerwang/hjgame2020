import Sound from './Sound';
import canUseTouch from './canUseTouch';

const KEYS = {
  ArrowLeft: 'ArrowLeft',
  ArrowUp: 'ArrowUp',
  ArrowRight: 'ArrowRight',
  ' ': 'ArrowUp',
};

function createDOM() {
  const dom = document.createElement('div');
  dom.className = 'input-manager-panel';
  dom.innerHTML = `
      <a class="control control-left" name="${KEYS.ArrowLeft}">
        <i class="left-arrow arrow"></i>
      </a>
      <a class="control control-right" name="${KEYS.ArrowRight}">
        <i class="right-arrow arrow"></i>
      </a>
      <a class="control control-up" name="${KEYS.ArrowUp}">
        <i class="up-arrow arrow"></i>
      </a>
    `;
  return dom;
}

function noop() {}

function bindEvents(inputMapping) {
  Object.keys(inputMapping).forEach(key => {
    window.addEventListener(key, inputMapping[key], {
      passive: false,
      capture: true,
    });
  });
}

function preventDefault(event) {
  event.preventDefault();
}

function isTouching(touchEvent, rect) {
  const x = touchEvent.screenX;
  const y = touchEvent.screenY;
  const {top, left, right, bottom} = rect;
  return y >= top && x <= right && y <= bottom && x >= left;
}

function calculateLayouts(elements) {
  const map = new Map();
  elements.forEach(el => {
    const {top, left, right, bottom} = el.getBoundingClientRect();
    const rect = {top, left, right, bottom};
    map.set(el, rect);
  });
  return map;
}

class InputState {
  constructor() {
    Object.keys(KEYS).forEach(key => {
      this[key] = false;
    });
  }

  toJSON = () => {
    const json = {};
    Object.keys(KEYS).forEach(key => {
      json[key] = this[key];
    });
    return json;
  };

  toggleKey = (key, enabled) => {
    if (this[key] === enabled) {
      return this;
    } else {
      return Object.assign(new InputState(), this.toJSON(), {[key]: enabled});
    }
  };
}

export default class InputManager {
  constructor(viewport) {
    const dom = createDOM();
    viewport.appendChild(dom);
    const useTouch = canUseTouch();

    this._pressedState = new InputState();

    this._dom = dom;
    this._controls = Array.from(dom.querySelectorAll('.control'));
    this._layouts = calculateLayouts(this._controls);

    const inputMapping = useTouch
      ? {
          keydown: this._onKeyDown,
          keyup: this._onKeyUp,
          touchstart: this._onMouseDown,
          touchend: this._onMouseUp,
          touchcancel: this._onMouseUp,
          touchmove: this._onMouseMove,
          // contextmenu: preventDefault,
        }
      : {
          keydown: this._onKeyDown,
          keyup: this._onKeyUp,
          mousedown: this._onMouseDown,
          mouseup: this._onMouseUp,
          mousemove: this._onMouseMove,
          // contextmenu: preventDefault,
        };

    bindEvents(inputMapping);

    const appBinding = useTouch
      ? {
          touchstart: preventDefault,
          touchmove: preventDefault,
          resize: this._onResize,
          onorientationchang: this._onResize,
        }
      : {
          mousedown: preventDefault,
          resize: this._onResize,
        };

    bindEvents(appBinding);
  }

  getState = () => {
    return this._pressedState;
  };

  _render = () => {
    const state = this.getState();
    this._controls.forEach(control => {
      const key = control.name;
      if (state[key]) {
        control.classList.add('pressed');
      } else {
        control.classList.remove('pressed');
      }
    });
  };

  _pressKey = keyValue => {
    const key = KEYS[keyValue];
    let state = this._pressedState;
    switch (key) {
      case KEYS.ArrowLeft:
      case KEYS.ArrowRight:
      case KEYS.ArrowUp:
        state = state.toggleKey(key, true);
        break;
    }
    if (state !== this._pressedState) {
      this._pressedState = state;
      this._render();
      // window.scrollTo(0, 1000);

      if (key === KEYS.ArrowUp) {
        Sound.get('jump_2.mp3').play();
      }
    }
  };

  _releaseKey = keyValue => {
    const key = KEYS[keyValue];
    let state = this._pressedState;

    switch (key) {
      case KEYS.ArrowLeft:
      case KEYS.ArrowRight:
      case KEYS.ArrowUp:
        state = state.toggleKey(key, false);
        break;
    }
    if (state !== this._pressedState) {
      this._pressedState = state;
      this._render();
    }
  };

  _onKeyDown = event => {
    this._pressKey(event.key);
  };

  _onKeyUp = event => {
    this._releaseKey(event.key);
  };

  _onMouseDown = event => {
    const touches = event.touches ? Array.from(event.touches) : [event];
    const touchedControls = touches
      .map(tt => tt.target.closest('.control'))
      .filter(Boolean);

    touchedControls.forEach(control => {
      this._pressKey(control.name);
    });
  };

  _onMouseUp = event => {
    const touches = event.touches ? Array.from(event.touches) : [];
    const touchedControls = new Set(
      touches.map(tt => tt.target.closest('.control')).filter(Boolean)
    );

    this._controls.forEach(control => {
      if (!touchedControls.has(control)) {
        this._releaseKey(control.name);
      }
    });
  };

  _onMouseMove = event => {
    const touches = event.touches ? Array.from(event.touches) : [];
    touches.push(event);
    this._controls.forEach(control => {
      const key = control.name;
      const rect = this._layouts.get(control);
      const touching = touches.some(touchEvent => {
        return isTouching(touchEvent, rect);
      });
      if (touching) {
        this._pressKey(key);
      } else {
        this._releaseKey(key);
      }
    });
  };

  _onResize = () => {
    setTimeout(() => {
      this._layouts = calculateLayouts(this._controls);
    }, 100);
  };
}
