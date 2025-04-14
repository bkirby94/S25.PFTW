let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ffb5db");
  translate(width / 2, height / 2); 
  rotate(angle); 

  stroke("#fe59ae"); 
  strokeWeight(2); 
  rect(-50, -50, 100, 100); 
  angle += 0.05; 
}