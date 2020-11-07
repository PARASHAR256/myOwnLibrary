function isTouching(object1, object2){ 
      
    // -------------- isTouching Logic---------------
      console.log("MOVING RECT"+object1);
      if(object1.x - object2.x < object1.width/2 + object2.width/2 && // detecting touch from right
        object2.x - object1.x < object1.width/2 + object2.width/2 && // detecting touch from left
        object2.y-object1.y< object1.height/2 +object2.height/2 &&// detecting touch from bottom
        object1.y-object2.y< object2.height/2 +object1.height/2)// detecting touch from top
        {
            return true;
        }
        else{
            return false;
        }
}
 function bounceOff (object1,object2){
      // -------------- Bounce Off Logic--------------

      // detecting touch from top & bottom
      if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
        object2.y - object1.y < object1.height/2 + object2.height/2){
          // topRect => down speed of 5 => +5 ..... up =>-5 * -1 = +5
          // bottomRect = > up -5 => ....... down  => +5 * -1 = -5
          object1.velocityY = object1.velocityY * (-1); // moving topRect in opposite top/bottom direction
          object2.velocityY = object2.velocityY * (-1);// moving bottomRect in opposite top/bottom direction
      }
      // detecting touch from left & right
      if(object1.x - object2.x < object1.width/2+object2.width/2 &&
        object2.x-object1.x < object1.width/2+object2.width/2){
        object1.velocityX =object1.velocityX*(-1) ;// moving topRect in opposite left/rigth direction
        object2.velocityX =object2.velocityX *(-1);// moving bottomRect in opposite left/right direction
      }
    }