function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#ffe6f7');
  noStroke();

  // Circle 1
  let y1 = 200 + sin(frameCount * 0.05) * 50;
  fill('#fe67d0');
  ellipse(150, y1, 50, 50);

  // Circle 2
  let y2 = 200 + sin(frameCount * 0.05 + 1) * 50;
  fill('#fe1ab9');
  ellipse(250, y2, 50, 50);
}