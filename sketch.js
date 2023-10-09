// An interactive orbit visualization 
// By: Adara Hagman during NASA Space Apps 2023 

// How-it-works 
//
// The following it to alter the orbiting object: 
// To increase the distance: press 'F' on your keyboard
// To decrease the distance: press 'C'on your keyboard
// To increase the speed: press 'I'on your keyboard
// To decrease the speed: press 'D' on your keyboard
// To increase the size: press 'G' on your keyboard
// To decrease the size: press 'S'on your keyboard


var planetCenterX = 300;
var planetCenterY = 300;
var orbitRadius = 150; // this affects the distance
var angle = 0;
var speed = 0.01;
var orbitingSize = 35;

function setup() {
  createCanvas(600, 600);
}

function draw() { 
  background('black');
  
  var x = planetCenterX + orbitRadius * cos(angle);
  var y = planetCenterY + orbitRadius * sin(angle);
  
  noStroke();
  fill(109, 158, 235);
  ellipse(planetCenterX, planetCenterY, 150, 150); // planet being orbited 
  fill('white');
  ellipse(x, y, orbitingSize, orbitingSize); // orbiting object
  
  angle += speed;
  
  if ((key == 'F' || key == 'f') && isKeyPressed) {
    orbitRadius += 10; 
  }
  
  if ((key == 'C' || key == 'c') && isKeyPressed) {
    orbitRadius -= 10; 
  }
  
  if ((key == 'I' || key == 'i') && isKeyPressed) {
    speed += 0.01; 
  }
  
  if ((key == 'D' || key == 'd') && isKeyPressed) {
    speed -= 0.01; 
  }
  
  if ((key == 'G' || key == 'g') && isKeyPressed) {
    orbitingSize += 5; 
  }
  
  if ((key == 'S' || key == 's') && isKeyPressed) {
    orbitingSize -= 5; 
  }
  
}