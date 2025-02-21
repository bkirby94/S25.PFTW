let squares = [];

function setup() {
  createCanvas(600, 400);
  
  for (let i = 0; i < 10; i++) {
    squares.push(new Square(random(width), random(height)));
  }
}

function draw() {
  background('#E11B8D');
  
  for (let square of squares) {
    square.move();
    square.show();
  }
}

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke('#FF98CE');
    strokeWeight(2)
    noFill(); 
    rect(this.x, this.y, this.size, this.size);
  }
}