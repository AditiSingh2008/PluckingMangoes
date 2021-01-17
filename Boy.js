class Boy{
    constructor(x, y) {
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y,100,100,options);
        this.width = 300;
        this.height = 300;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        rectMode(CENTER)
        image(this.image,pos.x,pos.y,400,400);
      }
}