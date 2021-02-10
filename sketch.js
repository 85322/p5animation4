'use strict';

class Bubble {
  constructor(){
    this.x = Math.floor(random(0, 400));
    this.y = 0;
    this.speed = Math.floor(random(-1, -3));
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
}
  move(){
    this.y = this.y - this.speed;
  }
  show(){
    stroke(255);
    fill(this.red, this.green, this.blue);
    rect (this.x, this.y - this.speed, 20, 20);
  }
}

let bubble1;
let bubble2;

function setup (){
    createCanvas (400, 400); 
    //WEBGL aendert das coord system in minus-bereich
    textSize(20);
    let ExoBlack = loadFont('assets/Exo-Black.otf');
    textFont(ExoBlack);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
  }
  
  function draw(){ 
    background(255, 0, 0);
  
    
    print(bubble1.x, bubble1.y);

    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    
    if (bubble1.y > height) {
      bubble1.y = 0;
      bubble1.x = Math.floor(random(0, 400));
      ;
    }
    
    if (bubble2.y > height) {
      bubble2.y = 0;
      bubble2.x = Math.floor(random(0, 400));
    }

  }