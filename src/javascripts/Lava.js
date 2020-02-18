import State from './State';
import Vec from './Vec';

const SIZE = new Vec(1, 1);

export default class Lava {
  constructor(pos, speed, reset, action) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
    this.size = SIZE;
    this.type = 'lava';
    this.action = action;
  }

  static create(pos, ch) {
    if (ch == '=') {
      return new Lava(pos, new Vec(2, 0), null, 'movex');
    } else if (ch == '|') {
      return new Lava(pos, new Vec(0, 2), null, 'movey');
    } else if (ch == 'v') {
      return new Lava(pos, new Vec(0, 3), pos, 'drop');
    }
  }

  collide = state => {
    return new State(state.level, state.actors, 'lost');
  };

  update = (time, state) => {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, 'wall')) {
      return new Lava(newPos, this.speed, this.reset, this.action);
    } else if (this.reset) {
      return new Lava(this.reset, this.speed, this.reset, this.action);
    } else {
      return new Lava(this.pos, this.speed.times(-1), null, this.action);
    }
  };
}
