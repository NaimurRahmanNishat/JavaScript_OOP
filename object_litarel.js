// How to write object using object litarel.
let person = {
    firstName : "Naimur",
    lastName : "Rahman",
    age : 24,
    city : "Dhaka",
    isBangladeshi : true,
    getName:()=>{
        console.log(`My full name is ${person.firstName} ${person.lastName}`)
    }
};




let person = {
    firstName : "Naimur",
    lastName : "Rahman",
    age : 24,
    city : "Dhaka",
    isBangladeshi : true,
    getName:()=>{
        return `My full name is ${person.firstName} ${person.lastName}`
    }
};

console.log(person)


let person = {
    firstName : "Naimur",
    lastName : "Rahman",
    age : 24,
    city : "Dhaka",
    isBangladeshi : true,
    getName:()=>{
        return `My full name is ${person.firstName} ${person.lastName}`
    }
};

console.log(person.getName())
// Output is: My full name is Naimur Rahman