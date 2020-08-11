class Whitney {
  float t;
  float xoff;
  float yoff;
  float zoff;
  color clr;
  float incrim;
  int numOfLines;
  float cirSpeed;
  
  
  Whitney() {

    t = random(50); // starting spot on the unit circle differt phase
    xoff = random(1000);  // starting positions and
    yoff = random(1000);  //  a function of place in soise space
    zoff = random(1000);   // amplitude size 
    clr = color(random(255),random(255),random(255));
    incrim = random(0.003,0.010);  // rate of increacing in the noise space
    numOfLines = floor(random(10,30));
    cirSpeed = random(0.3,1);


  }

  void incr() {
    t += cirSpeed;
    //this.t += 0.3;
    xoff += incrim;
    yoff += incrim;
    zoff += incrim;


  }
  
  void show() {
    push();
    
    translate(noise(xoff)*width,noise(yoff)*height);
    strokeWeight(2);
    stroke(clr);
  
  for (int i = 0;i<numOfLines;i++){
  line(getx(t+i), gety(t+i), getx1(t+i), gety1(t+1));
  
  }
    
    
    pop();
    
    
    
  }
  
  
  float getx(float t){
  return sin(radians(t*5))*noise(zoff)*width/2;
  //return t
}


  float gety(float t){
  return cos(radians(t*5))*noise(zoff)*height/2; 
  //return t;
}



  float getx1(float t){
  return sin(radians(t*3))*noise(zoff)*width/2;
  //return t
}


  float gety1(float t){
  return cos(radians(t*2))*noise(zoff)*height/2; 
  //return t;
}

}
