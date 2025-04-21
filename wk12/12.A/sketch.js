let sounds = {};
let bgColors;

function preload() {
  sounds = {
    a: loadSound('do.mp3'),
    s: loadSound('re.mp3'),
    d: loadSound('mi.mp3'),
    f: loadSound('fa.mp3'),
    g: loadSound('so.mp3'),
    h: loadSound('la.mp3'),
    j: loadSound('ti.mp3'),
    k: loadSound('do_hi.mp3')
  };


  bgColors = {
    a: [255, 0, 0],    
    s: [0, 255, 0],   
    d: [0, 0, 255],    
    f: [255, 255, 0], 
    g: [0, 255, 255], 
    h: [255, 0, 255],  
    j: [255, 165, 0],  
    k: [128, 0, 128]  
  };
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);  
  textSize(20);
  background(0); 
}

function draw() {
  fill(255);
  text("Hit keys A, S, D, F, G, H, J, K to play", width / 2, height / 2); 
}

function keyPressed() {
  let pressedKey = key.toLowerCase();
  playSoundAndChangeBackground(pressedKey);
}

function playSoundAndChangeBackground(keyChar) {
  if (sounds[keyChar]) {
    sounds[keyChar].play();
  
    let colorArray = bgColors[keyChar];
    background(colorArray[0], colorArray[1], colorArray[2]);
    
    fill(255); 
    text("Hit keys A, S, D, F, G, H, J, K to play", width / 2, height / 2); 
  }
}
