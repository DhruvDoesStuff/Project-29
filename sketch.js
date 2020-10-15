
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  
    stand = new Ground(530,375,250,15);
    block1 = new Box(415,330,30,40);







}

function draw() {
  background(57,44,44);  

  Engine.update(engine);

  stand.display();
  block1.display();






  


  drawSprites();
}