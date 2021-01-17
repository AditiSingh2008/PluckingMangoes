
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var mango1,ground,boy,rock,chain
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
	engine = Engine.create();
  world = engine.world;
ground=new Ground(500,960,1000,30);
tree=new Tree(400,360);
mango1=new Mango (500,550,50,50);
mango2=new Mango(540,590,70,70);
mango3=new Mango(570,460,50,50);
mango4=new Mango(650,500,70,70);
mango5=new Mango(580,520,50,50);
mango6=new Mango(620,570,50,50);
mango7=new Mango(690,580,50,50);
mango8=new Mango(870,550,70,70);
mango9=new Mango(720,530,50,50);
mango10=new Mango(770,570,50,50);
mango11=new Mango(770,500,50,50);
mango12=new Mango(450,580,50,50);
mango13=new Mango(490,500,50,50);
mango14=new Mango(700,400,70,70);
mango15=new Mango(630,430,50,50);
mango16=new Mango(700,490,50,50);
mango17=new Mango(830,540,50,50);
boy=new Boy(50,650);
rock=new Rock(100,800,50);
chain= new Chain(rock.body,{x:130,y:750});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  ground.display();
 boy.display();
  tree.display();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  chain.display();
  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);
  detectCollision(rock,mango6);
  detectCollision(rock,mango7);
  detectCollision(rock,mango8);
  detectCollision(rock,mango9);
  detectCollision(rock,mango10);
  detectCollision(rock,mango11);
  detectCollision(rock,mango12);
  detectCollision(rock,mango13);
  detectCollision(rock,mango14);
  detectCollision(rock,mango15);
  detectCollision(rock,mango16);
  detectCollision(rock,mango17);
  textSize(24);
  fill("black")
  text("Press Space To Get Second Chance",100,100);
  textSize(30);
  fill("yellow")
  text("PLUCKING MANGOES",350,350)
  
  
}
 function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(rock.body,{x:150,y:420})
    chain.attach(rock.body)
    console.log("attach")
  }
}

function detectCollision(rock,mango){
mangoBodyPosition=mango.body.position;
rockBodyPosition=rock.body.position;
var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.width+rock.r){
  Matter.Body.setStatic(mango.body,false)
}
}