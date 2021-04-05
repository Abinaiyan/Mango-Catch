
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Juno
var ground
var tree, treeImg
var stone
var catapult
var boy, boyImg

var mango1
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var mango10
var mango11
var mango12
var mango13
var mango14

var chain1
var chain2
var chain3
var chain4
var chain5
var chain6
var chain7
var chain8
var chain9
var chain10
var chain11
var chain12
var chain13
var chain14


function preload() {
boyImg = loadImage("sprites/boy.png")
treeImg = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(300,420,20,20)
	boy.addImage(boyImg)
	boy.scale = 0.12	

	tree = createSprite(950,265,20,20)
	tree.addImage(treeImg)
	tree.scale = 0.40	


	//Create the Bodies Here.
	ground = new Ground(400, 500, 2000, 10)
	stone = new Stone(200,350,360)
	catapult = new Chain(stone.body,{x:235, y:350})
	
	mango1 = new Mango(500,100)
	mango2 = new Mango(900,150)
	mango3 = new Mango(900,100)
	mango4 = new Mango(950,100)
	mango5 = new Mango(850,100)
	mango6 = new Mango(800,200)
	mango7 = new Mango(1000,200)
	mango8 = new Mango(800,250)
	mango9 = new Mango(800,300)
	mango10 = new Mango(650,200)
	mango11 = new Mango(700,200)
	mango12 = new Mango(800,300)
	mango13 = new Mango(650,200)
	mango14 = new Mango(700,200)
	

	
	chain1 = new Catapult(mango1.body,{x:930, y:100})
	chain2 = new Catapult(mango2.body,{x:900, y:150})
	chain3 = new Catapult(mango3.body,{x:1100, y:100})
	chain4 = new Catapult(mango4.body,{x:850, y:100})
	chain5 = new Catapult(mango5.body,{x:900, y:200})
	chain6 = new Catapult(mango6.body,{x:830, y:200})
	chain7 = new Catapult(mango7.body,{x:1020, y:100})
	chain8 = new Catapult(mango8.body,{x:880, y:50})
	chain9 = new Catapult(mango9.body,{x:1000, y:30})
	chain10 = new Catapult(mango10.body,{x:830, y:150})
	chain11 = new Catapult(mango11.body,{x:980, y:200})
	chain12 = new Catapult(mango12.body,{x:750, y:160})
	chain13 = new Catapult(mango13.body,{x:1000, y:170})
	chain14 = new Catapult(mango14.body,{x:1100, y:170})


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	drawSprites();

	ground.display()
	stone.display()
	catapult.display()
	
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	mango6.display()
	mango7.display()
	mango8.display()
	mango9.display()
	mango10.display()
	mango11.display()
	mango12.display()
	mango13.display()
	mango14.display()
	
	stroke("green")
	chain1.display()
	chain2.display()
	chain3.display()
	chain4.display()
	chain5.display()
	chain6.display()
	chain7.display()
	chain8.display()
	chain9.display()
	chain10.display()
	chain11.display()
	chain12.display()
	chain13.display()
	chain14.display()

	detectCollision(stone, mango1)
	detectCollision(stone, mango2)
	detectCollision(stone, mango3)
	detectCollision(stone, mango4)
	detectCollision(stone, mango5)
	detectCollision(stone, mango6)
	detectCollision(stone, mango7)
	detectCollision(stone, mango8)
	detectCollision(stone, mango9)
	detectCollision(stone, mango10)
	detectCollision(stone, mango11)
	detectCollision(stone, mango12)
	detectCollision(stone, mango13)
	detectCollision(stone, mango14)
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult.fly();
}

function keyPressed(){
	if (keyCode === 32){
		//Matter.Body.setPosition(stone.body, {x:235, y:420})
		//launcherObject.attach(stone.body)
		catapult.attach(stone.body)
	}
}

function detectCollision(Lstone, Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Lmango.r + Lstone.r){
		matter.Body.setStatic(Lmango.body, false)
	}
}
