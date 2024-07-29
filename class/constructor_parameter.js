class Person{
    // constructor name is same but parameter name not same.
    constructor(num1, num2){
        let sum = num1 + num2;
        console.log(sum);
    }
}

let PersonObj = new Person(10, 20);
// Output is: 30