// By creating a class

class Student {
    first_name = "Naimur"
    lasdt_name = "Rahman"
    id = 33
    isStudent = true
    depertment = "CSE"  

    getName(){
        return `My name is ${this.first_name} ${this.lasdt_name}`
    };
}

let StudentObject = new Student();
console.log(StudentObject);
// Output is: 
// Student {
//     first_name: 'Naimur',
//     lasdt_name: 'Rahman',
//     id: 33,
//     isStudent: true,
//     depertment: 'CSE'
// }



class Student {
    first_name = "Naimur"
    lasdt_name = "Rahman"
    id = 33
    isStudent = true
    depertment = "CSE"  

    getName(){
        return `My name is ${this.first_name} ${this.lasdt_name}`
    };
}

let StudentObject = new Student();
console.log(StudentObject.depertment);
// Output is: CSE



class Student {
    first_name = "Naimur"
    lasdt_name = "Rahman"
    id = 33
    isStudent = true
    depertment = "CSE"  

    getName(){
        return `My name is ${this.first_name} ${this.lasdt_name}`
    };
}

let StudentObject = new Student();
console.log(StudentObject.getName());
// Output is: My name is Naimur Rahman