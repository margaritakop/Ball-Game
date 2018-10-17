var x = 0
var speed = 2
var xedge = 400

function setup() {
  createCanvas(xedge, 400)
}

function draw() {
  background(0)

  x = x + speed

  if (x < 0) {
    speed = speed * -1
  } else if (x > xedge) {
    speed = speed * -1
  }

  ellipse(x, 30, 10, 10)
}