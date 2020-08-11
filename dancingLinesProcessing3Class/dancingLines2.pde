
Whitney[] whix;  //ceclar the array very diff from js

void setup() {
  size(800, 800);
  background(0);
  //angleMode(DEGREES);
  whix = new Whitney[10];  // create the array
  for (int i =0; i<whix.length; i++) {

    whix[i] = new Whitney();
  }
}

void draw() {
  background(0);
  //for (int i =0; i<whix.length;i++){
  //whix[i].show();
  //whix[i].incr();

  for (Whitney w : whix) {
    w.show();
    w.incr();
  }
}
