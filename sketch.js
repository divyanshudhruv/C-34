const Engine= Matter.Engine
const Bodies= Matter.Bodies
const World= Matter.World;
const Constraint= Matter.Constraint;

var ball,ground;
var box, box2, box3, box4, box5, box6,box7,box8;
var rope1
var box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20
var tower



function setup(){

createCanvas(3000,800);
engine= Engine.create();
world= engine.world;


//objects

ground= new Ground(1500,600,3000,20);
box= new Box(700,100,70,70);
    box2 = new Box(700, 100,70, 70);
    box3 = new Box(700, 100, 70, 70);
    box4 = new Box(700, 100, 70, 70);
    box5 = new Box(700, 100, 70, 70);
    box6 = new Box(700, 100, 70, 70);
    box7 = new Box(700, 100, 70, 70);
    box8 = new Box(700, 100, 70, 70);
    box9 = new Box(800, 100, 70, 70);
    box10 = new Box(800, 100, 70, 70);
    box11 = new Box(800, 100, 70, 70);
    box12 = new Box(800, 100, 70, 70);
    box13 = new Box(800, 100, 70, 70);
    box14 = new Box(800, 100, 70, 70);
    box15 = new Box(800, 100, 70, 70);
    box16 = new Box(800, 100, 70, 70);
    tower= new Tower(480,40,300,20,)
    
    ball = new Ball(100, 10, 80, 80);
rope1=new Rope(ball.body,{x:500,y:50})



}

function draw(){
background("yellow")
Engine.update(engine);

ground.display()
box.display();
ball.display();
rope1.display();
    box2.display();

    box3.display();

    box4.display();

    box5.display();

    box6.display();
    box7.display();

    box8.display();
    box9.display();

    box10.display();

    box11.display();

    box12.display();

    box13.display();

    box14.display();

    box15.display();

    box16.display();
    tower.display();

    




}