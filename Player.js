import Entity from './Entity.js';

export default class Player extends Entity {
  constructor(x, y) {
    super(x, y, 14, 16);
    this.movement = { UP: false, DOWN: false, LEFT: false, RIGHT: false }
    this.vx = 0;
    this.vy = 0;
    this.acceleration = 1;
  }


  update(width, height) {
    if (this.movement.UP && !this.movement.DOWN) this.vy -= this.acceleration;
    if (this.movement.DOWN && !this.movement.UP) this.vy += this.acceleration;
    if (this.movement.LEFT && !this.movement.RIGHT) this.vx -= this.acceleration;
    if (this.movement.RIGHT && !this.movement.LEFT) this.vx += this.acceleration;
    if (!this.movement.DOWN && !this.movement.UP) this.vy = 0;
    if (!this.movement.LEFT && !this.movement.RIGHT) this.vx = 0;

    // move
    this.x = Math.max(0, Math.min(this.x + this.vx, width - this.w));
    this.y = Math.max(0, Math.min(this.y + this.vy, height - this.h));
  }

  // draw(ctx) {
  //   // super.draw(ctx);
  //   // ctx.fillStyle = 'white';
  //   // ctx.font = '12px sans-serif'
  //   // ctx.fillText('Player', this.x + 8, this.y + this.h / 2);

  // }

}