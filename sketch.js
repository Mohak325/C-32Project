const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var world,engine,maxDrops=100
var drops = [];

function setup(){
   engine = Engine.create();
   world = engine.world;
   if(frameCount%60=0){
       for(var i=0;i<maxDrops;i++){
           drops.push(new Drops(random(0,400),random(0,400)));
       }
   }

}

function draw(){
    drops.display();
}   

