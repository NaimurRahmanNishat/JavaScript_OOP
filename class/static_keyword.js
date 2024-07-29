// By creating a static keywords.

class Person{
    // static is a keywords. Allow this keyword there is no creating object.
    static first_name = "Naimur"
    static last_name = "Rahman"
    
    static getName(){
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

console.log(Person.first_name);
console.log(Person.last_name);
console.log(Person.getName());
// Output is: 
// Naimur
// Rahman
// My name is Naimur Rahman