const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var division1,division2,division3,division4,division5,division6,division7;
var plinko;

var particles = [];
var plinkos   = [];
var divisions = [];







function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world  = engine.world;




  ground    = new Ground(240,740,800,5);
  division1 = new Divisions(10,600,5,275);
  division2 = new Divisions(80,600,5,275);
  division3 = new Divisions(150,600,5,275);
  division4 = new Divisions(220,600,5,275);
  division5 = new Divisions(290,600,5,275);
  division6 = new Divisions(360,600,5,275);
  division7 = new Divisions(420,600,5,275);
  
  

  
  
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  
  
  
  for(var j = 40; j <= width; j++){
    plinkos.push(new Plinko(j,75,10,4));
  }



}