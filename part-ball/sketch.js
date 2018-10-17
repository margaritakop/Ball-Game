var x = 0
var speed = 2

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(0)

  x = x + speed

  if (x < 0) {
    speed = speed * -1
  } else if (x > 300) {
    speed = speed * -1
  }

  ellipse(x, 30, 10, 10)
}