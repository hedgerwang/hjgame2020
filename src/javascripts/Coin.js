import State from './State';
import Vec from './Vec';

const SIZE = new Vec(0.6, 0.6);
const PI2 = Math.PI * 2;
const wobbleSpeed = 8;
const wobbleDist = 0.07;

export default class Coin {
  constructor(pos, basePos, wobble) {
    this.pos = pos;
    this.basePos = basePos;
    this.wobble = wobble;
    this.size = SIZE;
    this.type = 'coin';
  }

  static create(pos) {
    let basePos = pos.plus(new Vec(0.2, 0.1));
    return new Coin(basePos, basePos, Math.random() * PI2);
  }

  collide = state => {
    let filtered = state.actors.filter(a => a != this);
    let status = state.status;
    if (!filtered.some(a => a.type == 'coin')) {
      status = 'won';
    }
    return new State(state.level, filtered, status);
  };

  update = time => {
    let wobble = this.wobble + time * wobbleSpeed;
    let wobblePos = Math.sin(wobble) * wobbleDist;
    return new Coin(
      this.basePos.plus(new Vec(0, wobblePos)),
      this.basePos,
      wobble
    );
  };
}
