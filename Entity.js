export default class Entity {
  static all = [];

  constructor(x, y, w, h, spritePath, shape, c) {
    this.x = x;
    this.y = y;
    this._w = w;
    this._h = h;
    this._shape = shape;
    this._c = c;
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

  get shape() {
    return this._shape;
  }

  get c() {
    return this._c;
  }

  draw(ctx) {
    ctx.globalAlpha = 0.8
    ctx.fillStyle = this.c;
    if (this.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(this.x + this.w / 2, this.y + this.h / 2, 5, 0, 2 * Math.PI);
      ctx.fill();
    } else if (this.shape === 'rectangle') {
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    ctx.globalAlpha = 1;
    ctx.drawImage(this.image, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h)


  }


}