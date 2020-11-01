var bananaGroup, baimage, mo_run;
var obsimage, monkey;
var obstacleGroup;
var backimage;
var score;
var bacimage;
var gro;  
var score;

function preload()
{
  mo_run = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  baimage = loadImage("banana.png");
  obsimage= loadImage("stone.png");
  backimage = loadImage("jungle.jpg");
  
}

function setup() 
{
  createCanvas(600,500);
       
  bacimage = createSprite(400,180,800,200);
  bacimage.addImage("back",backimage);
  bacimage.velocityX = -5;
  
    
  banimage = createSprite(200,200,40,40);
  banimage.addImage("banana",baimage);
  banimage.scale = 0.1;
  
 
  monkey = createSprite(100,390,50,50);
  monkey.addAnimation("run",mo_run);
  monkey.scale = 0.2;
  
  gro = createSprite(300,450,600,5);
  gro.visible = false;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  
}

function draw() {
  background(255);
  
  if(bacimage.x < 0){
    bacimage.x = bacimage.width /2;
   }
  
  score = score + Math.round(getFrameRate()/60);
  
  if  (keyDown("Space"))
  {
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(gro);         
  
  //if(bananaGroup.isTouchig(monkey))
  //{
    //bananaGroup.DestroyEach;
    //score = score +2;
  //}
  
  switch(score)
  {
    case 10: monkey.scale = 0.12;
            break;
    case 20: monkey.scale = 0.14;
            break;
    case 30: monkey.scale = 0.16;
            break;
    case 40: monkey.scale = 0.18;
            break;
    default: break;
  }
  
  //if(obstacleGroup.isTouchig(monkey))
  //{
    //mokey.scale = 0.2;
  // }
        
drawSprites();
  stroke("white");
  textSize = (100);
  fill = ("white");
  text("Score: "+ score, 500,50);
  }  