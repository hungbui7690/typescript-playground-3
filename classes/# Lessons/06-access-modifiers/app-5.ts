/*
  Constructor assignment
  - There is TypeScript syntax that allows us to create and initialize fields in a constructor concisely.


----------------

  - We can enforce class member access using the public, private, and protected accessors. It is important to be aware that it is TypeScript enforcing this access at development time and not at runtime.


*/

class Product {
  constructor(private name: string, private price: number) {} // @

  copy(name: string) {
    const copiedProduct = new Product(name, this.price)
    return copiedProduct
  }

  static equal(product1: Product, product2: Product) {
    return product1.name === product2.name && product1.price === product2.price
  }
}

const table1 = new Product('Table1', 300)
const table2 = table1.copy('Table2')

table1.price = 100
console.log(table1)
