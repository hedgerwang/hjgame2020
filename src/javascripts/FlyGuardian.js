import BoundingBox from './BoundingBox';
import State from './State';
import Vec from './Vec';

const SIZE = new Vec(4, 2);

let dir = 0;

export default class FlyGuardian {
  constructor(pos, speed, costume, attrs) {
    this.attrs = attrs;
    this.costume = costume || 'frame-1';
    this.pos = pos;
    this.size = SIZE;
    this.speed = speed;
    this.type = 'fly-guardian';
  }

  static create(pos, ch) {
    dir++;
    const speed = dir % 2 ? new Vec(2, 0) : new Vec(-2, 0);
    return new FlyGuardian(pos, speed, 'frame-1', {
      direction: dir % 2 ? 'left' : 'right',
    });
  }

  collide = (state) => {
    return state;
    // return new State(state.level, state.actors, 'lost');
  };

  update = (time, state) => {
    const now = Date.now();
    const frame = now % 8 <= 4 ? 1 : 2;
    // deg => 1 ~ -1.
    const deg = Math.cos(((now % 3600) / 3600) * Math.PI * 2);
    const rotate = `${deg * 45}deg`;
    const opacity = Math.abs(deg) + 0.2;
    const costume = `frame-${frame}`;
    const skew = `${deg / 20}turn`;
    let speed = this.speed;
    let pos = this.pos.plus(speed.times(time));
    let attrs = this.attrs;

    if (state.level.touches(pos, this.size, 'wall')) {
      pos = this.pos;
      speed = this.speed.times(-1);
    } else {
      const boxThis = new BoundingBox(pos, this.size);
      const anotherGuardian = state.actors.find((actor) => {
        if (actor == this || actor.type !== 'fly-guardian') {
          return false;
        }
        const boxThat = new BoundingBox(actor.pos, actor.size);
        return boxThis.isOverlapping(boxThat);
      });

      if (anotherGuardian) {
        const mx = anotherGuardian.pos.x + anotherGuardian.size.x / 2;
        pos = this.pos;
        if (speed.x > 0 && pos.x < mx) {
          speed = speed.times(-1);
        }
        if (speed.x < 0 && pos.x > mx) {
          speed = speed.times(-1);
        }
      }
    }

    const direction = speed.x < 0 ? 'left' : 'right';
    attrs = {...attrs, direction, rotate, opacity, skew};
    return new FlyGuardian(pos, speed, costume, attrs);
  };
}
