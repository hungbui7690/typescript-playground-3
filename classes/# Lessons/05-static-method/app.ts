/*
  Implementing static classes


--------------

  Classes v type aliases v interfaces
  - Classes create object structures like type aliases and interfaces do. A key difference is that a class contains method implementation, whereas type aliases and interfaces don't. Classes can also be instantiated and execute logic during this process. Type aliases and interfaces can't be instantiated because they only contain structural information.
  - So, a class is useful for representing an object blueprint that contains constructor and method implementation.



*/

class Product {
  name
  price

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  copy(name: string) {
    const copiedProduct = new Product(name, this.price)
    return copiedProduct
  }

  // @ We will enhance our Product to include a static method to check whether products are equal.
  static equal(product1: Product, product2: Product) {
    return product1.name === product2.name && product1.price === product2.price
  }
}

const table1 = new Product('Table1', 300)
const table2 = table1.copy('Table2')

console.log(Product.equal(table1, table2)) // @
