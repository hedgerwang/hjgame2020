import State from './State';
import Vec from './Vec';

const SIZE = new Vec(1, 1);

export default class Lava {
  constructor(pos, speed, costume, attrs) {
    this.attrs = attrs || {};
    this.costume = costume;
    this.pos = pos;
    this.size = SIZE;
    this.speed = speed;
    this.type = 'lava';
  }

  static create(pos, ch) {
    if (ch == '=') {
      return new Lava(pos, new Vec(2, 0), 'movex');
    } else if (ch == '|') {
      return new Lava(pos, new Vec(0, 2), 'movey');
    } else if (ch == 'v') {
      return new Lava(pos, new Vec(0, 3), 'drop', {reset: pos});
    }
  }

  collide = (state) => {
    return new State(state.level, state.actors, 'lost');
  };

  update = (time, state) => {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, 'wall')) {
      return new Lava(newPos, this.speed, this.costume, this.attrs);
    } else if (this.attrs.reset) {
      return new Lava(this.attrs.reset, this.speed, this.costume, this.attrs);
    } else {
      return new Lava(this.pos, this.speed.times(-1), this.costume);
    }
  };
}
