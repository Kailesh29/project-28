class launcher{
    constructor(bodyA, point1){
        var options = {
            bodyA: bodyA,
            pointB: point1,
            stiffness: 0.04,
            length: 10,
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);

        this.pointB = point1;
    }
    attach(body) {
        this.launch.bodyA = body;
    }
    fly() {
        this.launch.bodyA = null;
    }
    display(){
       if(this.launch.bodyA) {
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
        
    }
}
