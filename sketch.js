var fixedRect,movingRect

function setup ()  {
createCanvas(1200,800);

fixedRect = createSprite(200,400,100,100);
fixedRect.shapeColor = "darkblue";
fixedRect.velocityX = 5;

movingRect = createSprite(600,400,100,100);
movingRect.shapeColor = "darkgreen";
movingRect.velocityX = -5;

}

function draw () {
background(0);
  
if(isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

  
      
bounceOff(movingRect,fixedRect);

     drawSprites();

    }




