function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  if (keyIsPressed) {
   if (key == "r")
  fill(100, 0, 0)
  }
   if (key == "g"){
  fill(0, 100, 0)
  }

  ellipse(mouseX, mouseY, 30, 30)
}
