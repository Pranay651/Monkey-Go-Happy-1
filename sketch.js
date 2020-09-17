var monkey,monkey_running;
var jungle, invisibleGround,jungleImage;

var bananasGroup, bananaImage;
var obstaclesGroup,obstaclesImg;
var score;

var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  jungleImage = loadImage("jungle.png");
  
  bananaImage = loadImage("banana.png");
  
  obstaclesImg = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 200);
  

  monkey= createSprite(50,180,20,50);
  
  monkey.addAnimation("running", monkey_running);
  
  //monkey.scale = 0.5;
  
  jungle= createSprite(200,180,400,400);
  jungle.addImage("jungle",jungleImage);
  jungle.x = jungle.width /2;
  jungle.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  bananasGroup = new Group();
  obstaclesGroup = new Group();
  score = 0;
}

function draw() {
  background(180);
  if(gameState===PLAY){
    score = score + Math.round(getFrameRate()/60); 
      if(keyDown("space")&&monkey.y>161) {
    monkey.velocityY = -10;
  
 
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
      
  }
     monkey.velocityY = monkey.velocityY + 0.8
     spawnbananas();
  spawnObstacles();
    if (obstaclesGroup.isTouching(monkey)){
      gameState=END;
        
        }
  }
 else if(gameState===END){
         ground.velocityX=0;
         trex.velocityY=0;
    obstaclesGroup.setVelocityXEach(0);
             bananasGroup.setVelocityXEach(0);
   obstaclesGroup.setLifetimeEach(-1);
   bananasGroup.setLifetimeEach(-1);
   
   
 }
  text("Score: "+ score, 500,50);
  

  
  monkey.collide(invisibleGround);
 
  drawSprites();
}

function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
   
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}