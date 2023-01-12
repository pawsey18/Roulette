class WheelLine {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //let { x, y } = position;
  }

  testMethod() {
    return 7;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#000";

    let startingPoint = 500;
    let x1 = 500;
    let y1 = 250;
    let length = 200;
    let angle = 90;
    let x2 = x1 + Math.cos((Math.PI / 180.0) * angle - 90) * length;
    let y2 = y1 + Math.sin((Math.PI / 180.0) * angle - 90) * length;

    ctx.moveTo(startingPoint, 250);
    ctx.lineTo(startingPoint, 50);
    ctx.stroke();

    for (let i = 0; i <= 10; i++) {
      ctx.moveTo(startingPoint, 250);

      ctx.lineTo(x2, y2);
      //ctx.lineTo(startingPoint, 50);

      ctx.stroke();
    }
  }
}
