class RouletteWheel {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x / 2, this.y / 2, this.r, 0, 2 * Math.PI, false);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#ffa500";
    ctx.stroke();
  }
}
