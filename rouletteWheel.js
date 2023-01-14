class RouletteWheel {
  constructor(x, y, r, width, height) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.width = width;
    this.height = height;
    this.angle = 0.03; // test
    this.degrees = 0;

    const wheelLines = new WheelLine(50, 300, 2, 23);
    wheelLines.draw();
    //console.log(wheelLines.testMethod());
  }

  update() {
    if (this.degrees === 0) {
      this.degrees += 1;
      console.log("degrees are ", this.degrees);
    }
    this.degrees += 1;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(1000, 650);
    ctx.rotate(-1);

    ctx.beginPath();
    ctx.arc(this.x / 2, this.y / 2, this.r, 0, 2 * Math.PI, false);
    ctx.lineWidth = 5;

    ctx.strokeStyle = "#ff5";
    ctx.stroke();

    ctx.restore();
  }
}
