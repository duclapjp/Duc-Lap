class Backgroubs {
    constructor(game,image,y,speed) {
        this.game = game;
        this.image = image;
        this.y = y;
        this.x = 0;
        this.speed = speed;
    }
    changeBackgroud(){
        this.x-=this.speed;
        if (this.x===-488){
            this.x=0
        }
        this.draw();
    }
    draw(){
        this.game.context.drawImage(this.image,this.x,this.y)
        this.game.context.drawImage(this.image,this.x+488,this.y)
    }
}