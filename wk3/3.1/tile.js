function setup() {
  createCanvas(200, 200);
}

function createTile() {
  translate(0,0);
  fill('blue');
  rect(0, 0, 200, 200);

  stroke('orange');
  strokeWeight(5);
  line(0,0, 200, 200);
  line(200, 0, 0, 200);
  noStroke();

 fill('yellow');
  circle(50, 50, 75);
  
  fill('black');
  ellipse(35, 35, 7, 25);
  ellipse(65, 35, 7, 25);

  arc (50, 60, 30, 40, 0, HALF_PI);
  arc (50, 60, 30, 40, HALF_PI, PI);

  fill('yellow');
  circle(150, 150, 75);
  
  fill('black');
  ellipse(135, 135, 7, 25);
  ellipse(165, 135, 7, 25);

  arc (150, 160, 30, 40, 0, HALF_PI);
  arc (150, 160, 30, 40, HALF_PI, PI);

  fill('yellow');
  circle(50, 150, 75);

  fill('black');
  ellipse(35, 165, 7, 25);
  ellipse(65, 165, 7, 25);

  arc (50, 140, 30, 40, PI, PI + QUARTER_PI);
  arc (50, 140, 30, 40, PI + QUARTER_PI, TWO_PI);

  fill('yellow');
  circle(150, 50, 75);

  fill('black');
  ellipse(135, 65, 7, 25);
  ellipse(165, 65, 7, 25);

  arc (150, 40, 30, 40, PI, PI + QUARTER_PI);
  arc (150, 40, 30, 40, PI + QUARTER_PI, TWO_PI);
  
}

function draw() {
  createTile();
  noLoop();
}
