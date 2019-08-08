var state = {
  width: 0,
  height: 0,
  overflow: false,
  textBoxHeight: 0,
  textBoxWidth: 0,
  boundingBoxHeight: 0,
  boundingBoxWidth: 0,
  heightDelta: 0,
  widthDelta: 0,
  fontHeight: 0
};

var TOLERANCE = 5;

updateDimensions();
resize();
window.onresize = resize;
console.log(
  document.getElementsByClassName("suggested-game-box")[0].scrollWidth
);

function resize(event) {
  if (state.heightDelta > TOLERANCE) {
    while (state.heightDelta > TOLERANCE) {
      growToFit();
      updateDimensions();
    }
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    updateDimensions();
    if (state.heightDelta < 0 - TOLERANCE) {
      shrinkToFit();
    }
  } else {
    shrinkToFit();
  }
}

function shrinkToFit() {
  while (state.heightDelta < 0 - TOLERANCE) {
    incrementalShrink();
    updateDimensions();
  }
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  updateDimensions();
}

function incrementalShrink() {
  var element = document.getElementsByClassName("suggested-game-text")[0];
  state.fontHeight--;
  element.style.fontSize = state.fontHeight + "px";
}

function growToFit() {
  var element = document.getElementsByClassName("suggested-game-text")[0];
  state.fontHeight++;
  element.style.fontSize = state.fontHeight + "px";
}

function getElementAndHeight() {
  var element = document.getElementsByClassName("suggested-game-text")[0];
  if (!(element === null || element === undefined)) {
    var fontHeight = parseInt(
      window.getComputedStyle(element, null).getPropertyValue("font-size")
    );
    return [element, fontHeight];
  }
}

function checkTextBoxOverflow() {
  updateDimensions();
  var validHeight = state.textBoxHeight <= state.boundingBoxHeight;
  var validWidth = state.textBoxWidth <= state.boundingBoxWidth;
  var overflow = !(validHeight && validWidth);
  return [
    overflow,
    validHeight ? 0 : state.heightDelta,
    validWidth ? 0 : state.widithDelta
  ];
}

function updateDimensions() {
  document.getElementById("height").innerText = state.height + "px";
  document.getElementById("width").innerText = state.width + "px";
  document.getElementById("platform").innerText =
    state.width > 1024 ? "Desktop" : state.width > 768 ? "Tablet" : "Phone";
  document.getElementById("overflowed").innerText = state.overflow;
  var textBox = document.getElementsByClassName("suggested-game-text")[0];
  state.textBoxHeight = textBox.scrollHeight;
  state.textBoxWidth = textBox.scrollWidth;
  state.boundingBoxHeight = textBox.parentElement.clientHeight;
  state.boundingBoxWidth = textBox.clientWidth;
  state.heightDelta = state.boundingBoxHeight - state.textBoxHeight;
  state.widthDelta = state.boundingBoxWidth - state.textBoxWidth;

  document.getElementById("suggested-text-height").innerText =
    state.textBoxHeight + "px";
  document.getElementById("suggested-text-width").innerText =
    state.textBoxWidth + "px";
  document.getElementById("bounding-box-height").innerText =
    state.boundingBoxHeight + "px";
  document.getElementById("bounding-box-width").innerText =
    state.boundingBoxWidth + "px";
  document.getElementById("height-delta").innerText = state.heightDelta + "px";
  document.getElementById("width-delta").innerText = state.widthDelta + "px";
  var element = document.getElementsByClassName("suggested-game-text")[0];
  state.fontHeight = parseInt(
    window.getComputedStyle(element, null).getPropertyValue("font-size")
  );
  document.getElementById("font-height").innerText = state.fontHeight + "px";
}
