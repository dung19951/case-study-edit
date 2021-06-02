
class ship {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w =w;
        this.h = h;
        this.reloadTime=5  ;
        this.count=0;
        this.bullets=[];
    }

    creatRec() {
        pen.beginPath();
        pen.rect(this.x, this.y, this.w, this.h);
        pen.fill();
        pen.closePath()
    }
    creatShip() {
        let img = new Image();
        img.src = 'image/fff.png';
        pen.drawImage(img, this.x, this.y, this.w, this.h)
    }

    shoot(){
        this.count++;
        if(this.count>this.reloadTime){
            let bullet=new Bullet(this.x+this.w/2,this.y,4,4);
            this.bullets.push(bullet);
            this.count=0;
        }
        for (let i = 0; i < this.bullets.length; i++) {
            if(this.bullets[i].y<=0){
                this.bullets.splice(i,1);
            }
           else {
               this.bullets[i].draw();
               this.bullets[i].move()
            }

        }
    }
}

window.addEventListener("keydown", moveShipRight);

function moveShipRight() {
    pen.clearRect(tau.x, tau.y, tau.w, tau.h)
    tau.x = tau.x + 10;
    tau.creatShip()
    if (tau.x>=canvas.width-tau.w){
        tau.x=canvas.width-tau.w ;
    }
}
function moveByClick(event) {
    switch (event.which){
        case 39:
            moveShipRight()
            break;

        case 37:
            moveShipLeft()
            break;

    }

}
window.addEventListener('keydown', moveByClick);
function moveShipLeft() {
    pen.clearRect(tau.x, tau.y, tau.w, tau.h)
    console.log(tau.x)
    tau.x = tau.x - 10;
    tau.creatShip();
    if (tau.x<=0){
        tau.x=0
    }
}
window.addEventListener("keydown",moveShipLeft);
