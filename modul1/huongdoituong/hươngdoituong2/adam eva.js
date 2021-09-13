class Apple {
    constructor(weight) {
        this.weight = 10;
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        return this.weight === 0;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    getGender(){
        return this.gender;
    }

    isMale() {
        if (this.gender === 'male') {
            document.write(this.name + 'is a male');
        } else {
            document.write(this.name + 'is a female');
        }
    }

    sayString(string) {
        document.write(this.name + string)
    }

    eatApple(apple) {
        this.weight++;
        document.write(this.weight + "<br>");
        apple.decrease();
        document.write(apple.getWeight() + "<br>");
    }

    checkApple(apple) {
        if (apple.getWeight() > 0) {
            apple.eatApple();
        } else {
            alert("apple run out");
        }
    }
}
let apple = new Apple(10);
let human = new Human('adam','male',64);

