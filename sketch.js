const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
}

function setup() {
	createCanvas(1000,500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here;
	 
	 ground1=new ground(800,200,200,10);
   ground2=new ground(490,350,250,10);
   ground3=new ground(500,500,1000,30);
   //bottomRow1
   fill("blue");
   box1=new Box(740,175,30,40);
   box2=new Box(770,175,30,40);
   box3=new Box(800,175,30,40);
   box4=new Box(830,175,30,40);
   box5=new Box(860,175,30,40);

   //middlerow1
   box6=new Box(770,135,30,40);
   box7=new Box(800,135,30,40);
   box8=new Box(830,135,30,40);

   //top
   box9=new Box(800,95,30,40);

   //bottom2
   block1=new Box(400,325,30,40);
   block2=new Box(430,325,30,40);
   block3=new Box(460,325,30,40);
   block4=new Box(490,325,30,40);
   block5=new Box(520,325,30,40);
   block6=new Box(550,325,30,40);
   block7=new Box(580,325,30,40);

   //middle2
   block8=new Box(430,285,30,40);
   block9=new Box(460,285,30,40);
   block10=new Box(490,285,30,40);
   block11=new Box(520,285,30,40);
   block12=new Box(550,285,30,40);

   //actualmiddle2
   block13=new Box(460,245,30,40);
   block14=new Box(490,245,30,40);
   block15=new Box(520,245,30,40);

   //top2
   block16=new Box(490,205,30,40);
   polygon1=new polygon(150,150,40);

   slingShot=new slingshot(polygon1.body,{x:150,y:150});
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon1.display();
  slingShot.display();
}
function mouseDragged(){
   Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
} 
function keyPressed(){                        
  if(keyCode === 32){
  Matter.Body.setPosition(polygon1.body, {x:50 , y:200});
  slingShot.attach(polygon1.body);
  }
}
