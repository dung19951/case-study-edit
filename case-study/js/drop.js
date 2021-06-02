
class Bullet{
    constructor(x, y, w,h) {
        this.x = x;
        this.y = y;
        this.w=w;
        this.h=h;
    }
    draw() {
        pen.beginPath();
        pen.fillRect(this.x, this.y, this.w,this.h);
        pen.fillStyle='red'
        pen.fill()

    }
    move(){
        this.y-=10;
    }
}




