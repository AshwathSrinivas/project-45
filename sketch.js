var diary, diaryImg;
var voldemortImg, voldemort;
var obstacles, obstacleImg;
var gameState = 1;
var edges;

function preload(){
diaryImg = loadImage('images/TM Diary.jpg');
voldemortImg = loadImage('images/voldemort.jpg');
obstacleImg = loadImage('images/Albus.png');
}

function setup(){
createCanvas(900,600);
diary = createSprite(100,300,10,10);
diary.addImage(diaryImg);
diary.scale = 0.5;
voldemort = createSprite(800,300,10,10);
voldemort.addImage(voldemortImg);
voldemort.scale = 0.5;
obstacles = createSprite(350,300,10,5);
obstacles.addImage(obstacleImg);
obstacles.scale=0.5;
}

function draw(){
background(38,45,69);
if (gameState === 1){
    obstacles.velocityX=0;
    obstacles.velocityY=0;
    edges=createEdgeSprites();
    
    
    if (obstacles.isTouching(edges)){
        obstacles.bounceOff;
}

if(keyDown('d')){
    diary.velocityX = 5;
}

if(keyDown('a')){
    diary.velocityX=-5;
}

if(keyDown('w')){
    diary.velocityY=-5;
}

if(keyDown('s')){
    diary.velocityY=5;
}

}

if(diary.isTouching(obstacles)){
    diary.velocityX=0;
    diary.velocityY=0;
    textSize(30);
    stroke("blue");
    text(" YOU LOST!", 400, 300)
}

if(diary.isTouching(voldemort)){
    diary.velocityX=0;
    diary.velocityY=0;
    textSize(30);
    stroke("blue");
    text(" YOU WON!", 400, 300)
}



textSize(30);
stroke("yellow");
text("DELIVER THE DIARY!, USE WASD TO MOVE ;)", 100, 50);

textSize(20);
stroke("yellow");
text("W - UP A- LEFT S-DOWM D-RIGHT", 500,90)



















































































































drawSprites();
    
}