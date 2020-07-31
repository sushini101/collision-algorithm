var moverect, fixrect;

function setup() {
  createCanvas(1200,500);
  fixrect = createSprite(400, 200, 50, 50);
  fixrect.shapeColor="violet";
  moverect = createSprite(600,250,50,30);
  moverect.shapeColor="orange";
}

function draw() {
  background(0); 
  
  moverect.x=mouseX;
  moverect.y=mouseY;

  if(moverect.x-fixrect.x<moverect.width/2+fixrect.width/2 && 
    fixrect.x-moverect.x<moverect.width/2+fixrect.width/2 &&
    moverect.y-fixrect.y<moverect.height/2+fixrect.height/2 &&
    fixrect.y-moverect.y<moverect.height/2+fixrect.width/2){
      fixrect.shapeColor="orange";
      moverect.shapeColor="violet";
  }
  else{
    fixrect.shapeColor="violet";
    moverect.shapeColor="orange";
  }
  
  drawSprites();
}