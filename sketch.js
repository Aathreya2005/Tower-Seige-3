
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  g1=new Ground(900,350,150,10);
  g2=new Ground(1100,150,150,10);
  g3=new Ground(600,390,1200,10);
  ball=new Ball(200,200,15);
  sling = new SlingShot(ball.body,{x:200, y:200});
  
  b1=new Box1(900,335);
  b2=new Box1(880,335);
  b3=new Box1(920,335);
  b4=new Box1(860,335);
  b5=new Box1(940,335);

  b6=new Box3(870,305);
  b7=new Box3(890,305);
  b8=new Box3(910,305);
  b9=new Box3(930,305);

  b10=new Box4(880,275);
  b11=new Box4(900,275);
  b12=new Box4(920,275);

  b13=new Box2(890,245);
  b14=new Box2(910,245);

  b15=new Box4(900,215);

  b16=new Box2(1100,135);
  b17=new Box2(1080,135);
  b18=new Box2(1060,135);
  b19=new Box2(1120,135);
  b20=new Box2(1140,135);

  b21=new Box4(1080,95);
  b22=new Box4(1060,95);
  b23=new Box4(1120,95);
  b24=new Box4(1140,95);

  b25=new Box3(1060,55);
  b26=new Box3(1140,55);
 }
function draw(){
 // background(0);
 getTime();
  Engine.update(engine);
  g1.display();
  g2.display();
  g3.display();
  ball.display();
  sling.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  b6.display();
  b7.display();
  b8.display();
  b9.display();

  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();

  b15.display();

  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();

  b21.display();
  b22.display();
  b23.display();
  b24.display();
  
  b25.display();
  b26.display();

 }
 function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode==32){
      sling.attach(ball.body);
  }
}
async function getTime(){               
  var response=await fetch("http://worldtimeapi.org/api/timezone/america/lima");
  var responseJSON=await response.json();
 // console.log(responseJSON.datetime);
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>=06&&hour<=19){
     background(random(0,255),random(0,255),random(0,255));
  }
  else{
      background(0);
  }
}