class Rock{
    constructor(x, y,r) {
    var options={
        'restitution':0,
        'friction':1.0,
        'density':5,
isStatic:false
    }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("stone.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)
        fill("white");
      rectMode(CENTER);
      imageMode (CENTER)
      image(this.image,0,0,this.r,this.r)
        pop()
      }
}