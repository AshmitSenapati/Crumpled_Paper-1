
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbinSide1,dustbinSide2,dustbinBottom,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(60,height-100,20)
	ground = new Ground(width/2,height-20,width,20)
	dustbinSide1 = new Side(510,height-152,10,250,-PI*4)
	dustbinSide2 = new Side(710,height-152,10,250,PI*4)
	dustbinBottom = new Bottom(610,height-34,150,10)

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

	Engine.update(engine);

  ground.display();
  paper.display();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinBottom.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:70,
			y:-77
		});
	}
}

