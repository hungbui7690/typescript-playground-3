/*
  Using abstract classes
  - There are times when we don't want consumers to create instances of a class. We can do this in TypeScript by using the <abstract> keyword.


---------------------

  - Extending a class is a way of creating a class similar to another class but with additional functionality. Abstract classes are useful for low-level classes when we don't want consumers to interact with them directly.



*/

// @ abstract class
abstract class Product {
  constructor(public name: string, public price: number) {}
  log() {
    console.log(this.name, this.price)
  }
}

class Table extends Product {
  constructor(public name: string, public price: number, public legs: number) {
    super(name, price)
  }
  log() {
    console.log(this.name, this.price, this.legs)
  }
}

const table = new Table('Table', 400, 4)
table.log()

// const products = new Product('Table', 400) // @ cannot instantiate from an abstract class
