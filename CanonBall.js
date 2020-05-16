class CanonBall {
  constructor(x, y,width,height,angle) {
    var options = {
      "density" :   1.5,
      "friction" : 210.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    
    this.body = Bodies.rectangle(x, y, width, height,angle, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);

    Matter.Body.setAngle(this.body, angle);
  }

  display(){
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
  }
}
