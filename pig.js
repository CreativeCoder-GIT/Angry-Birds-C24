class Pig{

     constructor(x,y)
         {
             var options={

                restitution:0.8,
                friction:1,
                density:1
            }
 this.body=Bodies.rectangle(x,y,50,50,options)
 World.add(world, this.body)
         
        }
        display()
        {
       var pos=this.body.position;
       var angle=this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER)
       fill(0,100,0)
       rect(0,0,50,50)
       pop();

        }
}