'use strict';

class Bubble {
  constructor(r){
    this.x = random(width, width * -1);
    this.y = -350;
    this.speed = random(-1, -5);
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
    this.r = r;
}
  move(){
    this.y = this.y - this.speed;
  }
  show(){
    stroke(255);
    fill(this.red, this.green, this.blue);
    circle (this.x, this.y, this.r*2);
  }
}
const bubbles = [];

function setup (){
    createCanvas (500, 450, WEBGL);
    textSize(25);
    let ExoBlack = loadFont('assets/Exo-Black.otf');
    textFont(ExoBlack);
    
    for (let i = 0; i < 100; i++) {
      bubbles[i] = new Bubble(random(2, 15));   
      print(bubbles[i]);
    }
  }
  
  function draw(){ 
    background(0, 0, 0);
  
    bubbles.forEach(bubbles => {
      bubbles.move();
      bubbles.show();
      
  
    if (bubbles.y > 200) {
      bubbles.y = -350;
      bubbles.x = Math.floor(random(250,-250));    
    }
  });

    rotateX(millis() / 1000);
    rotateY(millis() / 1000);
    text("random \nbubbles", -50, -50);
  }