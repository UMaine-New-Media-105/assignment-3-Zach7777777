let wave1 = 0;
let wave2 = 180;
let eyesUp = 140;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  seedX = random(50, 350);
  seedY = 0;
  seedSpeed = random(4, 8);
  seedIsFalling = false;
  seedCaught = false;
}

function draw() {
  //adding spooky backround color
  background(30, 40, 100);
  //spooky moon
  fill(255, 255, 191);
  ellipse(30, 30, 50, 50);
  push();
  noStroke();
  fill(30, 40, 100);
  ellipse(37, 33, 46, 46);
  pop();
  //spooky grass
  fill(20, 40, 20);
  rect(0, 340, 400, 100);
  //adding score board
  

  if (mouseIsPressed == true) {
    seedIsFalling = true;
  }
  if (seedIsFalling == true) {
    addSeed();
  }
  if (seedY >= height - 60) {
    seedIsFalling = false;
    seedY = 0;
    seedX = random(50, 350);
  }
  fill(255)
  ghost(mouseX - 50, 285, 0.25);
  let d = dist(mouseX, 340, seedX, seedY);
  fill(220, 220, 220);
  //calling the ghost and making it so it moves along the x axis with the mouse
  if (d <= 40) {
    seedCaught = true;
    
  
  } 
  
  
}
function addSeed() {
  fill(255, 255, 191);
  ellipse(seedX, seedY, 7, 7), (seedY = seedY + seedSpeed);
}

function ghost(x, y, size) {
  push()
  translate(x, y);
  scale(size);
  ellipse(200, 200, 250, 300);
  fill(0);
  ellipse(240, 140, 60);
  ellipse(160, 140, 60);
  fill(255);
  ellipse(240, eyesUp, 30);
  ellipse(160, eyesUp, 30);
  push();
  strokeWeight(5);
  noFill();
  arc(280, 220, 60, 100, 0, 180);
  arc(120, 220, 60, 100, wave1, wave2);
  arc(200, 140, 400, 100, 60, 100);
  pop();
  pop()
}

