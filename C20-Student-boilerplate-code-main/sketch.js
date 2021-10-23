
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball_2;
var ground_2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground_2 = Bodies.rectangle(200, 200, 100, 20, ground_options);
  World.add(world,ground_2);

  ball_2 = Bodies.circle(150, 10, 20, ball_options);
  World.add(world,ball_2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(ball_2.position.x, ball_2.position.y, 20);
  rect(ground_2.position.x, ground_2.position.y, 100, 20);
 
}

