function setup() {
    let c = createCanvas(windowWidth,windowHeight);
c.parent ('bg');

}

function draw() {
  background("#f7f4ee");

    stroke(190,200,210);
    strokeWeight(1);
    
  for (let NL = 20; NL <= height; NL = NL + 30)
{line (0, NL, width, NL);}

    stroke(210,20,40);
  line (40,0,40,height);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}