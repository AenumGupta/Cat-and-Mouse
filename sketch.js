var tom,tomImage1,tomImage2,tomImage4;
var jerry,jerryImage1,jerryImage2,jerryImage4;
var back,backImage;


function preload() {
    //load the images here

backImage=loadImage("images/garden.png");
tomImage1=loadAnimation("images/tomOne.png");
tomImage2=loadAnimation("images/tomTwo.png");
tomImage4=loadAnimation("images/tomFour.png");

jerryImage1=loadAnimation("images/jerryOne.png");
jerryImage2=loadAnimation("images/jerryTwo.png");
jerryImage4=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
back=createSprite(450,300);
back.addImage(backImage);
back.scale=1;

tom=createSprite(700,500,20,20);
tom.addAnimation("running",tomImage1);
tom.scale=0.15;

jerry=createSprite(200,500,20,20);
jerry.addAnimation("running",jerryImage1);
jerry.scale=0.12;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(isTouching(tom,jerry)){
  tom.addAnimation("changing",tomImage4);
  tom.changeAnimation("changing");
  jerry.addAnimation("changing",jerryImage4);
  jerry.changeAnimation("changing");
}

    drawSprites();
    text(mouseX+"x"+mouseY+"y",mouseX,mouseY);
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation("catrunning",tomImage2,tomImage3);
tom.changeAnimation("catrunning");
jerry.addAnimation("teasing",jerryImage2,jerryImage3);
jerry.changeAnimation("teasing");
}



}


function isTouching(cat,mouse){
    if((cat.x-mouse.x<=cat.width/2+mouse.width/2)&&
    (mouse.x-cat.x<=cat.width/2+mouse.width/2)&&
    (cat.y-mouse.y<=cat.height/2+mouse.height/2)&&
    (mouse.y-cat.y<=cat.height/2+mouse.height/2))
    {
      tom.velocityX=0;
      jerry.velocityX=0;
      return true;
    }
    else {
      
      return false;
    }
  }