
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	paper1 = new Paper(200,100,5);
	dustbin1 = new Dustbin(200,300,70,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();
  ground.display();
  paper1.display();
  dustbin1.display();




}

function keypressed(){
if (keyCodem===mUP_ARROW){

Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});



}

}
