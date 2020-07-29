let t=0; // for getting sine and cos values
let xoff =0; // for random walk x
let yoff =100; // for random walk y
let zoff = 0;  // for amplitude
let lineSilder;
let xfreqSlider;
let x1freqSlider;
let yfreqSlider;
let y1freqSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  lineSlider = createSlider(3, 360, 26); //default num of lines 26
  lineSlider.position(10, 10);
  lineSlider.style('width', '80px');
  lineSlider.size(360);
  xfreqSlider = createSlider(1, 36, 5); //default num of lines 26
  xfreqSlider.position(10, 30);
  xfreqSlider.style('width', '80px');
  xfreqSlider.size(160);
  yfreqSlider = createSlider(1, 36, 5); //default num of lines 26
  yfreqSlider.position(10, 60);
  yfreqSlider.style('width', '80px');
  yfreqSlider.size(160);
  x1freqSlider = createSlider(1, 36, 3); //default num of lines 26
  x1freqSlider.position(10, 90);
  x1freqSlider.style('width', '80px');
  x1freqSlider.size(160);
  y1freqSlider = createSlider(1,36, 2); //default num of lines 26
  y1freqSlider.position(10, 120);
  y1freqSlider.style('width', '80px');
  y1freqSlider.size(160);
  
}

function draw() {
  background(0);
  
  translate(noise(xoff)*width,noise(yoff)*height); //noise so the origin has a smooth random walk
  rotate(frameCount%360);   // also rotates for more in a circle for more fluide movement
  strokeWeight(1);
  stroke(0,255,0);
  let nLines = lineSlider.value(); // sets the numer of lines from silder value before loop
  for (let i = 0;i<nLines;i++){
  line(getx(t+i),gety(t+i),getx1(t+i),gety1(t+1));
  
  }
  t++;
  xoff+=0.007;
  yoff+=0.007;
  zoff+=0.007;
}


function getx(t){
  return sin(t*xfreqSlider.value())*noise(zoff)*width/2;
  //return t
}


function gety(t){
  return cos(t*yfreqSlider.value())*noise(zoff)*height/2; 
  //return t;
}



function getx1(t){
  return sin(t*x1freqSlider.value())*noise(zoff)*width/2;
  //return t
}


function gety1(t){
  return cos(t*y1freqSlider.value())*noise(zoff)*height/2; 
  //return t;
}