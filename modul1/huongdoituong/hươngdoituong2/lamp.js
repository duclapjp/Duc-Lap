class Lamp{
    status;
    constructor(status) {
        this.status = status;
    }
    turnOff(){
        this.status =false;
    }
    turnOn(){
        this.status = true;
    }
    light(){
        if (this.status){
           document.getElementById('result').innerHTML = 'light';
        }else {
            document.getElementById('result').innerHTML = 'not light';
        }
    }
}

let lamp1 = new Lamp(false);