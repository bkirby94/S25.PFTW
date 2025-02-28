let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 150;
const distance = 10;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function drawBlock(x, y, color) {
  noStroke();
  fill(color || 255);
  rect(x, y, 100, 100);
}

function keyTyped() { 
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 1, 255);
  console.log('converted number', keyToNumber);
  blockColor = keyToNumber;
}

drawTimer = window.setInterval(() => {
  if (blockY + 100 <= height) {
    drawBlock(blockX, blockY, blockColor);
    blockY += distance;
  } else {
    blockY = 0;
    blockX += 100;
  }

  if (blockY + 100 > height && blockX + 100 > width && !alertTriggered) {
    window.clearInterval(drawTimer);
    alert('Yas Queen!');
  }

}, speed);