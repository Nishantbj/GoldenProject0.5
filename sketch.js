

function preload() {
  bg = loadImage("./Assets/bg.png");
  boyImg = loadAnimation("./Assets/boy1.png", "./Assets/boy2.png", "./Assets/boy3.png", "./Assets/boy4.png")
  boyStd = loadAnimation("./Assets/boy4.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  boy = createSprite(100, height - 200)


}

function draw() {
  background(bg);

  boy.show()

  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
