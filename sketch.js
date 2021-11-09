var issImg, spacebg, spaceCraft1, spaceCraft2;
var spaceCraft3, spaceCraft4;
var iss, spacecraft;
var hasDocked = false;

function preload() {
  issImg = loadImage("./assets/iss.png");
  spacebg = loadImage("./assets/spacebg.jpg");
  spaceCraft1 = loadImage("./assets/spacecraft1.png");
  spaceCraft2 = loadImage("./assets/spacecraft2.png");
  spaceCraft3 = loadImage("./assets/spacecraft3.png");
  spaceCraft4 = loadImage("./assets/spacecraft4.png");
}

function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(spaceCraft1);
  spacecraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;


}

function draw() {
  background(spacebg); 

  spacecraft.addImage(spaceCraft1);

  if (!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1,1);
    if (keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spaceCraft3);
      spacecraft.x = spacecraft.x - 1;
    }

    if (keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(spaceCraft4);
      spacecraft.x = spacecraft.x + 1;
    }

    if (keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y - 2;
    }

    if (keyDown("DOWN_ARROW")) {
      spacecraft.addImage(spaceCraft2);
    }
  }

  if(spacecraft.y <= (iss.y+50) && spacecraft.x <= (iss.x-10)) { 
    hasDocked = true; 
    textSize(25); 
    fill("white");
    text("Docking Successful!", 200, 300); 
  }

  drawSprites();
}