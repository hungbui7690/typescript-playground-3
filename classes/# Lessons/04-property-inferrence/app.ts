/*
  Property inference from constructors



*/

class Product {
  // @ Let's remove the type annotations on the property -> TS will infer the types on these properties
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
}

const table1 = new Product('Table1', 300)
const table2 = table1.copy('Table2')
