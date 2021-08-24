var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ob , ob1 ,ob2 ,ob3 ,ob4 ,ob5 , ob6
var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  ob1 = loadImage ("obstacle1.png")
  ob2 = loadImage ("obstacle2.png")
  ob3 = loadImage ("obstacle3.png")
  ob4 = loadImage ("obstacle4.png")
  ob5 = loadImage ("obstacle5.png")
  ob6 = loadImage ("obstacle6.png")
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  
 
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);

  if(keyDown("space")&&trex.isTouching (ground)){
    trex.velocityY = -8;
  }
  //spawn the clouds
  spawnClouds();
  spawnob ()
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnob () 
{
  if (frameCount % 60 === 0) {
    ob = createSprite(400,180,40,20);
    
   // ob.y = Math.round(random(10,60))
    ob.scale = 0.4;
    ob.velocityX = -3;
  var r = Math.round (random (1,6))
  switch (r)
  {
case 1 :ob.addImage (ob1 )
break ;
case 2 :ob.addImage (ob2 )
break ;
case 3 :ob.addImage (ob3 )
break ;
case 4 :ob.addImage (ob4 )
break ;
case 5 :ob.addImage (ob5 )
break ;
case 6 :ob.addImage (ob6 )
break ;
default : break
}
}
}