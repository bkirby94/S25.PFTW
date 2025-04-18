let sound;

function preload() {
  sound = loadSound('UFO.mp3');
}

function setup() {
  createCanvas(400, 400);

  const button = createButton('Click');
  button.position(10, 10); 
  button.mousePressed(() => {
    sound.play();
  });
}

function draw() {
  background('#93dc5c');
}