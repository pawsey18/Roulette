const canvas = document.getElementById("myCanvas");
canvas.height = 1000;
canvas.width = 1000;

const ctx = canvas.getContext("2d");

const rouletteWheel = new RouletteWheel(1000,500,200)
rouletteWheel.draw(ctx)
