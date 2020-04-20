import Coin from './Coin';
import FlyGuardian from './FlyGuardian';
import Lava from './Lava';
import Monster from './Monster';
import Player from './Player';
import Vec from './Vec';

const levelChars = {
  '#': 'wall',
  '+': 'lava',
  '.': 'empty',
  '=': Lava,
  '@': Player,
  '|': Lava,
  F: FlyGuardian,
  M: Monster,
  o: Coin,
  v: Lava,
};

export default class Level {
  constructor(plan, index) {
    let rows = plan
      .trim()
      .split('\n')
      .map((l) => [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];
    this.coinsCount = 0;
    this.index = index || 0;

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch];
        if (!type) {
          throw new Error(`unsupprted type = "${ch}" `);
        }
        if (typeof type == 'string') {
          return type;
        }
        if (type === Coin) {
          this.coinsCount++;
        }
        this.startActors.push(type.create(new Vec(x, y), ch));
        return 'empty';
      });
    });
  }

  touches = (pos, size, type) => {
    var xStart = Math.floor(pos.x);
    var xEnd = Math.ceil(pos.x + size.x);
    var yStart = Math.floor(pos.y);
    var yEnd = Math.ceil(pos.y + size.y);

    for (var y = yStart; y < yEnd; y++) {
      for (var x = xStart; x < xEnd; x++) {
        let isOutside = x < 0 || x >= this.width || y < 0 || y >= this.height;
        let here = isOutside ? 'wall' : this.rows[y][x];
        if (here == type) return true;
      }
    }
    return false;
  };
}
