'use strict';

const rectDraw = {

  display : () => {
    stroke(255);
    strokeWeight(2);
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(random(0, 400), random(0, 400), random(5, 25), random(5, 25)); 
  }
}

function setup (){
    createCanvas (400, 400); 
    //WEBGL aendert das coord system in minus-bereich
    textSize(20);
    let ExoBlack = loadFont('assets/Exo-Black.otf');
    textFont(ExoBlack);
  }
  
  function draw(){ 
    background(0);
    
    for (let i = 0; i < 70; i++) {
      rectDraw.display();
      
    }
  
  }