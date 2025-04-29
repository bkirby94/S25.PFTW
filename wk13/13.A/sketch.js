function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#0066cc');
  noStroke();

  // Jelly 1
  let baseY1 = 200;
  let y1 = baseY1 + sin(frameCount * 0.05) * 50;
  fill('#1f1463');
  arc(150, y1, 50, 50, PI, TWO_PI); 

  // Jelly 2
  let baseY2 = 250;
  let y2 = baseY2 + sin(frameCount * 0.05 + 1) * 50;
  fill('#5428a3');
  arc(180, y2, 50, 50, PI, TWO_PI); 

  // Jelly 3
  let baseY3 = 80;
  let y3 = baseY3 + sin(frameCount * 0.05 + 2) * 50;
  fill('#b142c2');
  arc(50, y3, 50, 50, PI, TWO_PI);

  // Jelly 4
  let baseY4 = 300;
  let y4 = baseY4 + sin(frameCount * 0.05) * 50;
  fill('#df94cf');
  arc(300, y4, 50, 50, PI, TWO_PI);

  // Jelly 5
  let baseY5 = 75;
  let y5 = baseY5 + sin(frameCount * 0.05 + 1) * 50;
  fill('#f7c2e0');
  arc(275, y5, 50, 50, PI, TWO_PI);

  // Jelly 6
  let baseY6 = 120;
  let y6 = baseY6 + sin(frameCount * 0.05 + 2) * 50;
  fill('#0143cd');
  arc(125, y6, 50, 50, PI, TWO_PI);

  // Jelly 7
  let baseY7 = 325;
  let y7 = baseY7 + sin(frameCount * 0.05) * 50;
  fill('#4fe7ff');
  arc(115, y7, 50, 50, PI, TWO_PI);

  // Jelly 8
  let baseY8 = 325;
  let y8 = baseY8 + sin(frameCount * 0.05 + 1) * 50;
  fill('#4fe7ff');
  arc(325, y8, 50, 50, PI, TWO_PI);

  // Jelly 9
  let baseY9 = 250;
  let y9 = baseY9 + sin(frameCount * 0.05 + 2) * 50;
  fill('#ffcef3');
  arc(250, y9, 50, 50, PI, TWO_PI);

  // Jelly 10
  let baseY10 = 210;
  let y10 = baseY10 + sin(frameCount * 0.05) * 50;
  fill('#800ea2');
  arc(30, y9, 50, 50, PI, TWO_PI);

}