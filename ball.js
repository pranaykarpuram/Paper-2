class Ball{
    constructor(x,y,radius){
        var ball_options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.2
        }
        this.body = Bodies.circle(x,y,radius,ball_options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        fill("white")
        imageMode(CENTER);
        image(paperImage,this.body.position.x,this.body.position.y);
        //ellipse(this.body.position.x,this.body.position.y, 70,70);
    }
}