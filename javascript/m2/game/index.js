if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    init();
  });
} else {
  init();
}

var canvas, ctx;
var height;
var width;
var moveX = 0;
var moveY = 1;
var currentSpeed = 1;
var currentColor = "black";

function init() {
  canvas = document.querySelector("#my-canvas");
  ctx = canvas.getContext("2d");
  height = canvas.height;
  width = canvas.width;
  setInterval(
    () =>
      (currentColor =
        "rgb(" +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        ")"),
    1000
  );
  animate();
}

function animate() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFace(currentColor, moveX + 400, moveY + 400);
  moveX += currentSpeed * Math.random();
  moveY += currentSpeed * Math.random();
  if (
    moveX + 50 > width ||
    moveX - 50 < 0 ||
    (moveY - 50 < 0 || moveY + 50 > height)
  ) {
    currentSpeed *= -1.01;
  }
  requestAnimationFrame(animate);
}

function drawRectangle(color, x, y, width, height, outline) {
  if (!outline) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  } else {
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.strokeRect(x, y, width, height);
  }
}

function drawCircle(color, x, y, radius) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function drawFace(color, x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(0, 0, 100, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.rotate((20 * Math.PI) / 180);
  drawRectangle(color, -70, -20, 50, 10, false);
  ctx.rotate((-40 * Math.PI) / 180);
  drawRectangle(color, 30, -20, 50, 10, false);
  ctx.rotate((20 * Math.PI) / 180);
  drawRectangle(color, -50, 40, 100, 10, false);
  ctx.restore();
}
