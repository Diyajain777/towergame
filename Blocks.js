class Block{
    constructor(x, y, width, height  ) {
     
      this.image = loadImage('block1.png')
      
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;

  
  
      
  
      World.add(world, this.body);
    }
    
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image ,0,0, this.width, this.height);
      noTint();
      pop();
    }
  }
  