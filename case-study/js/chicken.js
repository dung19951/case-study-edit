class Chicken {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w=w;
        this.h=h;
    }
drawGa(){
        let img= new Image();
        img.src='image/ga.png';
        pen.drawImage(img,this.x,this.y,this.w,this.h);
}
moveGa(){
        this.y+=3;
}
}






















































