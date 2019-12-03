function setup() {
  createCanvas(500, 500);
  background(0);

  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  text('Move Mouse', 250, 250);
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
  fill(random(255), random(255), random(255));
}