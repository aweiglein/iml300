function setup() {
    let c = createCanvas(windowWidth,windowHeight);
c.parent ('bg');

}

function draw() {
  background(220);

  for (let NL = 20; NL <= height; NL = NL + 30)
{line (0, NL, width, NL);}

  line (40,0,40,height);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}