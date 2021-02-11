'use strict';

class Bubble {
  constructor(r){
    this.x = Math.floor(random(-100,-200));
    this.y = -350;
    this.speed = Math.floor(random(-1, -5));
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

let bubble1;
let bubble2;

function setup (){
    createCanvas (500, 450, WEBGL); //WEBGL aendert das coord system in minus-bereich
    textSize(25);
    let ExoBlack = loadFont('assets/Exo-Black.otf');
    textFont(ExoBlack);
    bubble1 = new Bubble(10);
    bubble2 = new Bubble(5);
  }
  
function draw(){ 
    background(0, 0, 0);
  
    print("bubble1.x = " + bubble1.x, "bubble1.y = " + bubble1.y);

    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    
    if (bubble1.y > 200) {
      bubble1.y = -350;
      bubble1.x = Math.floor(random(100,-300));      
    }
    
    if (bubble2.y > 200) {
      bubble2.y = -350;
      bubble2.x = Math.floor(random(100,-300));
    }

    rotateX(millis() / 1000);
    rotateY(millis() / 1000);
    text("random \nbubbles", -50, -50);
  }