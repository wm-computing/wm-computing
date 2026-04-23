document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return; // Guard: only run on pages that have the canvas

  const ctx = canvas.getContext('2d');

  let width, height;
  const lines = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class DataLine {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.length = Math.random() * 150 + 50;
      this.speed = Math.random() * 15 + 5;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.y += this.speed;
      if (this.y > height + this.length) {
        this.y = -this.length;
        this.x = Math.random() * width;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y - this.length);

      const grad = ctx.createLinearGradient(this.x, this.y, this.x, this.y - this.length);
      grad.addColorStop(0, `rgba(0, 255, 65, ${this.opacity})`);
      grad.addColorStop(1, `rgba(0, 255, 65, 0)`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  for (let i = 0; i < 100; i++) {
    lines.push(new DataLine());
  }

  let speedMultiplier = 1;

  document.addEventListener('mousemove', (e) => {
    const normalizedY = e.clientY / height;
    speedMultiplier = 1 + (normalizedY * 2);
  });

  function animate() {
    ctx.fillStyle = 'rgba(2, 6, 12, 0.2)';
    ctx.fillRect(0, 0, width, height);

    lines.forEach(line => {
      const baseSpeed = line.speed;
      line.speed *= speedMultiplier;
      line.update();
      line.speed = baseSpeed;
      line.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
});

