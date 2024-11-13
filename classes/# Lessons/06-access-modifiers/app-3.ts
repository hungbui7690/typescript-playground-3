/*
  Private Members



*/

class Product {
  private name: string // @
  private price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

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

table1.price = 100 // ❌ because price is private and not accessible by the consumer of the class.
console.log(table1) // @ price is changed to 100 -> The check is a type check and doesn't occur at runtime.

// 🌲 TypeScript access modifiers don't take any effect on the code at runtime.
