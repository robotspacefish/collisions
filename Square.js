export default class Square {
  constructor(x, y, c, w = 20, h = 20) {
    this.x = x;
    this.y = y;
    this._c = c;
    this._w = w;
    this._h = h;
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