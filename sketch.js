
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const cont = Matter.Constraint;

function preload()
{
binImage=loadImage("binImage.png");	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	groundObject=new Ground();
	paperObject=new Paper(250,540,20);
	

	

	bin=createSprite(964,520,20,20);
    bin.addImage(binImage);
	bin.scale=1.15;

	binPart1=new DustBin(902,505,10,120);
	binPart2=new DustBin(962,565,130,10);
	binPart3=new DustBin(1024,505,10,120);
	cont1=new Control(paperObject.body,{x:500,y:150});
    
	Engine.run(engine);
}
	
	
	



function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  
  paperObject.display();
  groundObject.display();
  binPart1.display();
  binPart2.display();
  binPart3.display();
  cont1.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    cont1.fly();
}


