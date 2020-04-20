import Vec from './Vec';

function isPointAtBox(point, box) {
  if (
    point.x > box.pos.x + box.size.x ||
    point.x < box.pos.x ||
    point.y > box.pos.y + box.size.y ||
    point.y < box.pos.y
  ) {
    return false;
  }

  return true;
}

function isOverlapping(boxA, boxB) {
  return (
    isPointAtBox(boxA.pos, boxB) ||
    isPointAtBox(new Vec(boxA.pos.x + boxA.size.x, boxA.pos.y), boxB) ||
    isPointAtBox(new Vec(boxA.pos.x, boxA.size.y + boxA.pos.y), boxB) ||
    isPointAtBox(
      new Vec(boxA.pos.x + boxA.size.x, boxA.size.y + boxA.pos.y),
      boxB
    )
  );
}

export default class BoundingBox {
  constructor(pos, size) {
    this.pos = pos;
    this.size = size;
  }

  isOverlapping(box) {
    return isOverlapping(box, this); // || isOverlapping(this, box);
  }
}
