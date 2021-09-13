//khai báo lớp
class Rat{
    constructor(name,weight,speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }
    sound(text){
        console.log(text);
    }
}
//khởi tạo đối tượng
let rattt = new Rat("chuot",63,50);
let linh = new Rat("linh",52,40);
console.log(linh.sound('ahihi'));