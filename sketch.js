
function setup(){
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
    box.x += 5;
  }

  if(keyIsDown(LEFT_ARROW)){
    background("blue");
    box.x -= 5;
  }
 
  if(keyIsDown(UP_ARROW)){
    background("yellow");
    box.y -= 5;
  }

  if(keyIsDown(DOWN_ARROW)){
    background("green");
    box.y += 5;
  }


  
  drawSprites();
}

