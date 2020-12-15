class Ground{
    constructor(x,y,w,h)
    {
    var options={
    isStatic:true
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    
    }
    display(){
       
        rectMode(CENTER);
        fill("brown");
        rect(position.x, position.y, this.w, this.h);
      }
    };
