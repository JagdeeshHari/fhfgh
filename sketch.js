var backgroundg;
var demon;
var character1;
var character2;
var backgroundimg;
var captainimg;
var log;
var logimg;
var log1;
var logimg1;
var logcircle;
var logcircleimg;

function preload() {
backgroundg=loadImage("images/background.png")    
character1=loadImage('images/captain.png')  
log=loadImage("images/log.png")  
log1=loadImage("images/log.png") 
logcircle=loadImage("images/woodcircle.png") 
}
function setup() {
    createCanvas(1200,600);
    backgroundimg=createSprite(600,300)
    backgroundimg.addImage(backgroundg);
    captainimg=createSprite(900,528)
    captainimg.addImage(character1);
    logimg=createSprite(1000,400)
    logimg.addImage(log);
    logimg1=createSprite(300,400)
    logimg1.addImage(log);
    logcircleimg=createSprite(700,300)
    logcircleimg.addImage(logcircle);
}
function draw() {
 background('yellow');



 if (keyDown('left')) {
     captainimg.x=captainimg.x-8
 }
 if (keyDown('right')) {
    captainimg.x=captainimg.x+8
}
drawSprites();
}