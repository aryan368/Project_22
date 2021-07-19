const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob
var bob2
var bob3
var bob4
var bob5
var con
var con2
var con3
var con4
var con5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options = {
		restitution:0.8,
	}

	bob = Bodies.circle(330,300,20,bob_options)
	World.add(world,bob);
	bob2 = Bodies.circle(350,300,20,bob_options)
	World.add(world,bob2);
	bob3 = Bodies.circle(370,300,20,bob_options)
	World.add(world,bob3);
	bob4 = Bodies.circle(390,300,20,bob_options)
	World.add(world,bob4);
	bob5 = Bodies.circle(410,300,20,bob_options)
	World.add(world,bob5);
	
	con = Matter.Constraint.create({
		pointA:{x:330,y:100},
		pointB:{x:0,y:0},
		bodyB:bob,
		length:200,
		stiffness:0.1
	});
		World.add(world,con)

	con2 = Matter.Constraint.create({
		pointA:{x:350,y:100},
		pointB:{x:0,y:0},
		bodyB:bob2,
		length:200,
		stiffness:0.1
	});
		World.add(world,con2)
	con3 = Matter.Constraint.create({
		pointA:{x:370,y:100},
		pointB:{x:0,y:0},
		bodyB:bob3,
		length:200,
		stiffness:0.1
	});
		World.add(world,con3)
	con4 = Matter.Constraint.create({
		pointA:{x:390,y:100},
		pointB:{x:0,y:0},
		bodyB:bob4,
		length:200,
		stiffness:0.1
	});
		World.add(world,con4)
	con5 = Matter.Constraint.create({
		pointA:{x:410,y:100},
		pointB:{x:0,y:0},
		bodyB:bob5,
		length:200,
		stiffness:0.1
	});
		World.add(world,con5)	
		
		
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background("#99004d");
	Engine.update(engine);

	rect(roof.position.x,roof.position.y,230,20)
	//create ellipse shape for multiple bobs here
	ellipse(bob.position.x,bob.position.y,20);
	ellipse(bob2.position.x,bob2.position.y,20);
	ellipse(bob3.position.x,bob3.position.y,20);
	ellipse(bob4.position.x,bob4.position.y,20);
	ellipse(bob5.position.x,bob5.position.y,20);


	push();
	strokeWeight(2);
	stroke(255);
	line(con.pointA.x,con.pointA.y,bob.position.x,bob.position.y);
	line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y);
	line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y);
	line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);
	line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y);
	pop();
	}

	

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode==LEFT_ARROW)
	{
		Mayyer.Body.applyForce(bob,{x:0,y:0},{x:-0.05,y:0})
	}
}