
let myWhit = [];

function setup() {
  if (windowWidth < windowHeight){
  
  createCanvas(windowWidth, windowWidth);
    
  }else{
    
    createCanvas(windowHeight, windowHeight);
    
  }
  background(0);
  pixelDensity(1);
  colorMode(HSB);
  angleMode(DEGREES);
  
  for (let i =0;i<20;i++){
   myWhit[i] = new Whitney();
   
}
}

function draw() {
  background((frameCount/2)%255, 113, 218);
   for (let i =0; i<myWhit.length;i++){
     myWhit[i].show();
     myWhit[i].incr();
   }
}


