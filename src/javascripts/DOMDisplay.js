import getViewportSize from './getViewportSize';
import log from './log';

function elt(name, attrs, ...children) {
  let dom = document.createElement(name);
  for (let attr of Object.keys(attrs)) {
    dom.setAttribute(attr, attrs[attr]);
  }
  for (let child of children) {
    dom.appendChild(child);
  }
  return dom;
}

const scale = 20;

function drawGrid(level) {
  return elt(
    'table',
    {
      class: 'grid',
      style: `width: ${level.width * scale}px`,
    },
    ...level.rows.map((row) =>
      elt(
        'tr',
        {style: `height: ${scale}px`},
        ...row.map((type) => elt('td', {class: type}))
      )
    )
  );
}

function drawActors(actors) {
  return elt(
    'div',
    {class: 'actors'},
    ...actors.map((actor) => {
      let rect = elt('div', {class: `actor ${actor.type}`});
      rect.style.width = `${actor.size.x * scale}px`;
      rect.style.height = `${actor.size.y * scale}px`;
      const px = `${actor.pos.x * scale}px`;
      const py = `${actor.pos.y * scale}px`;
      rect.style.left = px;
      rect.style.top = py;

      const {attrs} = actor;
      if (attrs) {
        Object.keys(attrs).forEach((key) => {
          const val = attrs[key];
          if (typeof val === 'string' || typeof val === 'number') {
            if (
              key === 'rotate' ||
              key === 'opacity' ||
              key === 'perspective' ||
              key === 'skew'
            ) {
              rect.style.setProperty(`--${key}`, val);
            } else {
              rect.setAttribute(`data-${key}`, val);
            }
          }
        });
      }
      rect.setAttribute('data-costume', actor.costume || '');
      return rect;
    })
  );
}

export default class DOMDisplay {
  _currentScale = NaN;

  constructor(parent, level) {
    this.level = level;

    const grid = drawGrid(level);
    this.grid = grid;

    const coinsScored = elt('span', {class: 'coins-scored'});
    const coinsTotal = elt('span', {class: 'coins-all'});
    coinsTotal.innerHTML = ' / ' + String(level.coinsCount);
    const scores = elt('div', {class: 'scores'}, coinsScored, coinsTotal);
    this.scores = scores;
    this.coinsScored = coinsScored;

    const bg1 = elt('div', {class: 'background background-1'});
    const bg2 = elt('div', {class: 'background background-2'});

    const foreground = elt('div', {class: 'foreground'}, grid);
    this.foreground = foreground;

    this.dom = elt(
      'div',
      {
        class: 'game',
        'data-level': level.index + 1,
      },

      foreground,
      scores,
      bg1,
      bg2
    );

    this.actorLayer = null;
    this.bg1 = bg1;
    this.bg2 = bg2;

    parent.appendChild(this.dom);

    window.addEventListener('resize', this._autoScale, true);
    document.addEventListener('scroll', this._autoScale, true);
  }

  clear() {
    this.dom.remove();
    this.dom = null;
    window.removeEventListener('resize', this._autoScale, true);
  }

  syncState = (state) => {
    if (this.actorLayer) {
      this.actorLayer.remove();
    }
    this.actorLayer = drawActors(state.actors);
    this.foreground.appendChild(this.actorLayer);
    this.dom.className = `game ${state.status}`;

    this.scrollPlayerIntoView(state);
    this._autoScale();
  };

  scrollPlayerIntoView = (state) => {
    let width = this.foreground.clientWidth;
    let height = this.foreground.clientHeight;
    let margin = width / 3;

    // The viewport
    let left = this.foreground.scrollLeft,
      right = left + width;
    let top = this.foreground.scrollTop,
      bottom = top + height;

    let player = state.player;
    let center = player.pos.plus(player.size.times(0.5)).times(scale);

    const {scrollLeft, scrollTop} = this.foreground;
    if (center.x < left + margin) {
      this.foreground.scrollLeft = center.x - margin;
    } else if (center.x > right - margin) {
      this.foreground.scrollLeft = center.x + margin - width;
    }
    if (center.y < top + margin) {
      this.foreground.scrollTop = center.y - margin;
    } else if (center.y > bottom - margin) {
      this.foreground.scrollTop = center.y + margin - height;
    }

    this.coinsScored.textContent =
      this.level.coinsCount -
      state.actors.filter((ac) => ac.type === 'coin').length;

    const bx1 = -scrollLeft * 0.2;
    const bx2 = -scrollLeft * 0.4;
    this.bg1.style.backgroundPosition = `${bx1}px bottom`;
    this.bg2.style.backgroundPosition = `${bx2}px bottom`;
  };

  _currentGame = NaN;

  _autoScale = (event) => {
    const game = this.dom;
    if (!game) {
      this._currentScale = NaN;
      return;
    }
    const currentScale = this._currentScale;
    const style = document.defaultView.getComputedStyle(game);
    const hh = parseInt(style.height, 10);
    const ww = parseInt(style.width, 10);

    const {width, height} = getViewportSize();
    const vh = height - 20;
    const vw = width - 20;

    const scale = Math.round(10 * (vh > vw ? vw / ww : vh / hh)) / 10;
    if (scale && scale !== currentScale) {
      this._currentScale = scale;
      // log({scale, vw, vh});
      game.style.transform = `scale(${scale})`;
    }
  };
}
