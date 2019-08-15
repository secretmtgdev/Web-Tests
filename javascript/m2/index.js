window.onmousemove = moveElement;
window.onmouseup = stopMovement;
window.onload = init;

window.onkeydown = event => {
  document.getElementById("key-event-replace").innerHTML = `key: ${
    event.key
  } | code: ${event.code}`;
};

var selected, currX, currY, oldX, oldY;

function init() {
  console.log("page loaded");
  document.querySelector("#page-status").innerText = "Page Loaded";
  document
    .querySelector("#free-space")
    .addEventListener("mousemove", mouseMove);
  document.querySelector(".draggable").onmousedown = function(event) {
    dragInit(event);
  };
}

addEventListener("click", event => {
  event.preventDefault();
  console.log("click");
});

function processClick() {
  var p = document.createElement("p");
  p.innerText = "button has been clicked";
  document.getElementById("button-append").appendChild(p);
}

function mouseMove(event) {
  var boundingRectangle = event.target.getBoundingClientRect();
  var mouseX = event.clientX - boundingRectangle.left;
  var mouseY = event.clientY - boundingRectangle.top;
  document.getElementById(
    "free-space"
  ).innerText = `x: ${mouseX}, y: ${mouseY}`;
}

function dragInit(event) {
  selected = event.target;
  currX = selected.offsetLeft;
  currY = selected.offsetTop;
  oldX = event.clientX;
  oldY = event.clientY;
}

function moveElement(element) {
  var newMouseX = element.clientX;
  var newMouseY = element.clientY;

  if (oldX !== undefined) {
    var dx = newMouseX - oldX;
    var dy = newMouseY - oldY;
  }
  if (selected !== null) {
    changePosition(dx, dy);
  }

  oldX = newMouseX;
  oldY = newMouseY;
}

function changePosition(dx, dy) {
  currX += dx;
  currY += dy;

  selected.style.left = currX + "px";
  selected.style.top = currY + "px";
}

function stopMovement() {
  selected = null;
}
