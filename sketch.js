var bulletSprite, wall, Velocity, Weight, Damage, Thickness;
function setup() {
  createCanvas(1600,400);
  bulletSprite = createSprite(0, 200, 50, 10);
  bulletSprite.shapeColor = "white";
  Thickness = random(22, 83)
  wall = createSprite(1200, 200, Thickness, height/2);
  wall.shapeColor = rgb(80, 80, 80);
  Velocity = random(223, 321);
  Weight = random(30, 52);
  
  Damage = (0.5 * Weight * Velocity * Velocity)/ Thickness ** 3;
  bulletSprite.velocityX = Velocity/4;
}

function draw() {
  background(0);  
  
  bulletSprite.collide(wall, Check);
  drawSprites();
  text("Velocity:" + Velocity, 800, 100);
  text("Weight:" + Weight, 800, 300);
  text("Thickness: " + Thickness, 800, 200);
}


function Check() {
  if (Damage > 10) {
    wall.shapeColor = "red";
  } else {
    wall.shapeColor = "green";
  }
}