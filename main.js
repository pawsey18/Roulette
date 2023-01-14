const canvas = document.getElementById("myCanvas");
canvas.width = 2000;
canvas.height = 1000;
const ctx = canvas.getContext("2d");

const outterCircle = new RouletteWheel(1000, 500, 200, 1000, 1000); // test circle
const innerCircle = new RouletteWheel(1000, 500, 25, 100, 100);

//outterCircle.draw(ctx);
//innerCircle.draw(ctx);

for (let i = 0; i < 10; i++) {
  animate();
}

function animate() {
  outterCircle.draw(ctx);
  outterCircle.update();

  requestAnimationFrame(animate);
}
