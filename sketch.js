var frect,mrect;


function setup() {
  createCanvas(1200,800);
  
mrect=createSprite(600,400,50,80);
mrect.shapeColor="yellow";

frect=createSprite(400,200,80,30);
frect.shapeColor="yellow";

}

function draw() {
  background(0,0,0);  

mrect.x=World.mouseX;
mrect.y=World.mouseY;

if(mrect.x-frect.x<mrect.width/2+frect.width/2
  && frect.x-mrect.x<mrect.width/2+frect.width/2
  && mrect.y-frect.y<mrect.width/2+frect.width/2
  && frect.y-mrect.y<mrect.width/2+frect.width/2){

    mrect.shapeColor="white";
    frect.shapeColor="white";
}

else{

  mrect.shapeColor="yellow";
  frect.shapeColor="yellow";

}
  drawSprites();
}