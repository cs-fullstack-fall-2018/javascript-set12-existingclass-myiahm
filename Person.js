class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
    var person1 = new Person(name, age, weight, height);
    alert(person1.bodyMassIndex());
    var person2 = new Person(name, age, weight, height);
    alert(person2.bodyMassIndex());


    var personArray = [];
    personArray.push(person1);
    personArray.push(person2);
    personArray[1].printPerson()
}
main();
