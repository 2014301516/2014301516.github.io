// sakura.js - Canvas 樱花飘落效果优化版

const canvas = document.getElementById('sakuraCanvas');
const ctx = canvas.getContext('2d');
let width, height, petals = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.r = Math.random() * 5 + 2;
    this.speed = Math.random() * 1 + 0.5;
    this.color = 'rgba(255,182,193,0.8)';
  }

  update() {
    this.y += this.speed;
    this.x += Math.sin(this.y * 0.01);
    if (this.y > height) {
      this.y = 0;
      this.x = Math.random() * width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function createPetals(count) {
  petals = [];
  for (let i = 0; i < count; i++) {
    petals.push(new Petal());
  }
}

function animatePetals() {
  ctx.clearRect(0, 0, width, height);
  for (let petal of petals) {
    petal.update();
    petal.draw();
  }
  requestAnimationFrame(animatePetals);
}

createPetals(100);
animatePetals();

