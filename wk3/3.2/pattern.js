function setup() {
  createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, faceColor) {
  translate(originX, originY);
  fill(primaryColor);
  rect(0, 0, 200, 200);

  stroke('orange');
  strokeWeight(5);
  line(0,0, 200, 200);
  line(200, 0, 0, 200);
  noStroke();

 fill(secondaryColor);
  circle(50, 50, 75);
  
  fill(faceColor);
  ellipse(35, 35, 7, 25);
  ellipse(65, 35, 7, 25);

  arc (50, 60, 30, 40, 0, HALF_PI);
  arc (50, 60, 30, 40, HALF_PI, PI);

  fill(secondaryColor);
  circle(150, 150, 75);
  
  fill(faceColor);
  ellipse(135, 135, 7, 25);
  ellipse(165, 135, 7, 25);

  arc (150, 160, 30, 40, 0, HALF_PI);
  arc (150, 160, 30, 40, HALF_PI, PI);

  fill(secondaryColor);
  circle(50, 150, 75);

  fill(faceColor);
  ellipse(35, 165, 7, 25);
  ellipse(65, 165, 7, 25);

  arc (50, 140, 30, 40, PI, PI + QUARTER_PI);
  arc (50, 140, 30, 40, PI + QUARTER_PI, TWO_PI);

  fill(secondaryColor);
  circle(150, 50, 75);

  fill(faceColor);
  ellipse(135, 65, 7, 25);
  ellipse(165, 65, 7, 25);

  arc (150, 40, 30, 40, PI, PI + QUARTER_PI);
  arc (150, 40, 30, 40, PI + QUARTER_PI, TWO_PI);
  
}

function draw() {
  createTile(0, 0, 'red', 'purple', 'white');
  createTile(0, 200, 'green', 'yellow', 'red');
  createTile(0, 200, 'blue', 'green', 'purple');
  createTile(200, -400, 'cyan', 'white', 'yellow');
  createTile(0, 200, 'purple', 'magenta', 'yellow');
  createTile(0, 200, 'yellow', 'red', 'blue');
  createTile(200, -400, 'magenta', 'purple', 'green');
  createTile(0, 200, 'red', 'cyan', 'blue');
  createTile(0, 200, 'green', 'magenta', 'purple');
}
