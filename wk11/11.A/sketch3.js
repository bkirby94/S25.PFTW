let angle = 0;
let scaleFactor = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ffb5db");
  translate(width / 2, height / 2); 
  rotate(angle); 
  scale(scaleFactor); 

  stroke("#fe59ae"); 
  strokeWeight(2);
  rect(-50, -50, 100, 100); 
  
  angle += 0.09; 
  scaleFactor = max(0.1, 1 + sin(frameCount * 0.06) * 0.8);
}