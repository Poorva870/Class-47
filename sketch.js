var girl, girl1Img, girl2Img;
var ground, groundImg;
var edges;
var platform, platformImg, platformGroup;
var coin, coinImg, coinGroup;
var stone, stoneImg,stoneGtoup;
var trunk, trunkImg,trunkGroup;
var gold, goldImg, goldGroup;
var snake,snakeImg,snakeGroup;
var life, lifeImg, lifeGroup;
var fire, fireImg, fireGroup;

function preload() {
  groundImg = loadImage("Images/background.png");
  
  girl1Img = loadAnimation("Girl/girl02.png");
  girl2Img = loadAnimation(
     "Girl/girl00.png",
     "Girl/girl01.png",
     "Girl/girl02.png",
     "Girl/girl03.png",
     "Girl/girl04.png",
     "Girl/girl05.png",
     "Girl/girl06.png",
     "Girl/girl07.png",
     "Girl/girl08.png",
     "Girl/girl09.png",
     "Girl/girl10.png",
     "Girl/girl11.png"
   );

  platformImg = loadImage("Images/bricks_2.png");
  coinImg = loadImage("Images/coin.png");
  goldImg = loadImage("Images/gold.png");
  stoneImg = loadImage("Images/Stone.png");
  trunkImg = loadImage("Images/stump.png");
  snakeImg = loadImage("Images/snake.png");
 // lifeImg = loadImage("Images/Life.png");
  fireImg = loadAnimation(
    "Images/fire1.png",
    "Images/fire2.png",
    "Images/fire3.png",
    "Images/fire4.png",
    "Images/fire5.png"
    );
}

function setup() {
  createCanvas(800, 400);
  ground = createSprite(400, 200, 800, 400);
  ground.addImage("ground1", groundImg);
  ground.velocityX = 0;

  girl = createSprite(150, 240, 50, 50);
  girl.addAnimation("standing", girl1Img);
  girl.addAnimation("running", girl2Img);
  girl.scale = 0.5;
  //girl.debug = true;
  girl.setCollider("rectangle", 0, 0, 200, 200);

  platformGroup = new Group();
  coinGroup = new Group();
  goldGroup = new Group();
  stoneGroup = new Group();
  snakeGroup = new Group();
  trunkGroup = new Group();
 // lifeGroup = new Group();
  fireGroup = new Group();

  edges = createEdgeSprites();
}

function draw() {
  background(0);

  if (ground.x < 300) {
    ground.x = 400;
  }

  if(keyDown("right")){
    girl.changeAnimation("running", girl2Img);
    ground.velocityX = -6;
    platformGroup.setVelocityXEach(-6);
    coinGroup.setVelocityXEach(-6);
    goldGroup.setVelocityXEach(-6);
    stoneGroup.setVelocityXEach(-6);
    snakeGroup.setVelocityXEach(-6);
    trunkGroup.setVelocityXEach(-6);
    fireGroup.setVelocityXEach(-6);
   // lifeGroup.setVelocityXEach(-6);
    
  }
  else{
    ground.velocityX = 0;
    platformGroup.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0);
    goldGroup.setVelocityXEach(0);
    stoneGroup.setVelocityXEach(0);
    snakeGroup.setVelocityXEach(0);
    trunkGroup.setVelocityXEach(0);
    fireGroup.setVelocityXEach(0);
   // lifeGroup.setVelocityXEach(0);
  }

  girl.collide(edges);

  spawnPlatforms();
  spawnObstacles();

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 260 === 0) {
      snake = createSprite(1000, 300, 50, 50);
      snake.addImage(snakeImg);
      snake.scale = 0.4;
      snakeGroup.add(snake);
      snake.lifetime = 800;
      snakeGroup.setVelocityXEach(-6);
  }

  if (frameCount % 370 === 0) {
      stone = createSprite(1020, 330, 50, 50);
      stone.addImage(stoneImg);
      stone.scale = 0.1;
      stoneGroup.add(stone);
      stone.lifetime = 800;
      stoneGroup.setVelocityXEach(-6);
  }

  if (frameCount % 470 === 0) {
      trunk = createSprite(1020, 310, 50, 50);
      trunk.addImage(trunkImg);
      trunk.scale = 0.3; 
      trunkGroup.add(trunk);
      trunk.lifetime = 800;
      trunkGroup.setVelocityXEach(-6);
  }

  if (frameCount % 170 === 0) {
    fire = createSprite(1020, 310, 50, 50);
    fire.addAnimation("fire", fireImg);
    fire.scale = 0.3; 
    fireGroup.add(fire);
    fire.lifetime = 800;
    fireGroup.setVelocityXEach(-6);
}
}

function spawnPlatforms() {
    if (frameCount % 300 === 0) {
      platform = createSprite(1000, 200, 50, 50);
      platform.addImage(platformImg);
      platform.scale = 0.2;
      platformGroup.add(platform);
      platform.lifetime = 800;
      platformGroup.setVelocityXEach(-6);
    }

    if (frameCount % 300 === 0) {
      coin = createSprite(1020, 170, 50, 50);
      coin.addImage(coinImg);
      coin.scale = 0.04;
      coinGroup.add(coin);
      coin.lifetime = 800;
      coinGroup.setVelocityXEach(-6);
    }

    if (frameCount % 320 === 0) {
      gold = createSprite(1000, 140, 50, 50);
      gold.addImage(goldImg);
      gold.scale = 0.1;
      goldGroup.add(gold);
      gold.lifetime = 800;
      goldGroup.setVelocityXEach(-6);
    }
    
  //  if (frameCount % 600 === 0) {
   //   life = createSprite(1000, random(70, 300), 50, 50);
  //    life.addImage(lifeImg);
  //    life.scale = 0.1;
  //    lifeGroup.add(life);
  //    life.lifetime = 800;
    //  lifeGroup.setVelocityXEach(-6);
    //}
    
}
