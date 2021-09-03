class Humans {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    info() {
        return console.log(this);
    }
}

var main = function () {
    let Gaurav = new Humans('Gaurav', 24, 'Male');
    let Nishi = new Humans('Nishi', 23, 'Female');

    Gaurav.info();
    Nishi.info();
}
main()