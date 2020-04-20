import Vec from './Vec';
import Sound from './Sound';

const SIZE = new Vec(0.8, 1.5);
const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

export default class Player {
  constructor(pos, speed, costume, attrs) {
    this.pos = pos;
    this.speed = speed;
    this.size = SIZE;
    this.type = 'player';
    this.costume = costume;
    this.attrs = attrs || {};
  }

  static create(initialPos) {
    const speed = new Vec(0, 0);
    const direction = 'right';
    const costume = 'stand';
    const pos = initialPos.plus(new Vec(0, -0.5));
    return new Player(pos, speed, costume, {direction});
  }

  update = (time, state, keys) => {
    let xSpeed = 0;
    if (keys.ArrowLeft) {
      xSpeed -= playerXSpeed;
    }
    if (keys.ArrowRight) {
      xSpeed += playerXSpeed;
    }
    let pos = this.pos;
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    if (!state.level.touches(movedX, this.size, 'wall')) {
      pos = movedX;
    }

    let ySpeed = this.speed.y + time * gravity;
    let movedY = pos.plus(new Vec(0, ySpeed * time));
    if (!state.level.touches(movedY, this.size, 'wall')) {
      pos = movedY;
    } else if (keys.ArrowUp && ySpeed > 0) {
      ySpeed = -jumpSpeed;
    } else {
      ySpeed = 0;
    }

    let costume = this.costume;
    let direction = this.attrs.direction;

    if (xSpeed === 0) {
      costume = 'stand';
    } else {
      const dx = (pos.x | 0) % 2;
      costume = dx < 1 ? 'step-1' : 'step-2';
      direction = xSpeed > 0 ? 'right' : 'left';
    }

    if (ySpeed !== 0) {
      costume = 'jump';
    }

    const speed = new Vec(xSpeed, ySpeed);
    let sound;

    return new Player(pos, speed, costume, {direction});
  };
}
