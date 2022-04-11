
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world,backgroundImg;
var ground,canvas;
var block1,block2,block3,block4;
var block=[]

var isGameOver = false;

function preload(){
  backgroundImg=loadImage("bg.png")
  block1=loadImage('block1.png');
  block2=loadImage('block2.png');
  block3=loadImage('block3.png');
  block4=loadImage('block4.png');


}




function setup() {
  canvas=createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(0, height - 10, width * 3, 20, { isStatic: true });
  World.add(world, ground);
   
  
}


function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);

  

  if(frameCount%150==0){
    rand=Math.round(random(1,2));
    if(rand==1)
    {block.push(new Block(0,30,100,50));
      } 
      else if(rand==2){
        {block.push(new Block(1200,30,100,50));
        }

      }
    }
  for(var i=0;i<block.length;i++){
    block[i].display()

  }

 

}