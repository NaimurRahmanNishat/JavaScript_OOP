// Creating by object instance.

// let person = new Object();    // This new is a optional keyword.
let person = Object();

// person is a object. first_name is key and Naimur is key value.
person.first_name = "Naimur"
person.last_name = "Rahman"
person.age = 24
person.city = "Dhaka"
person.isBangladeshi = true

// Anonymous function
person.getName = () =>{
    return `My name is ${person.first_name} ${person.last_name}`;
};

console.log(person);
// Output is: 
// {
//     first_name: 'Naimur',
//     last_name: 'Rahman',
//     age: 24,
//     city: 'Dhaka',
//     isBangladeshi: true,
//     getName: [Function (anonymous)]
// }


let person = Object();

// person is a object. first_name is key and Naimur is key value.
person.first_name = "Naimur"
person.last_name = "Rahman"
person.age = 24
person.city = "Dhaka"
person.isBangladeshi = true

// Anonymous function
person.getName = () =>{
    return `My name is ${person.first_name} ${person.last_name}`;
};

console.log(person.first_name);
// Output is: Naimur