(function() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", e => {
      animateBackground();
    });
  } else {
    animateBackground();
  }

  var canvas;
  var ctx;
  var windowHeight;
  var windowWidth;

  // keeps track of the asteroids that are currently on the canvas
  var asteroids = [];

  class Asteroid {
    constructor(x, y, r, vX, vY, color) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.vx = vX;
      this.vy = vY;
      this.color = color;
    }
  }

  function animateBackground() {
    canvas = document.querySelector("#my-canvas");
    ctx = canvas.getContext("2d");
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    createAsteroids();
    window.requestAnimationFrame(drawSpace);
  }

  function drawSpace() {
    clearCanvas();
    asteroids.forEach((asteroid, index) => {
      checkForCollision(asteroid, index);
      moveAsteroid(asteroid);
      drawAsteroid(asteroid);
    });
    window.requestAnimationFrame(drawSpace);
  }

  function createAsteroids() {
    for (var i = 0; i < 500; i++) {
      asteroids.push(createAsteroid());
    }
  }

  function checkForCollision(asteroid, index) {
    if (asteroid.x > windowWidth || asteroid.x < 0) {
      asteroid.vx *= -1;
    }
    if (asteroid.y > windowHeight || asteroid.y < 0) {
      asteroid.vy *= -1;
    }
  }

  function moveAsteroid(asteroid) {
    asteroid.x += asteroid.vx;
    asteroid.y += asteroid.vy;
  }

  function drawAsteroid(asteroid) {
    console.log("drawing asteroid");

    ctx.fillStyle = asteroid.color;
    ctx.beginPath();
    ctx.arc(asteroid.x, asteroid.y, asteroid.r, 0, 2 * Math.PI);
    ctx.fill();
  }

  function createAsteroid() {
    let posX, posY, radius, xVelocity, yVelocity;

    posX = Math.round(Math.random() * windowWidth);
    posY = Math.round(Math.random() * windowHeight);
    radius = 10;
    let xV = Math.round(Math.random() * 10) - 5;
    let yV = Math.round(Math.random() * 10) - 5;
    xVelocity = xV === 0 ? 1 : xV;
    yVelocity = yV === 0 ? 1 : yV;
    let color = `rgb(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)})`;
    return new Asteroid(posX, posY, radius, xVelocity, yVelocity, color);
  }

  function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, windowWidth, windowHeight);
  }
})();
