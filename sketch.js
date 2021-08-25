//namespacing 
const Engine = Matter.Engine   // a=5 a=7 const 
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); //
  world = engine.world;

  object = Bodies.rectangle(200,100,50,50)
  World.add(world,object) //add 

  console.log(object)

}

function draw() {
  background(0);  
  Engine.update(engine)


  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50)
 // drawS,prites();
}