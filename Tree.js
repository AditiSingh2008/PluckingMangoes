class Tree{
    constructor(x, y) {
    var options={
isStatic:true
    }
        this.body = Bodies.rectangle(x, y,300,300,options);
        this.width = 300;
        this.height = 300;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        rectMode(CENTER)
        image(this.image,pos.x,pos.y,600,600);
      }
}