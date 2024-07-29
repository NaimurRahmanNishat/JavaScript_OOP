// By creating a re_declaring class
// A class can be declared once only. If we try to declare class more than one time, it throws an error.

class Person{
    num1 = 10;
    num2 = 20;
    addTwoNumber(){
        return this.num1 + this.num2;
    };
}

class Person{
    num1 = 10;
    num2 = 20;
    addTwoNumber(){
        return this.num1 + this.num2;
    };
}

let PersonObj = new Person();
console.log(PersonObj);
// Output is: throw an error.




// Another way to define a class is by using a class expression.
let Person = class{
    num1 = 10;
    num2 = 20;
    addTwoNumber(){
        return this.num1 + this.num2;
    };
}


let Person = class{
    num1 = 10;
    num2 = 20;
    addTwoNumber(){
        return this.num1 + this.num2;
    };
}

let PersonObj = new Person();
console.log(PersonObj);
// Output is: throw an error.