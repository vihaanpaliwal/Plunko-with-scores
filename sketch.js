const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background(0);
  textSize(18)
  fill("turquoise");
  
  text("Score : "+score,20,40);
  if(gameState==="start"){
  textSize(23)
  fill("green")
  text(" 50 ", 5, 550);
  fill("red")
  text(" 500 ", 85, 550);
  fill("blue")
  text(" 150 ", 165, 550);
  fill("purple")
  text(" 200 ", 245, 550);
  fill("orange")
  text(" 100 ", 325, 550);
  fill("cyan")
  text("700", 405, 550);
  fill("violet")
  text(" 250", 485, 550);
  fill("red")
  text(" 350 ", 565, 550);
  fill("orange")
  text(" 400 ", 645, 550);
  fill("red")
  text(" 50 ", 725, 550);
  }
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(90);
    text("Game Over", 150, 300);
    particle.visible=false;
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null){
       particle.display();
        
        if (particle.body.position.y>760){
              if (particle.body.position.x < 75){
                  score=score+50;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }
              else if (particle.body.position.x < 150 && particle.body.position.x > 75 ){
                    score = score + 500;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 225 && particle.body.position.x > 150 ){
                    score = score + 150;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }   
              else if (particle.body.position.x < 300 && particle.body.position.x > 225 ) {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }  
              else if (particle.body.position.x < 375 && particle.body.position.x > 300 ){
                    score = score + 100;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }   
              else if (particle.body.position.x < 450 && particle.body.position.x > 375 ){
                    score = score + 700;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }   
              else if (particle.body.position.x < 525 && particle.body.position.x > 450 ){
                    score = score + 250;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              } 
              else if (particle.body.position.x < 600 && particle.body.position.x > 525 ){
                score = score + 350;
                particle=null;
                if ( count>= 5)  gameState ="end";

              } 
              else if (particle.body.position.x < 675 && particle.body.position.x > 600){
              score = score + 400;
              particle=null;
              if ( count>= 5)  gameState ="end";

              } 
              else if (particle.body.position.x  > 675 ){
              score = score + 50;
              particle=null;
              if ( count>= 5)  gameState ="end";

              } 
         
                
              
        }
    
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle= new Particle(mouseX, 10, 10, 10); 
  }   
}