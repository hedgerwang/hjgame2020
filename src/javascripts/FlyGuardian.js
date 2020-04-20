import BoundingBox from './BoundingBox';
import State from './State';
import Vec from './Vec';

const SIZE = new Vec(4, 2);

let dir = 0;

export default class FlyGuardian {
  constructor(pos, speed, reset, action) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
    this.size = SIZE;
    this.type = 'fly-guardian';
    this.action = action || 'frame-1';
    this.boundingBox = new BoundingBox(pos, SIZE);
  }

  static create(pos, ch) {
    dir++;
    const speed = dir % 2 ? new Vec(2, 0) : new Vec(-2, 0);
    console.log(dir, speed);
    return new FlyGuardian(pos, speed, null, null);
  }

  collide = (state) => {
    return new State(state.level, state.actors, 'lost');
  };

  update = (time, state) => {
    let newPos = this.pos.plus(this.speed.times(time));
    const frame = (Math.round(this.pos.x) % 2) + 1;
    const action = `frame-${frame}`;

    if (state.level.touches(newPos, this.size, 'wall')) {
      return new FlyGuardian(this.pos, this.speed.times(-1), null, action);
    }

    const anotherGuardian = state.actors.find(
      this._isTouchingAnotherFlyGuardian
    );

    if (anotherGuardian) {
      let speed = this.speed;
      let pos = this.pos;
      if (speed.x > 0 && this.pos.x < anotherGuardian.pos.x) {
        speed = speed.times(-1);
        pos = pos.plus(speed.times(0.1));
      }
      if (speed.x < 0 && this.pos.x > anotherGuardian.pos.x) {
        speed = speed.times(-1);
        pos = pos.plus(speed.times(0.1));
      }
      return new FlyGuardian(pos, speed, this.reset, action);
    }

    if (this.reset) {
      return new FlyGuardian(this.reset, this.speed, this.reset, action);
    }
    return new FlyGuardian(newPos, this.speed, this.reset, action);
  };

  _isTouchingAnotherFlyGuardian = (actor) => {
    if (actor == this || actor.type !== 'fly-guardian') {
      return false;
    }
    return this.boundingBox.isOverlapping(actor.boundingBox);
  };
}
