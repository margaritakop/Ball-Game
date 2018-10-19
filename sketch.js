var xedge = 400
var yedge = 400

var xSmallBall = 300
var ySmallBall = 300
var xSmallBallSpeed = 2
var ySnallBallSpeed = 2

var xBigBall = 100
var yBigBall = 300
var BigBallSpeed = 2

function setup() {
  createCanvas(xedge, yedge);
}

function draw() {
  //position and draw both the small and big balls
  background(0)
  xSmallBall = moveBall(xSmallBall, ySmallBall)[0]
  ySmallBall = moveBall(xSmallBall, ySmallBall)[1]
  ellipse(xSmallBall, ySmallBall, 10, 10)
  ellipse(xBigBall, yBigBall, 20, 20)

  if (Math.abs(xSmallBall-xBigBall) < 10 && Math.abs(ySmallBall-yBigBall) < 10){
    xSmallBallSpeed = 0
    ySnallBallSpeed = 0
    BigBallSpeed = 0
  }
}

document.onkeydown = checkKey;
//detect if a key is down

function ballShouldBounce (position, edge){
  if (position < 0) {
    return true
  } else if (position > edge) {
    return true
  } else {
    return false
  }
}

function moveBall(xSmallBall, ySmallBall){

  xSmallBall = xSmallBall + xSmallBallSpeed
  if (ballShouldBounce(xSmallBall, xedge)) {
    xSmallBallSpeed = xSmallBallSpeed * -1
    ySnallBallSpeed = ySnallBallSpeed * Math.random() * 2
  }

  ySmallBall = ySmallBall + ySnallBallSpeed
  if (ballShouldBounce(ySmallBall, yedge)) {
    ySnallBallSpeed = ySnallBallSpeed * -1
    xSmallBallSpeed = xSmallBallSpeed * Math.random() * 2
  }

  return [xSmallBall, ySmallBall]
}

function checkKey(e) {
  //change the coordinates of the big ball according to pressed arrow keys

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
      yBigBall = yBigBall - BigBallSpeed
    }
    else if (e.keyCode == '40') {
        // down arrow
      yBigBall = yBigBall + BigBallSpeed
    }
    else if (e.keyCode == '37') {
       // left arrow
       xBigBall = xBigBall - BigBallSpeed
    }
    else if (e.keyCode == '39') {
       // right arrow
       xBigBall = xBigBall + BigBallSpeed
    }
}