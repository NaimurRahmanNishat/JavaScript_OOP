// By creating a setter and getter function.

class Product{
    // set means keywords.
    set SetPrice(value){
        this.price = value;
    }

    // get means keywords.
    get GetPrice(){
        return this.price;
    }
}

let ProductObj = new Product();
console.log(ProductObj);
// Output is: Product {}



class Product{
    // set means keywords. setter means value set
    set SetPrice(value){
        this.price = value;
    }

    // get means keywords. getter means value out
    get GetPrice(){
        return this.price;
    }
}

let ProductObj = new Product();
ProductObj.SetPrice = 100;
console.log(ProductObj);
// Output is: Product { price: 100 }



class Product{
    // set means keywords.
    set SetPrice(value){
        this.price = value;
    }

    // get means keywords.
    get GetPrice(){
        return this.price;
    }
}

let ProductObj = new Product();
ProductObj.SetPrice = 100;
console.log(ProductObj.GetPrice);
// Output is: 100