import DOMDisplay from './DOMDisplay';
import InputManager from './InputManager';
import Level from './Level';
import Sound from './Sound';
import State from './State';
import {GAME_LEVELS} from './Configs';

function runAnimation(frameFunc) {
  let lastTime = null;
  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000;
      if (frameFunc(timeStep) === false) {
        return;
      }
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function runLevel(viewport, level, Display, inputManager) {
  let display = new Display(viewport, level);
  let state = State.start(level);
  let ending = 1;
  return new Promise((resolve) => {
    runAnimation((time) => {
      state = state.update(time, inputManager.getState());
      display.syncState(state);
      if (state.status == 'playing') {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
}

async function runGame(viewport, plans, Display, inputKeys) {
  for (let ii = 0; ii < plans.length; ) {
    const level = new Level(plans[ii], ii);
    let status = await runLevel(viewport, level, Display, inputKeys);
    if (status == 'won') {
      ii++;
    }
  }
  alert("You've won!");
}

const initialIntercostumeEvents = ['touchend', 'mouseup', 'keyup'];

// Long sound must be trigged by user's intercostume.
function playGameSound(event) {
  if (event.type === 'keyup' && !/Arrow/.test(event.key)) {
    return;
  }
  if (Sound.get('playing_1.mp3').play(true)) {
    initialIntercostumeEvents.forEach((type) =>
      window.removeEventListener(type, playGameSound, true)
    );
  }
}

export default class Game {
  constructor(levelNumber = 1) {
    const viewport = document.createElement('div');
    viewport.className = 'viewport';
    document.body.appendChild(viewport);

    // Long sound must be trigged by user's intercostume first.
    initialIntercostumeEvents.forEach((type) =>
      window.addEventListener(type, playGameSound, true)
    );

    const inputManager = new InputManager(viewport);

    let levels = GAME_LEVELS[levelNumber - 1]
      ? GAME_LEVELS.slice(levelNumber - 1)
      : GAME_LEVELS;

    runGame(viewport, levels, DOMDisplay, inputManager);

    window.onerror = function (msg, url, line) {
      // alert(msg);
      return true; // same as preventDefault
    };

    window.addEventListener('gamepadconnected', (e) => {
      console.log(
        'Gamepad connected at index %d: %s. %d buttons, %d axes.',
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length
      );
    });
  }
}
