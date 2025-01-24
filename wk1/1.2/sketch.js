let mycolor = window.prompt("What color?");
//window prompt for color of triangle 

function setup() {
  //creates a convas 600 pixels wide
  //and 400 pixels high
  createCanvas(600, 400);
}
function draw() {
  //sky blue background
  background(135, 206, 235);
  //sun in top-right
  fill("yellow"); //yellow
  circle(550, 50, 100);

  //grass on bottom half
  fill("green");
  rect(0, 200, 600, 200);

  //triangle
  fill(mycolor);
  triangle(30, 75, 58, 20, 86, 75);

  //emojis
  textSize(75)
  text("🌸", 100, 250) //flower
  text("🐞", mouseX, mouseY) //ladybug
}
