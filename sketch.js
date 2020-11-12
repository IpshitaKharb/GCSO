var car;
var wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);

  deform=(0.5*weight*speed*speed)/22500

  wall=createSprite(700,200,30,130);
  wall.shapeColor="#ffd900";
  car = createSprite(400, 200, 30, 30);
  car.shapeColor="white";
  
}

function draw() {
  background(0);
  car .velocityX = speed;  

  if(car.isTouching(wall)){
    if (deform<110){
      car.shapeColor="green";
    }
    if (deform>100 &&  deform<180){
      car.shapeColor="orange";
    }
    if (deform>180){
      car.shapeColor="red";
    }
    car.velocityX=0; 
  }

  drawSprites();
}