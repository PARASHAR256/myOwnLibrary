var movingRect,fixedRect;
var topRect,bottomRect;
var rect1;

function setup() {
  createCanvas(1200,1200);
  fixedRect = createSprite(400,200,80,50);
  fixedRect.shapeColor = "orange";

  rect1 = createSprite(100,200,80,50);
  rect1.shapeColor = "orange";

  movingRect = createSprite(600,200,50,80);
  movingRect.shapeColor = "yellow";

  topRect = createSprite(700,100,50,80);
  topRect.shapeColor = "Red";

  bottomRect = createSprite(700,700,50,80);
  bottomRect.shapeColor = "white";

  topRect.velocityY = 5;
  bottomRect.velocityY = -5;
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;                                                                                                                                                 
  console.log(movingRect);

  var value = isTouching(movingRect,fixedRect);
  console.log(value);
  // console.log("MAIN VALUE"+movingRect);
  
  if(isTouching(movingRect,fixedRect)){ 
    fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "orange";
  }

  if(isTouching(movingRect,rect1)){
    rect1.shapeColor = "red";
  }
  else{
    rect1.shapeColor = "orange";
  }

 bounceOff(topRect,bottomRect);
  
  console.log(movingRect.x - fixedRect.x);
  drawSprites();
}
                  
