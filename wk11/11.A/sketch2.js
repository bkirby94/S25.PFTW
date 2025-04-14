let scaleFactor = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ffb5db");
  translate(width / 2, height / 2); 
  scale(scaleFactor); 

  stroke("#fe59ae"); 
  strokeWeight(2); 
  ellipse(0, 0, 100, 100); 
  scaleFactor = max(0.1, 1 + sin(frameCount * 0.08) * 0.3);
}