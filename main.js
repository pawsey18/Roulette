const canvas = document.getElementById("myCanvas");
canvas.height = 1000;
canvas.width = 1000;

const ctx = canvas.getContext("2d");

const outterCircle = new RouletteWheel(1000, 500, 200);
const innerCircle = new RouletteWheel(1000, 500, 25);
outterCircle.draw(ctx);
innerCircle.draw(ctx);

const wheelLines = new WheelLine(50, 300, 2, 23);
wheelLines.draw(ctx);
console.log(wheelLines.testMethod());
