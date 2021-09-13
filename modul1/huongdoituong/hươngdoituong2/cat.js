class Cat{
    constructor(name,weight,speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    sound(text){
        console.log(text);
    }
    catch(rat){
        //nếu tốc độ mèo lớn hơn chuột
        if (this.speed>rat.speed)
            console.log("meo"+this.name+"đã bắt được chuột"+rat.name);
    }
    eat(rat){
        console.log("meo"+this.name+"đã ăn chuột"+rat.name);
        //chuyển trạng thái chuột => false
        rat.status =false;
        this.weight+=rat.weight;
    }
}
let meoa = new Cat("lập",30,70);
