'use strict';

const rain = {
  x : 2,
  y : 2,
  display : () => {
    ellipse(rain.x, rain.y, 5, 5)
  },
  move : () => {
    rain.y = rain.y - 100;
  }
}

let y = 0;
let speed = -5;

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
    background(255, 0, 0);
    
    rain.display();
    rain.move();


    fill(0, 0, 255);
    let x = random(0, 400);
    y = y - speed;
    rect (x, y, 20, 20);
    
    if (y > height) {
      y = 0;
    }



    
    // for (let i = 0; i < 70; i++) {
    //   rectDraw.display();
    //}

  }