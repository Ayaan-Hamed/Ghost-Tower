var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  //spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group();
  climbersGroup = new Group();
  ghost = createSprite(width / 2, height / 2);
  ghost.addImage(ghostImg);
  ghost.scale = 0.3;
  //ghost.debug = true
  ghost.setCollider("rectangle", 0, 22, 170, 250);
  //spookySound.play()
}

function draw() {
  background(200);
  drawSprites();
  spawnW();
  if (keyDown("left")) {
    ghost.x -= 5;
  }
  if (keyDown("right")) {
    ghost.x += 5;
  }
  if (keyDown("space")) {
    ghost.velocityY = -12;
  }
  ghost.velocityY += 0.5;
  ghost.collide(climbersGroup);
  if (tower.y > 400) {
    tower.y = 300;
  }
  fill("yellow");
  text(mouseX + "," + mouseY, mouseX, mouseY);
}

function spawnW() {
  if (frameCount % 200 == 0) {
    x = random(100, width - 100);
    d = createSprite(x, -80);
    d.addImage(doorImg);
    d.velocityY = 1;
    c = createSprite(x, -10);
    c.addImage(climberImg);
    c.velocityY = 1;
    d.depth = ghost.depth;
    ghost.depth += 1;
    // c.shapeColor = rgb (random(0,255), random(0,255), random (0,255))
    doorsGroup.add(d);
    climbersGroup.add(c);
  }
}
