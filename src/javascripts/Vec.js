export default class Vec {
  constructor(x, y) {
    this._x = x;
    this._y = y;
    this._length = null;
    this.x = x;
    this.y = y;
    if (isNaN(x) || isNaN(y)) {
      throw new Error(`Invalid value ${this.toString()}`);
    }
  }

  toString() {
    return `[${this._x}, ${this._y}]`;
  }

  plus(vector) {
    return new Vec(this._x + vector.x, this._y + vector.y);
  }

  minus(vector) {
    return new Vec(this._x - vector.x, this._y - vector.y);
  }

  length() {
    if (this._length === null) {
      const x = this._y;
      const y = this._y;
      this._length = Math.sqrt(x * x + y * y);
    }
    return this._length;
  }

  times(factor) {
    return new Vec(this._x * factor, this._y * factor);
  }
}
