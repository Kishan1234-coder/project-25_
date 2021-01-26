
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
var engine,world ;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(400,600,800,20);
     ball = new Ball(100,100,20);
     //dustbin1 = new Dustbin(455,535,20,110);
     //dustbin2 = new Dustbin(555,580,180,20);
     dustbin3 = new Dustbin(635,535,100,110);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ball.display();
  //dustbin1.display();
  //dustbin2.display();
  dustbin3.display();


  drawSprites();
 
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
  }
}




