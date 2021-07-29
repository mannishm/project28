class Control{
    constructor(bA,pointB){
        var options={
            bodyA:bA,
            pointB:pointB,
            stiffness:0.1,
            length:40
        }
        this.pointB=pointB
        this.cont=cont.create(options);
        
        World.add(world,this.cont);
    }
    fly(){
        this.cont.bodyA=null
    }
    display(){
        if(this.cont.bodyA){
            line(this.cont.bodyA.position.x,this.cont.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
        
    }
}