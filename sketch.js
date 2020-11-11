
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball,ballobject2,ballobject3,ballobject4,ballobject5
var rope
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new ground1(400,200,500,30)
ball = new BOB(200,200,70)
ballobject2 = new BOB(250,200,70)





rope1 = new Rope (ground.body,ball.body,100,-500);	
rope2 = new Rope (ground.body,ballobject2.body,100,-500);	

Engine.run(engine);
  
}


function draw() {
	background('white')
	rectMode(CENTER);
  background('white');
  ball.display();
ballobject2.display();
  ground.display(); 
 rope1.display(); 
 rope2.display();
 drawSprites();
 
}



