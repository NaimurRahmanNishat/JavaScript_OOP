// By using an object constructor.

function person(){
    // this is a keyword
    this.first_name = "Naimur"
    this.last_name = "Rahman"
    this.age = 24
    this.city = "Dhaka"
    this.isBangladeshi = true

    // This is anonymous function
    this.getName = () => {
        return `My name is ${this.first_name} ${this.last_name}`
    };
};

let personInstance = new person();       // new is a optional keyword.
// let personInstance = person();
console.log(personInstance);
// Output is:
// person {
//     first_name: 'Naimur',
//     last_name: 'Rahman',
//     age: 24,
//     city: 'Dhaka',
//     isBangladeshi: true,
//     getName: [Function (anonymous)]
// }



function person(){
    // this is a keyword
    this.first_name = "Naimur"
    this.last_name = "Rahman"
    this.age = 24
    this.city = "Dhaka"
    this.isBangladeshi = true

    // This is anonymous function
    this.getName = () => {
        return `My name is ${this.first_name} ${this.last_name}`
    };
};

let personInstance = new person();       // new is a optional keyword.
// let personInstance = person();
console.log(personInstance.first_name);
// Output is: Naimur