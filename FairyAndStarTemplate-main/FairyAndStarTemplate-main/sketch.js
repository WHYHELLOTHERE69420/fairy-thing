var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	Matter.Body.setStatic(starBody, false);
	Engine.run(engine);

}


function draw() {
  background(bgImg);

 if (keyDown("s")) {
	 star.y = star.y + 3
	 starBody.position.y = starBody.position.y + 3;
 }

 if (keyDown("d")) {
	 fairy.x = fairy.x + 5;
 }
 if (keyDown("a")) {
	fairy.x = fairy.x - 5;
}
if (star.position.y > 470) {
	star.x = fairy.x + 100;
	star.y = fairy.y + -35;
	star.position.x = fairy.x + 100;
	star.position.y = fairy.y + -35;

}

  drawSprites();

}

function touching(a, b) {
	if (a.x == b.x&&a.y == b.y) {
		return true;
	}
}
