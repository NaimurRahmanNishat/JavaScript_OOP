// Change prototype using consturctor
class Person{
    num1 = 10;
    num2 = 20;

    constructor(a,b){
        this.num1 = a;
        this.num2 = b;
    }
    addTwoNumber(){
        return this.num1 + this.num2
    }
}

let PersonObj = new Person(15,20);
console.log(PersonObj.addTwoNumber());
// Output is: 35