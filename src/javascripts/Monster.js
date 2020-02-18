import State from './State';
import Vec from './Vec';

const SIZE = new Vec(1, 1);
const DEAD_POS = new Vec(-1, -1);
const DEAD_SPEED = new Vec(0, 0);

function isKilling(player, monsterPos) {
  return (
    player.pos.x + player.size.x > monsterPos.x &&
    player.pos.x < monsterPos.x + SIZE.x &&
    player.pos.y + player.size.y > monsterPos.y &&
    player.pos.y < monsterPos.y &&
    player.speed.y > 0
  );
}

export default class Monster {
  deadAt = null;
  disposed = null;
  action = null;
  opacity = 1;
  constructor(pos, speed, reset, attrs) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
    this.size = SIZE;
    this.type = 'monster';
    if (attrs) {
      Object.assign(this, attrs);
    }
  }

  static create(pos) {
    return new Monster(pos, new Vec(2, 0));
  }

  update(time, state) {
    if (this.disposed) {
      return this;
    }

    if (this.deadAt) {
      const duration = Date.now() - this.deadAt;
      if (duration > 1000) {
        return new Monster(DEAD_POS, DEAD_SPEED, null, {
          deadAt: this.deadAt,
          disposed: true,
          action: 'dying',
          opacity: 0,
        });
      } else {
        return new Monster(this.pos, DEAD_SPEED, null, {
          deadAt: this.deadAt,
          disposed: false,
          action: 'dying',
          opacity: 1 - duration / 1000,
        });
      }
    }

    let newPos = this.pos.plus(this.speed.times(time));

    const dx = (newPos.x | 0) % 2;
    const action = dx < 1 ? 'step-1' : 'step-2';

    if (isKilling(state.player, newPos)) {
      return new Monster(this.pos, DEAD_SPEED, null, {
        deadAt: Date.now(),
        disposed: false,
        action: 'dying',
        opacity: 1,
      });
    }
    if (!state.level.touches(newPos, this.size, 'wall')) {
      return new Monster(newPos, this.speed, this.reset, {action});
    } else if (this.reset) {
      return new Monster(this.reset, this.speed, this.reset, {action});
    } else {
      return new Monster(this.pos, this.speed.times(-1), null, {action});
    }
  }

  collide(state) {
    if (this.deadAt) {
      if (this.disposed) {
        return new State(
          state.level,
          state.actors.filter(ac => ac !== this),
          state.status
        );
      } else {
        return state;
      }
    }
    const status = isKilling(state.player, this.pos) ? state.status : 'lost';
    return new State(state.level, state.actors, status);
  }
}
