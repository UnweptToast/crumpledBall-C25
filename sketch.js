
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, ball;
var ballRadius;
var pressed = 1;
var xForce = 85, yForce = -170;

var groundWidth, groundHeight = 20;
var boxBase, boxLeftEdge, boxRightEdge;
var dustbinImg;
var paperImage;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

  paperImage = loadImage("paper.png")

	groundWidth = width
	var ball_options = {restitution: 0.3, friction: 1.0, density: 1.2}
  ball = Bodies.circle(200,580,25, ball_options);

	var ground_options = {isStatic: true}
	ground = Bodies.rectangle(width/2, height/1.1, groundWidth, groundHeight, ground_options);

	World.add(world, ball);
	World.add(world, ground);
	Engine.run(engine);

	boxBase = new DustbinEdge(900,ground.position.y - 6,150,5);
	boxLeftEdge = new DustbinEdge(825,ground.position.y-100,10,200);
  boxRightEdge = new DustbinEdge(975,ground.position.y-100,10,200);
  dustbinImg = new Dustbin(900,ground.position.y - 98,195,210);


  console.log(ground);
  
}


function draw() {
  background("white");
  
  var angle = ball.angle;
  push();
  translate(ball.position.x,ball.position.y);
  imageMode(CENTER);
  angleMode(RADIANS);
  rotate(angle)
  image(paperImage, 0, 0, 80, 80);
  pop();
  rectMode(CENTER);
  fill("yellow")
  rect(ground.position.x, ground.position.y, groundWidth, groundHeight);


  if((keyWentDown("UP_ARROW") || keyWentDown("space")) && pressed>0) {
    Matter.Body.applyForce(ball, ball.position, {x: xForce, y: yForce});
    Body.setAngularVelocity(ball, 0.2);
	  pressed = 0;
  }
  
  boxBase.display();
  boxLeftEdge.display();
  boxRightEdge.display();
  dustbinImg.display();
 
}



