function check(){
    for (let i = 0; i < cG.length; i++) {
        for (let j = 0; j < tau.bullets.length; j++) {
            if (cG[i].x+w>tau.bullets[j].x&&cG[i].y+h<tau.bullets[j].y){
                cG.splice(i,1);
                tau.bullets.splice(j,1)
            }
        }
    }
}