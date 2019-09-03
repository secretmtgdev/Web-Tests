if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", e => fireUp());
} else {
  fireUp();
}

var canvas, ctx;

function fireUp() {
  canvas = document.querySelector("#my-canvas");
  ctx = canvas.getContext("2d");
  drawGrid();
}
function drawGrid() {
  // draw vertical lines
  for (let x = 0; x < 500; x += 10) {
    // origin
    ctx.moveTo(x, 0);

    // path stored in buffer
    ctx.lineTo(x, 500);
  }

  // draw horizontal lines
  for (let y = 0; y < 500; y += 10) {
    ctx.moveTo(0, y);
    ctx.lineTo(500, y);
  }

  ctx.strokeStyle = "blue";

  // execute buffer
  ctx.stroke();
}
