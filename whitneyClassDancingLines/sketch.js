
let myWhit = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  
  for (let i =0;i<10;i++){
   myWhit[i] = new Whitney();
   
}
}

function draw() {
  background(0);
   for (let i =0; i<myWhit.length;i++){
     myWhit[i].show();
     myWhit[i].incr();
   }
}


