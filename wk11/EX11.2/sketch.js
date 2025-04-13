function setup() {
  createCanvas(600, 600);
  noStroke();
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(30);
  let cols = 13; 
  let rows = 7; 
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let centerX = x * cellWidth + cellWidth / 2;
      let centerY = y * cellHeight + cellHeight / 2;

      let size = map(sin(frameCount * 0.1 + x * 0.5 + y * 0.5), -1, 1, 10, 40);
      let hue = map(x + y, 0, cols + rows, 300, 360); 
      let saturation = map(sin(frameCount * 0.05 + x * 0.3), -1, 1, 70, 100); 
      let brightness = map(cos(frameCount * 0.05 + y * 0.3), -1, 1, 80, 100); 

      fill(hue, saturation, brightness);
      ellipse(centerX, centerY, size, size);
    }
  }
}