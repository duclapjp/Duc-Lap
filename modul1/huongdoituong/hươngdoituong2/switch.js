class Switch{
    status;
    lamp;
    constructor(status) {
        this.status = status;
    }
    connectLamp(lamp){
        this.lamp = lamp;
    }
    switchOff(){
        this.status = false;
        this.lamp.turnOff();
    }
    switchOn(){
        this.status = true;
        this.lamp.turnOn();
    }
    switchCheck(){
        if (this.status){
           alert("switch is on");
        }else {
            alert("switch is off");
        }
    }
}

let myswitch = new Switch(false);
myswitch.connectLamp(lamp1);

function check1(){
    myswitch.switchOn();
    lamp1.light();

}