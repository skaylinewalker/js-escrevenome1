function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("blue");
  fill("red");
  
  if(mosressed){
    rect(mouseX, mouseY, 20, 35);
  }
  
  
}