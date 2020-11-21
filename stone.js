class Box{
    constructor(x, y, width, height) {
        var options = {
            //isStatic:true,
            'restitution':0.8,
            'friction':5.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
      //  console.log(this.body.speed);
        if(this.body.speed<3){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
      //  rotate(angle);
        rectMode(CENTER);
        fill("lightblue");
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity-5;
        tint(255,this.Visiblity);
        rect( 0, 0, this.width, this.height);
        pop();
        }
      }
    }