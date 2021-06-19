class Log{

    constructor(x,y,height,angle)
        {
            var options={

               restitution:0.4,
               friction:0.5,
               density:1
           }
this.body=Bodies.rectangle(x,y,17,height,50,options)
World.add(world, this.body)
this.height=height
Matter.Body.setAngle(this.body,angle)
        
       }
       display()
       {
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER)
      fill(220,20,60)
      rect(0,0,17,this.height)
      pop();

       }
}