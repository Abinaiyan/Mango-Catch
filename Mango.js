class Mango{

    constructor(x,y){
    
        var options = {
        
        isStatic:false,
        restitution:0,
        friction:0.5,
        density:1.2
        }
        
        this.body = Bodies.circle(x, y, 10, options)
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body)
        
        
        
        }
        
        display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        imageMode(RADIUS)
        image(this.image,0,0,50,50)
        pop();
        }
        
        }












