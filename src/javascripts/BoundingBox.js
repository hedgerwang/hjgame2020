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

export default class BoundingBox {
  constructor(pos, size) {
    this.pos = pos;
    this.size = size;
  }

  isOverlapping(box) {
    return (
      isPointAtBox(box.pos, this) ||
      isPointAtBox(new Vec(box.pos.x + box.size.x, box.pos.y), this) ||
      isPointAtBox(new Vec(box.pos.x, box.size.y + box.pos.y), this) ||
      isPointAtBox(
        new Vec(box.pos.x + box.size.x, box.size.y + box.pos.y),
        this
      )
    );
  }
}
