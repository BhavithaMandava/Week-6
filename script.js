let amt, startColor, newColor;

function setup() {
  createCanvas(400, 400);
  
  startColor = color(255,255,255);
  newColor = color(random(255),random(255),random(255));
  amt = 0;

  background(startColor);
  s = new Scribble();
}

function draw() {
//Colour changing Background 
  background(lerpColor(startColor, newColor, amt));
  amt += 0.01;
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));}
    
  frameRate(5); 
  for(let i = 50; i <=width-50; i += 50){
  for(let j = 50; j <=height-50; j += 50){
    }
  }
//Fill with scribble
  strokeWeight(random(1, 5)); 
  stroke(random(0, 255), random(0, 255), random(100, 255));
  s.scribbleFilling([width / 4, width / 4, width / 4 * 3, width / 4 * 3], [height / 4, 3 * height / 4, 3 * height / 4, height / 4], random(5, 10), random(0, 360));

//Draw Rectangle 

stroke(random(0, 255), random(0, 255), random(0, 255));
s.scribbleRect(width / 2, height / 2, width / 2, height / 2);
  
stroke(random(0, 255), random(0, 255), random(0, 255));
s.scribbleRect(width / 2, height / 2, width / 1, height / 1);
  
//Draw Ellipse 
stroke(random(0, 255), random(0, 255), random(0, 255));
s.scribbleEllipse(width/2, height/2, 400, 400);
  
stroke(random(0, 255), random(0, 255), random(0, 255));
s.scribbleEllipse(width/2, height/2, 100, 400);

stroke(random(0, 255), random(0, 255), random(0, 255));
s.scribbleEllipse(width/2, height/2, 400, 100);

}