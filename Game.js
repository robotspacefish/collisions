import Player from './Player.js';
import Entity from './Entity.js';

export default class Game {
  constructor(ctx, width = 128, height = 128) {
    this._ctx = ctx;
    this.obstacles = [];
    this.RAF;

    // logical
    this.width = width;
    this.height = height;
    this.maxWidth = this.width;
    this.maxHeight = this.height;

    // visual
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;

    this.player = new Player(100, this.height - 100);

    this.resize();
    this.loop();
  }

  static createObstacle(x, y, w, h, spritePath) {
    this.obstacles.push(new Entity(x, y, w, h, spritePath));
  }

  get ctx() {
    return this._ctx;
  }

  loop() {
    this.draw();
    this.update();
    this.RAF = requestAnimationFrame(this.loop.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    Entity.all.forEach(s => s.draw(this.ctx));

  }

  update() {
    this.player.update(this.width, this.height);
  }

  resize() {
    let cWidth = window.innerWidth,
      cHeight = window.innerHeight;

    const nativeRatio = this.width / this.height,
      browserWindowRatio = cWidth / cHeight;

    if (browserWindowRatio > nativeRatio) {
      cHeight = Math.floor(cHeight * 0.9);
      cWidth = Math.floor(cHeight * nativeRatio);
    } else {
      cWidth = Math.floor(cWidth * 0.9);
      cHeight = Math.floor(cWidth / nativeRatio)
    }

    this.ctx.canvas.style.width = `${cWidth}px`;
    this.ctx.canvas.style.height = `${cHeight}px`;

    this.ctx.enableImageSmoothing = false;
  }
}