var canvas,box1,box2,box3,box4;
var music,edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   //music.play();
   
    //create 4 different surfaces
    box1=createSprite(100,580,190,30)
    box2=createSprite(300,580,190,30)
    box3=createSprite(500,580,190,30)
    box4=createSprite(700,580,190,30)
    box1.shapeColor="orange"
    box2.shapeColor="blue"
    box3.shapeColor="pink"
    box4.shapeColor="yellow"

    //create box sprite and give velocity
    box=createSprite(random(20,750),50,30,30)
    box.shapeColor="white"
    box.velocityX=15
    box.velocityY=15
  
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges= createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
if(box1.isTouching(box)&& box.bounceOff(box1))
{
    box.shapeColor="orange"
   
  music.play();
}
if(box2.isTouching(box)&& box.bounceOff(box2))
{
    box.shapeColor="blue"
 
music.play();
}
if(box3.isTouching(box)&& box.bounceOff(box3))
{
    box.shapeColor="pink"
 
 music.play();
}
if(box4.isTouching(box)&& box.bounceOff(box4))
{
    box.shapeColor="yellow"
    box.velocityX=0
  box.velocityY=0
    music.stop()
}
drawSprites()
}
