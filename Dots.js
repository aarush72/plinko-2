class Dots {
    constructor(x,y,r) {
    
    var option = {
    isStatic : true,
    restitution : 1,
    friction : 0.5,
    density : 0.5
    }
    
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,option);
    World.add(world,this.body)
    
    }
    
    display() {
    var ballpos = this.body.position;
    
    push()
    translate(ballpos.x,ballpos.y);
    fill("white");
    ellipse(0,0,this.r, this.r);
    pop()
    
    }
    
}