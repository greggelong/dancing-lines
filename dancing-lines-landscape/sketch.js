let t=0;
let xoff =0;
let yoff =100;
let zoff = 0;
let start1 =0;
let start2 =10000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  mountRange(start1,color(155,55,0),0);
  mountRange(start2,color(155,0,0),height/1.6); // larger the number shorter the mountain
  start1+=0.007;
  start2+=0.019;
  
  push();
  translate(noise(xoff)*width,noise(yoff)*height);
  strokeWeight(3);
  stroke(0,255,0);
  
  for (let i = 0;i<26;i++){
  line(getx(t+i),gety(t+i),getx1(t+i),gety1(t+1));
  }
  pop();
  t++;
  xoff+=0.007;
  yoff+=0.007;
  zoff+=0.007;
}


function getx(t){
  return sin(t*5)*noise(zoff)*width/4;
  //return t
}


function gety(t){
  return cos(t*5)*noise(zoff)*height/4; 
  //return t;
}



function getx1(t){
  return sin(t*3)*noise(zoff)*width/4;
  //return t
}


function gety1(t){
  return cos(t*2)*noise(zoff)*height/4; 
  //return t;
}



function mountRange(start,c,shrnk){ //fill with a start of space, color and shrink the mountain
  
  fill(c);
  beginShape();
  let xoff1 = start; // the xoff = start wich scrolls along the noise space
  for (let x = 0; x < width; x++) {
    //let y = random(height);
    //let y = noise(xoff1)*(height + shrnk);
    let y = map(noise(xoff1),0,1,height,shrnk);
    stroke(255);
    
    vertex(x, y);
    //vertex(width,y);
    xoff1+= 0.007; 
  }
  vertex(width,height); // fills to the bottom of canvas
  vertex(0,height);     //  fills to bottom of canvas
  
  endShape();
  
  //xoff2+= 0.007;
 // noLoop();
 // start+=0.007; // moving the start of the noise space by a bit to give the 
  
  
}
