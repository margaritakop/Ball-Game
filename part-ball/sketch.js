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

  if (ballShouldBounce(x, xedge)) {
    xspeed = xspeed * -1
  }

  y = y + yspeed

  if (ballShouldBounce(y, yedge)) {
    yspeed = yspeed * -1
  }

  ellipse(x, y, 10, 10)
}

function ballShouldBounce (position, edge){
  if (position < 0) {
    return true
  } else if (position > edge) {
    return true
  } else {
    return false
  }
}