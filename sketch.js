var Helicopter,HelicopterImage 
var Package,PackageImage,PackageBody;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
HelicopterImage=loadImage("helicopter.png")
PackageImage=loadImage("package.png")
}

function setup(){
createCanvas(1000,700);
rectMode(CENTER);

engine = Engine.create();
world = engine.world;
	
Package=createSprite(width/2,80,10,10);
Package.addImage(PackageImage)
Package.scale=0.2

Helicopter=createSprite(515,196,10,10);
Helicopter.addImage(HelicopterImage)
Helicopter.scale=0.7

ground=createSprite(width/2,height-35,width,10);
ground.shapeColor=color(255)

PackageBody = Bodies.circle(width/2,200,5,{restitution:0.4, isStatic:true});
World.add(world,PackageBody);
	
ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true} );
World.add(world,ground);

boxPosition=width/2-100
boxY=610;

LeftWall=createSprite(boxPosition,boxY,20,100);
LeftWall.shapeColor=color(255,0,0);

LeftWallBody = Bodies.rectangle(boxPosition+20,boxY,20,100, {isStatic:true} );
World.add(world,LeftWallBody);

CenterWall=createSprite(boxPosition+100,boxY+40,200,20);
CenterWall.shapeColor=color(255,0,0);

CenterWallBody = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20, {isStatic:true} );
World.add(world,CenterWallBody);

RightWall=createSprite(boxPosition+200,boxY,20,100);
RightWall.shapeColor=color(255,0,0);

RightWallBody = Bodies.rectangle(boxPosition+200-20,boxY,20,100, {isStatic:true} );
World.add(world,RightWallBody);

Engine.run(engine);
}

function draw(){
rectMode(CENTER);
background(0);
 
Package.x= PackageBody.position.x 
Package.y= PackageBody.position.y 

keyPressed();
  drawSprites();
  
LeftWall.display();
CenterWall.display();
RightWall.display();
}

function keyPressed() {

if(keyWentDown("LEFT_ARROW")){
Helicopter.x = Helicopter.x-30
Matter.Body.translate(PackageBody,{x:-30,y:0});
}
		
if(keyWentDown("RIGHT_ARROW")){
Helicopter.x = Helicopter.x+30
Matter.Body.translate(PackageBody,{x:30,y:0});
}

if(keyCode === DOWN_ARROW){
Body.setStatic(PackageBody,false);
}
}
   
	
