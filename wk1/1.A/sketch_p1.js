let grid = undefined;
let mycolor = window.prompt("What color?");
//window prompt for color of nose 

function setup() {
  createCanvas(1000, 800);
  background("#ccc");
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  background(grid);
  //snowman
  fill("#f1f1f1");
  strokeWeight(15);
  stroke(0, 204, 255);
  //bottom
  ellipse(500, 650, 350);
  //torso
  ellipse(500, 360, 250);
  //head
  ellipse(500, 150, 175);
  //left arm 
  stroke(mycolor);
  strokeWeight(15);
  line(200, 200, 375, 350);
  //right arm
  line(800, 200, 625, 350);
}
