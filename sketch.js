const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase,computerplayer,playerbase,playerplayer

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerbase= new ComputerBase(550,200,180,150);
  computerplayer= new ComputerPlayer(550,130,180,150)
  playerbase= new Playerbase(150,200,180,150)
  playerplayer= new PlayerPlayer(150,130,180,150)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  computerbase.display()
  playerbase.display()

   //display Player and computerplayer
  computerplayer.display()
  playerplayer.display()
}
