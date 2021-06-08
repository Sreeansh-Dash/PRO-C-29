const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var ploygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
 // console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


//level one
b= new Block(620,150,30,40);
// console.log(block1);
b2 = new Block(650,150,30,40);
 b3 = new Block(680,150,30,40);
 b4 = new Block(710,150,30,40);
 b5 = new Block(740,150,30,40);
 b6 = new Block(770,150,30,40);
 //level two
 b7 = new Block(680,100,30,40);
 
 b8 = new Block(650,100,30,40);
 b9 = new Block(710,100,30,40);
 b10 = new Block(740,100,30,40);
 b11 = new Block(715,50,30,40);
 b12 = new Block(685,50,30,40);
 //level three
 b13 = new Block(700,20,30,40);
// p1=new Ploygon(200,30,20)
ball=new Box(70,190,20)
World.add(world,ball)
slingShot=new SlingShot(ball.body,{x:100,y:180})

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  //ploygon.display()
 // ploygon.display()

  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display()
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 fill("orange")
 b.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
fill("pink")
b7.display()
b8.display()
b9.display()
b10.display()
fill("green")
b11.display()
b12.display()
fill("lightBlue")
b13.display()
//ploygon.display()
//fill("red")
//p1.display()
//ball.addImage(polygon_img)

ball.display()
slingShot.display()

//slingShot=new SlingShot(this.ball,{x:100,y:200})
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY}) 
}
function mouseReleased(){
  //this.sling.fly();
   slingShot.fly()
  // ball.fly()
}

