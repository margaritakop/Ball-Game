var x = 0
var y = 200
var xspeed = 2
var yspeed = 2
var xedge = 400
var yedge = 400

function setup() {
  createCanvas(xedge, yedge)
}

function draw() {
  background(0)

  x = x + xspeed

  if (x < 0) {
    xspeed = xspeed * -1
  } else if (x > xedge) {
    xspeed = xspeed * -1
  }

  y = y + yspeed

  if (y < 0) {
    yspeed = yspeed * -1
  } else if (y > yedge) {
    yspeed = yspeed * -1
  }

  ellipse(x, y, 10, 10)
}