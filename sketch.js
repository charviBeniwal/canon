const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canon;canonB




function setup(){
    
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    canon = new CanonBall(790,300,70,50, PI/2);
    canonB = new CanonBall(760,240,200,30, -PI/4);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    canon.display();
    canonB.display();
    
   

}
