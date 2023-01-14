class WheelLine {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  testMethod() {
    return 7;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    let startingPoint = 500;
    let x1 = 500;
    let y1 = 250;
    let length = 150;
    var angle = 360;
    var test;
    let degreesPerSlice = 360 / 37; // 9.72972972972973
    let slotDegrees = (degreesPerSlice * 2) / degreesPerSlice;
    let x2 =
      x1 + Math.cos((Math.PI / 360.0) * angle - degreesPerSlice) * length;
    let y2 = y1 + Math.sin((Math.PI / 180.0) * angle - 90) * length;
    ctx.moveTo(startingPoint, 250);
    ctx.lineTo(startingPoint, 50);
    ctx.stroke();
    for (let i = 0; i <= 5; i++) {
      ctx.moveTo(startingPoint, 250);
      ctx.lineTo((x2 += 10), y2);
      //ctx.lineTo(startingPoint, 50);
      ctx.stroke();
    }
  }
}
