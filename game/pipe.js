class Pipe{
    constructor(game,image) {
        this.game = game;
        this.image = image;
        this.x = 490;
        this.y = 320;
    }
    runPipe(){
    this.x-=8;
    if (this.x==-62){
        this.x=490
        this.y=Math.floor(150+(Math.random()*120));
    }
    this.drawPipe();
    }
    drawPipe(){
        this.game.context.drawImage(this.image,this.x,this.y);
        this.game.context.drawImage(this.image,this.x,this.y-320-120);
    }
}