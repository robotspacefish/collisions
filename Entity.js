export default class Entity {
  static all = [];

  constructor(x, y, w, h, spritePath) {
    this.x = x;
    this.y = y;
    this._w = w;
    this._h = h;
    this.image = new Image();
    this.image.src = spritePath;
    Entity.all.push(this);
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
    ctx.drawImage(this.image, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h)
  }


}