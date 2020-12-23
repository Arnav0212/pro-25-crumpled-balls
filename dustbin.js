class Dustbin {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,70,200,options);
      this.image = loadImage("dustbingreen.png")
      this.width = 70;
      this.height = 200;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      //fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  