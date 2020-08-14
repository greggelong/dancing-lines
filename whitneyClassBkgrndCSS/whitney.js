class Whitney {
  constructor() {

    this.t = random(50); // starting spot on the unit circle differt phase
    this.xoff = random(1000);  // starting positions and
    this.yoff = random(1000);  //  a function of place in soise space
    this.zoff = random(1000);   // amplitude size 
    this.color = color(random(255));
    this.incrim = random(0.003,0.010);  // rate of increacing in the noise space
    this.numOfLines = random(10,30);
    this.cirSpeed = random(0.3,1);


  }

  incr() {
    this.t += this.cirSpeed;
    //this.t += 0.3;
    this.xoff += this.incrim;
    this.yoff += this.incrim;
    this.zoff += this.incrim;


  }
  
  show() {
    push();
    
    translate(noise(this.xoff)*width,noise(this.yoff)*height);
    strokeWeight(2);
    stroke(this.color);
  
  for (let i = 0;i<this.numOfLines;i++){
  line(this.getx(this.t+i),this.gety(this.t+i),this.getx1(this.t+i),this.gety1(this.t+1));
  
  }
    
    
    pop();
    
    
    
  }
  
  
  getx(t){
  return sin(t*5)*noise(this.zoff)*width/2;
  //return t
}


  gety(t){
  return cos(t*5)*noise(this.zoff)*height/2; 
  //return t;
}



  getx1(t){
  return sin(t*3)*noise(this.zoff)*width/2;
  //return t
}


  gety1(t){
  return cos(t*2)*noise(this.zoff)*height/2; 
  //return t;
}

}