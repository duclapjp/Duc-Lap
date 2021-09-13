class Brid{
    constructor(game,image1,image2) {
        this.game = game;
        this.images = [image1,image2];
        this.x = 150;
        this.y=0;
        this.status = 0;
        this.count = 0;
        this.acceleration = 1.5;
        this.speed = 0;
    }
    bridFly() {
        this.count++;
        if (this.count%5==0){
            if (this.status==0){
                this.status=1;
            }else this.status=0;
        }

        if (this.y<=488-90-40){
            this.speed+=this.acceleration
            this.y+=this.speed;
        }
        if ((this.x+40 > this.game.pipe.x && this.x<this.game.pipe.x + 60)&&((this.y < this.game.pipe.y - 120) ||(this.y+40 > this.game.pipe.y))){
            this.game.status = true;
        }
        this.draw();
    }
    draw(){
        this.game.context.drawImage(this.images[this.status],this.x,this.y);
    }
}