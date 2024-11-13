/*
  Implementing constructors
  - We are going to force the product's name and price to be specified when it is instantiated.



*/

class Product {
  name: string
  price: number

  // @
  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  copy(name: string) {
    const copiedProduct = new Product(name, this.price) // @
    return copiedProduct
  }
}

const table1 = new Product('Table1', 300) // @
const table2 = table1.copy('Table2')
