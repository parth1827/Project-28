class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("Images/stone.png");
    }
  
    display() {
      super.display();
    }
  }