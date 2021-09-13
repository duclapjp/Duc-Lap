class Game {
    constructor() {
        this.canVas = null;
        this.context = null;
        this.width = 488;
        this.height = 512;

        this.brid = null;
        this.backgroud = null;
        this.pipe = null;
        this.base = null;

        this.status = false;
    }
    init(){
        this.canVas = document.getElementById('myCanvas');
        this.canVas.width = this.width;
        this.canVas.height = this.height;
        this.context = this.canVas.getContext('2d');
        this.backgroud = new Backgroubs(this,bg,0,1);
        this.brid = new Brid(this,brid1,brid2);
        this.base = new Backgroubs(this,base,512-90,8)
        this.pipe = new Pipe(this,pipe);
    }
    run(){
        this.backgroud.changeBackgroud();
        this.pipe.runPipe();
        this.base.changeBackgroud();
        this.brid.bridFly();

    }
}
let game = new Game();
let bg = document.getElementById('bg');
let brid1 = document.getElementById('bird1');
let brid2 = document.getElementById('bird2');
let base = document.getElementById('base');
let pipe = document.getElementById('pipe');
game.init();

function run(){
    if (game.status==false){
        game.run();
        setTimeout(run,30);
    }
}
run();

function bridFly(){
    game.brid.speed =-13;
}
