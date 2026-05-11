const canvas = document.getElementById("world-canvas");
const ctx = canvas.getContext("2d");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

let width = 0;
let height = 0;
let nodes = [];
let pointer = { x: 0, y: 0, active: false };

function resize() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.min(84, Math.max(36, Math.round(width / 18)));
  nodes = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    size: index % 6 === 0 ? 2.4 : 1.4,
    tone: index % 3,
  }));
}

function drawNode(node) {
  const colors = ["70, 217, 190", "244, 184, 96", "236, 111, 134"];
  ctx.beginPath();
  ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${colors[node.tone]}, 0.75)`;
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (const node of nodes) {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < -20) node.x = width + 20;
    if (node.x > width + 20) node.x = -20;
    if (node.y < -20) node.y = height + 20;
    if (node.y > height + 20) node.y = -20;

    if (pointer.active) {
      const dx = pointer.x - node.x;
      const dy = pointer.y - node.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 160) {
        node.x -= dx * 0.0009;
        node.y -= dy * 0.0009;
      }
    }
  }

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 150) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(247, 243, 232, ${0.11 * (1 - distance / 150)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    drawNode(nodes[i]);
  }

  requestAnimationFrame(animate);
}

window.addEventListener("resize", resize);
window.addEventListener("pointermove", (event) => {
  pointer = { x: event.clientX, y: event.clientY, active: true };
});
window.addEventListener("pointerleave", () => {
  pointer.active = false;
});

resize();
animate();
