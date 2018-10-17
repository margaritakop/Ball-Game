var x = 300
var y = 300
var xspeed = 2
var yspeed = 2
var xedge = 400
var yedge = 400
var xgoal = 100
var ygoal = 300
var goalspeed = 2

function setup() {
  createCanvas(xedge, yedge);
}

function draw() {
  background(0)
  x = moveBall(x, y)[0]
  y = moveBall(x, y)[1]
  if (Math.abs(x-xgoal) < 10 && Math.abs(y-ygoal) < 10){
    xspeed = 0
    yspeed = 0
    goalspeed = 0
  }
  ellipse(x, y, 10, 10)
  ellipse(xgoal, ygoal, 20, 20)
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

function moveBall(x, y){

  x = x + xspeed
  if (ballShouldBounce(x, xedge)) {
    xspeed = xspeed * -1
    yspeed = yspeed * Math.random() * 2
  }

  y = y + yspeed
  if (ballShouldBounce(y, yedge)) {
    yspeed = yspeed * -1
    xspeed = xspeed * Math.random() * 2
  }

  return [x, y]
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
      ygoal = ygoal - goalspeed
    }
    else if (e.keyCode == '40') {
        // down arrow
      ygoal = ygoal + goalspeed
    }
    else if (e.keyCode == '37') {
       // left arrow
       xgoal = xgoal - goalspeed
    }
    else if (e.keyCode == '39') {
       // right arrow
       xgoal = xgoal + goalspeed
    }

}