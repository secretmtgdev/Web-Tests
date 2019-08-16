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
