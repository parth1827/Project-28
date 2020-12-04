
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,390,1200,20);
	boy = new Boy(300,390);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  boy.display();
  
  drawSprites();
 
}



