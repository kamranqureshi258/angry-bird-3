class Chain{
    constructor(Body1,Body2){
        var options={
            bodyA:Body1,
            bodyB:Body2,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)

    }
    display(){
       var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(3);
        line (pointB.x,pointB.y,pointA.x,pointA.y)
        
    }
    }