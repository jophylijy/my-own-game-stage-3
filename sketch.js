var boy,boy_running;
var dog;
var ground;
var food;
var home;
var ground_img;
var rock_img;
var sticks_img;
function preload(){
boy_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png");
ground_img = loadImage("ground.png");
rock_img = loadImage("rocks.png");
sticks_img = loadImage("sticks.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
boy = createSprite(100,700,14,10);
boy.addAnimation("running",boy_running);
ground = createSprite(50,720,4000,10);
ground.shapeColor = "green"
//  ground.addImage("ground",ground_img);
  ground.x = width/2
  ground.velocityX = -5
invisibleGround = createSprite(200,750,400,10);
invisibleGround.visible = false;
}

function draw(){
  background("white");
  console.log(boy.y);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if (keyDown("SPACE") && boy.y>=520){
      boy.velocityY = -20;
    }
    boy.velocityY = boy.velocityY+1;
    boy.collide(invisibleGround);
    
    spawnRocks();
    drawSprites();
}
function spawnRocks(){
  if(frameCount%60===0){
    var rock = createSprite()
  }
}