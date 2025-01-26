
let mycolor = window.prompt("What color?");
//window prompt for color of arms

let nosecolor = window.prompt("What color nose?");

let mysize = Number(window.prompt("How big? - 100 to 250"));
//window prompt for sun size

function setup() {
  createCanvas(1000, 800);
  background(204, 255, 255);
}

function draw() {
  //sun
  fill(255, 255, 0);
  strokeWeight(15);
  stroke(255, 255, 0);
  ellipse(150, 90, mysize);

  //mountain
  fill(150, 150, 150);
  strokeWeight(15);
  stroke(150, 150, 150);
  triangle(500, 1000, 750, 100, 1050, 1000);
  triangle(50, 1000, 250, 100, 450, 1000);

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
  //eyes
  stroke(0);
  strokeWeight(25);
  //left eye
  point(450, 125);
  //right eye
  point (550, 125);
  //mouth 
  noFill();
  strokeWeight(10);
  arc(500, 190, 100, 20, 0, HALF_PI);
  //nose
  stroke(nosecolor);
  fill(nosecolor);
  triangle(490, 140, 550, 160, 490, 170);
}
