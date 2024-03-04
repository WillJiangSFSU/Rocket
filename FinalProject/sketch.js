let x = 30;
let y = 400;
let rocketMove = false;
let space;
let rocket = {
  display:function(){
    if(keyIsDown(RIGHT_ARROW)){
      x = x+5;
    };
    if (keyIsDown(LEFT_ARROW)){
      x = x-5;
    };
    if (keyIsDown(UP_ARROW)){
      y = y-5;
    };
    if (keyIsDown(DOWN_ARROW)){
      y = y+5;
    }; 
    stroke('black'); 
    fill("lightgrey");
    rect (x,y,40,60);
    fill("red");
    triangle(x+20,y-30,x+40,y,x,y);
    rect(x+10,y+60,20,10);
    triangle(x,y+30,x,y+60,x-10,y+60);
    triangle(x+40,y+30,x+40,y+60,x+50,y+60);
    fill("lightblue");
    circle(x+20,y+20,10);
    circle(x+20,y+40,10);
  }
};
let moon = {
  display:function(){
  stroke('black');
  fill ('white');
  circle(400,60,90);
  noStroke();
  fill ('lightgrey');
  circle(380,55,15);
  circle(390,40,20);
  circle(420,60,15);
  circle(430,80,15);
  }
};
let moon2 = {
  display:function(){
  stroke('black');
  fill ('yellow');
  circle(400,60,90);
  noStroke();
  fill ('#ad9630');
  circle(380,55,15);
  circle(390,40,20);
  circle(420,60,15);
  circle(430,80,15);
  }
}

function preload(){
  space = loadImage("Space.jpg");
}
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("black");
  image(space,0,0);
  space.resize(500,500);
  moon.display();
  rocket.display();
  fill('black');
  rect(180,38,140,15);
  fill('white');
  text ('Land Spaceship On Moon',180,50);
  if (x>340 & x<440 & y>20 & y<80){
    fill ('Green');
    rect(180,38,140,15);
    fill('white');
    text ('SUCCESS!',225,50);
    moon2.display();
    rocket.display();
  }
}