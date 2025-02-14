let rectX = 0;
let rectWidth = 90;
let clickCount = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('blue');
  drawShape();
  rectX++;
  if(rectX > width) {
    noLoop();
    text('Your score was ' + clickCount, 100, 300);
  }
}

function mousePressed(){
  if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= 0 &&  mouseY <= 90)) {
    clickCount++;
    console.log('hit', clickCount);
  }
}

function drawShape() {
  fill('yellow');
  rect(rectX, 0, rectWidth, 90);

}
