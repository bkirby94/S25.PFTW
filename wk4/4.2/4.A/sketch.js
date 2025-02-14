let startingX = 50;
let startingY = 150;

let myRects = [];
let rectId = 0;

function setup () {
  createCanvas(1046, 1250);
  background('#FDDDE6');

  for (let k = 0; k < 3; k++) {
    for (let i = 0; i < 4; i++) {
      rect(startingX, startingY, 199, 300);

      myRects.push({ x: startingX, y: startingY, id: rectId });

      rectId++;

      startingX += 249;
    }
    startingY += 350;
    startingX = 50;
  }

    console.log(myRects);
}

function mousePressed() {
  for (let j = 0; j < myRects.length; j++) {
    let rectX = myRects[j].x;
    let rectY = myRects[j].y;
    
    if (mouseX > rectX && mouseX < rectX + 199 && mouseY > rectY && mouseY < rectY + 300) {
      console.log('Rect clicked, ID:', myRects[j].id);
    }
  }
}
