const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 150;
let cards = [];
const gameState = {
  totalPairs: 6,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};

let cardfaceArray = [];
let cardBack;
function preload() {
  cardBack = loadImage('images/cardBack.png');
  cardfaceArray = [
    loadImage('images/cardDesign1.png'),
    loadImage('images/cardDesign2.png'),
    loadImage('images/cardDesign3.png'),
    loadImage('images/cardDesign4.png'),
    loadImage('images/cardDesign5.png'),
    loadImage('images/cardDesign6.png')
  ]

}

function setup() {
  createCanvas(1046, 1250);
  let selectedFaces = [];
  for(let z = 0; z < 6; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    //remove the used cardface so it doesn't get randomly selected again
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 4; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 249;
  }
    startingY += 350;
    startingX = 50;
  }
}

function draw() {
  background('#FDDDE6');

  if (gameState.numMatched === gameState.totalPairs) {
    fill(0);
    textSize(66);
    text('YOU WIN!', 500, 620);
    noLoop();
    return;
  }

  for (let k = 0; k < cards.length; k++) {
    if (!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill(0);
  textSize(25);
  text('matches  ' + gameState.numMatched, 832, 1185);
  text('attempts  ' + gameState.attempts, 830, 1208);
  textSize(80);
  text('TONY MATCH GAME', 50, 100);
}

function mousePressed() {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
      //first check flipped cards length and then 
      // we can trigger the flip
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }

  if (gameState.flippedCards.length === 2) {
      gameState.attempts++;
    if (gameState.flippedCards[0].cardfaceImg === gameState.flippedCards[1].cardfaceImg) {
      // cards match! time to score
      // mark cards as matched so they don't flip back
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty the flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop ();
        window.clearTimeout(loopTimeout);
      }, 1000)
    }
  }
}

class Card {
  constructor (x, y, cardfaceImg) {
    this.x = x;
    this.y = y;
    this.width = 199;
    this.height = 300;
    this.face = DOWN;
    this.cardfaceImg = cardfaceImg;
    this.isMatch = false;
    this.show();
  }

  show() {
    if(this.face === UP || this.isMatch){
      fill('purple');
      rect(this.x, this.y, this.width, this.height);
      image(this.cardfaceImg, this.x, this.y);
    } else {
      rect(this.x, this.y, this.width, this.height);
      image(cardBack, this.x, this.y);
    }
  }

  didHit(mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
      mouseY >= this.y && mouseY <= this.y + this.height) {
        this.flip();
        return true;
      } else {
        return false;
      }
  }

  flip() {
    if (this.face === DOWN) {
      this.face =UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}

function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    //pick random index
    const idx = Math.floor(Math.random() * counter);
    //decrease counter by 1 (decrement)
    counter--;
    //swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
   }
  return array;
}

