class Ground{
    constructor(x,y,width,height){
    var options={
    isStatic:true
    }

    this.body=Bodies.rectangle(600,590,1200,15,options);
    this.width=1200
    this.height=15

    World.add(world,this.body)
   }
   display(){
       rectMode(CENTER)
       strokeWeight(2)
       fill("red")

       rect(this.body.position.x,this.body.position.y,this.width,this.height);
   }
}