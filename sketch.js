var bananaImg, obstacleImg, obstacleGroup,foodGroup;
var jungleImg, player, invisibleGround, jungle;

function preload(){
  
  jungleImg = loadImage("jungle2.png");
  player_running = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage ("stone.png");
  
}

function setup() {
  createCanvas(800,400);
  
  player = createSprite(50,350,20,50);
  player.addAnimation("player_running",player);
  player.scale = 0.5;
  
  jungle = createSprite(200,0,400,400);
  jungle.addAnimation("jungleImg",jungle);
  jungle.scale = 2;
  jungle.x = ground.width /2;
  jungle.velocityX = -4;
  
  invisibleGround = createSprite(200,360,400,10);
  invisibleGround.visible = false;
   
  obstacleGroup = new Group();
  foodGroup = new Group();
  
  var score = 0;
  
}

function draw() {
  
  background(255);
  
  player.velocityY = player.velocityY + 0.8
  
  player.collide(invisibleGround);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
    
  }
  
  score = score + Math.round(getFrameRate()/60);
    
  
  if(foodGroup.isTouching(player)){
    
    score = score + 2;
    foodGroup.destroyEach();
     
}
  
  if(obstacleGroup.isTouching(player)){
    
    player.scale = 0.2;
    
  }
  
  
    text("Score:"+score,370,30);
    stroke("white");
    textSize(20);
    fill("white") 
  
    
  spawnFood();
  spawnObstacles();
   drawSprites();
}

switch(score){
    
    case 10 = player.scale = 0.12;
            break;
    case 20 = player.scale = 0.14;
            break;
    case 30 = player.scale = 0.16;
            break;
    case 40 = player.scale = 0.18;
            break;
   default = break;

}

function spawnFood() {
   
  
  if (frameCount % 60 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(cloudImage);
    food.scale = 0.5;
    food.velocityX = -3;
    food.lifetime = 200;
    foodGroup.add(food);
    
  }
}

function spawnObstacles() {
  
  if (frameCount % 60 === 0) {
    var stone = createSprite(300,120,40,10);
    stone.y = Math.round(random(80,220));
    stone.addImage(cloudImage);
    stone.scale = 0.5;
    stone.velocityX = -3;
    
     
    cloud.lifetime = 200;
    
   
    //add each cloud to the group
    obstacleGroup.add(stone);
  
}


  
