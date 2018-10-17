var x = 0
var y = 200
var speed = 2
var xedge = 400
var yedge = 400

function setup() {
  createCanvas(xedge, yedge)
}

function draw() {
  background(0)

  x = x + speed

  if (x < 0) {
    speed = speed * -1
  } else if (x > xedge) {
    speed = speed * -1
  }

  ellipse(x, y, 10, 10)
}