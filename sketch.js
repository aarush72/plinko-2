const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world
var score = 0

function preload() {
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

  ball = new Plinko(240,200,20);
  

  if(ball.body < {x : 60,y : 600}){
    score = score +100
 }

 if(ball.body < {x : 110,y : 600}){
   score = score +200
}

if(ball.body < {x : 160,y : 600}){
 score = score +300
}

if(ball.body < {x : 210,y : 600}){
 score = score +400
}

if(ball.body < {x : 260,y : 600}){
 score = score +500
}

if(ball.body.position.x < 310 && ball.body.position.y < 600) {
 score = score +600
}

if(ball.body < {x : 360,y : 600}){
 score = score +700
}

if(ball.body < {x : 410,y : 600}){
 score = score +800
}

if(ball.body < {x : 460,y : 600}){
 score = score +900
}

  
  ground = new Ground(240,780,600,10);

  division1 = new Division(50,630,10,300);
  division2 = new Division(100,630,10,300);
  division3 = new Division(150,630,10,300);
  division4 = new Division(200,630,10,300);
  division5 = new Division(250,630,10,300);
  division6 = new Division(300,630,10,300);
  division7 = new Division(350,630,10,300);
  division8 = new Division(400,630,10,300);
  division9 = new Division(450,630,10,300);

  dot1 = new Dots(50,400,20)
  dot2 = new Dots(100,400,20)
  dot3 = new Dots(150,400,20)
  dot4 = new Dots(200,400,20)
  dot5 = new Dots(250,400,20)
  dot6 = new Dots(300,400,20)
  dot7 = new Dots(350,400,20)
  dot8 = new Dots(400,400,20)
  dot9 = new Dots(450,400,20)


  dot10 = new Dots(50,450,20)
  dot11 = new Dots(100,450,20)
  dot12 = new Dots(150,450,20)
  dot13 = new Dots(200,450,20)
  dot14 = new Dots(250,450,20)
  dot15 = new Dots(300,450,20)
  dot16 = new Dots(350,450,20)
  dot17 = new Dots(400,450,20)
  dot18 = new Dots(450,450,20)


  dot19 = new Dots(50,350,20)
  dot20 = new Dots(100,350,20)
  dot21 = new Dots(150,350,20)
  dot22 = new Dots(200,350,20)
  dot23 = new Dots(250,350,20)
  dot24 = new Dots(300,350,20)
  dot25 = new Dots(350,350,20)
  dot26 = new Dots(400,350,20)
  dot27 = new Dots(450,350,20)
  
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("black");

  textSize(20)
  fill("yellow")
  text("100",60,600);

  textSize(20)
  fill("yellow")
  text("200",110,600);


  textSize(20)
  fill("yellow")
  text("300",160,600);


  textSize(20)
  fill("yellow")
  text("400",210,600);


  textSize(20)
  fill("yellow")
  text("500",260,600);


  textSize(20)
  fill("yellow")
  text("600",310,600);


  textSize(20)
  fill("yellow")
  text("700",360,600);


  textSize(20)
  fill("yellow")
  text("800",410,600);
  
  textSize(30)
  fill("cyan")
  text("Score : " + score,50,240)
  
  

  

  ball.display();
 
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();

  dot1.display();
  dot2.display();
  dot3.display();
  dot4.display();
  dot5.display();
  dot6.display();
  dot7.display();
  dot8.display();
  dot9.display();

  dot10.display();
  dot11.display();
  dot12.display();
  dot13.display();
  dot14.display();
  dot15.display();
  dot16.display();
  dot17.display();
  dot18.display();

  dot19.display();
  dot20.display();
  dot21.display();
  dot22.display();
  dot23.display();
  dot24.display();
  dot25.display();
  dot26.display();
  dot26.display();
  dot27.display();

  


  Engine.update(engine);

}
