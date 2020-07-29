/* 

    x = cos ⁡ t 
    y = sin ⁡ t 

form a parametric representation of the unit circle.
 
These dancing lines are made by plotting points in sine and cosine space (t)
around a unit circle.  the frequency and amplitude of are being modified,
like this sin(t*frequency)*amplitude). 
Changes to the amplitude change the length of the line in the canvas. 
Changes in frequency can make the lines more or less vertical. 
Each group of colored lines are incremented differently (and some randomly) 
so they are out of phase. If they were in phase they would sit on top of each
other and you could only see the last set drawn. 12 year old me would say it
looks a lot like the 80s arcade game QIX. But now I see these type of
visualizations were pioneered in the 60s by John Whitney.

*/


let t=0;// controls green
let t1= 0;// controls red
let t2 =0;// controls yellow

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width/2,height/2); // need to position 0 to the center of the canvas
  strokeWeight(3);
  stroke(0,255,0);
  
  for (let i = 0;i<9;i++){  // number of green lines
  line(getx(t+i),gety(t+i),getx1(t+i),gety1(t+1));
  }
  
  for (let i = 0;i<9;i++){ // number of red lines
  stroke(155,0,0);
  line(getx(t1+i),gety(t1+i),getx1(t1+i),gety1(t1+1));
  }
  
  for (let i = 0;i<9;i++){ // number of yellow lines
  stroke(155,155,0);
  line(getx(t2+i),gety(t2+i),getx1(t2+i),gety1(t2+1));
  }
  
  // if t and t1 increment at the same rate they will be in phase and on top of one another
  t+=0.3; // controls the green movement through sin and cos space, phase shift
  //t1+=0.5; // controls the red movement through sin and cos space, phase shift
  t1+=(random(0.2,0.5));  // red movement random phase shift
  t2+=(random(0.4,0.7));  // yellow movement random phase shift
}

// functions get four points of the line 
// sin(angle*frequency)*amplitude)   
// if three of the frequencies are the same you have vertical lines
// or if you have two pairs of frequences that are the same you get vertical lines

// having the amplititued the same for all you can really see an implied circle
// changing one will lead to more elliptical 

function getx(t){
  return cos(t*10)*width/2;
   
}


function gety(t){
  return sin(t*10)*height/4; 
  
}



function getx1(t){
  return cos(t*5)*width/2;
  
}


function gety1(t){
  return sin(t*2)*height/2; 
  //return cos(t*1)*height/2;
}