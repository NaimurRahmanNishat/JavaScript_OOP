// By creating a inheritance
// Father is a parent class and Son is a child class.

class Father{
    num1 = 10;
    num2 = 20;
    addNumber(){
        let sum = this.num1 + this.num2;
        console.log(sum);
    }
}

class Son extends Father{

}

let SonObj = new Son();
console.log(SonObj);
// Output is: Son { num1: 10, num2: 20 }



class Father{
    num1 = 10;
    num2 = 20;
    addNumber(){
        let sum = this.num1 + this.num2;
        console.log(sum);
    }
}

class Son extends Father{

}

let SonObj = new Son();
console.log(SonObj.num1);
// Output is: 10




class Father{
    num1 = 10;
    num2 = 20;
    addNumber(){
        let sum = this.num1 + this.num2;
        console.log(sum);
    }
}

class Son extends Father{

}

let SonObj = new Son();
console.log(SonObj.addNumber());
// Output is: 30


class Father{
    num1 = 10;
    num2 = 20;
    addNumber(){
        let sum = this.num1 + this.num2;
        console.log(sum);
    }
}

class Son extends Father{

}

let FatherObj = new Father();
console.log(FatherObj.addNumber());
// Output is: 30