const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
   restitution:0.95
  }
 ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball)

 bt1 = createImg("right.png");
 bt1.position(220,30);
 bt1.size(50,50)
bt1.mouseClicked(HorizontalForce)

bt2 = createImg("up.png");
 bt2.position(100,30);
 bt2.size(50,50)
bt2.mouseClicked(VerticalForce)

 rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20)
}

function HorizontalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function VerticalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}