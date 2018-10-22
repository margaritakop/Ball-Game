var ballCount = 5
var balls = []


function setup() {
  createCanvas(400, 400)

  for (var i = 0; i < ballCount; i = i + 1) {
    var myBall = {
      xs : Math.random() * width,
      ys : Math.random() * height,
      speedX : Math.random() * 3,
      speedY : Math.random() * 3
    }
    balls[i] = myBall
  }
}

function draw() {
  background(200)

  for (var i = 0; i < ballCount; i = i + 1) {
    myBall = balls[i]
    myBall.xs += myBall.speedX
    myBall.ys += myBall.speedY

    if (myBall.xs < 0 || myBall.xs > width) {
      myBall.speedX = myBall.speedX * -1
    }
    if (myBall.ys < 0 || myBall.ys > height) {
      myBall.speedY = myBall.speedY * -1
    }

    ellipse(myBall.xs - 5, myBall.ys - 5, 20, 20)
  }
}