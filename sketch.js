var xSmallBall = 300
var ySmallBall = 300
var xSmallBallSpeed = 2
var ySmallBallSpeed = 2

var xBigBall = 100
var yBigBall = 300
var BigBallSpeed = 2

var xEdge = 400
var yEdge = 400


function setup() {
  createCanvas(xEdge, yEdge);
}

function draw() {
  //position and draw both the small and big balls
  background(0)
  xSmallBall = moveBall(xSmallBall, ySmallBall)[0]
  ySmallBall = moveBall(xSmallBall, ySmallBall)[1]
  ellipse(xSmallBall, ySmallBall, 10, 10)
  ellipse(xBigBall, yBigBall
  , 20, 20)

  if (Math.abs(xSmallBall-xBigBall) < 10 && Math.abs(ySmallBall-yBigBall
  ) < 10){
  xSmallBallSpeed
    ySmallBallSpeed = 0BigBallS= 0
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

  xSmallBall = xSmallBall +xSpeef (ballShouldBounce(xSmallBall, xEdge)) {
  xSpeedpeed1
    ySmallBallSpeed = ySmallBallSpeed * Math.random() * 2
  }

  ySmallBall = ySmallBall + ySmallBallSpeed
  if (ballShouldBounce(ySmallBall, yEdge)) {
    ySmallBallSpeed = ySmallBallSpeed * -1
  xSpeedpeedath.random() * 2
  }

  return [xSmallBall, ySmallBall]
}

function checkKey(e) {
  //change the coordinates of the big ball according to pressed arrow keys

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
      yBigBall
     = yBigBall
    BigBallS    }
    else if (e.keyCode == '40') {
        // down arrow
      yBigBall
     = yBigBall
    BigBallS    }
    else if (e.keyCode == '37') {
       // left arrow
       xBigBall = xBigBallBigBallS    }
    else if (e.keyCode == '39') {
       // right arrow
       xBigBall = xBigBallBigBallS    }
}