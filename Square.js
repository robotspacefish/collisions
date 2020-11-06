export default class Square {
  static all = [];

  constructor(x, y, c = 'red', w = 50, h = 50) {
    this.x = x;
    this.y = y;
    this._c = c;
    this._w = w;
    this._h = h;

    Square.all.push(this);
  }

  get c() {
    return this._c;
  }

  get w() {
    return this._w;
  }

  get h() {
    return this._h;
  }

  draw(ctx) {
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }


}