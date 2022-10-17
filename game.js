const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.heigth = window.innerHeight - 100;

const dino = {
  x: 10,
  y: 200,
  width: 50,
  heigth: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.heigth);
  },
};

dino.x += 1;

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.heigth);
  }
}

const cactus = new Cactus();
cactus.draw();

const timer = 0;
const cactusArray = [];

const framesCount = () => {
  requestAnimationFrame(framesCount);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (timer % 60 === 0) {
    const cactus = new Cactus();
    cactusArray.push(cactus);
  }
  cactusArray.forEach((item) => {
    a.x--;
    item.draw();
  });
  dino.draw();
};

framesCount;
