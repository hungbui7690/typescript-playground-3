/*
  Implementing methods



*/

class Product {
  name?: string
  price?: number

  // @
  copy(name: string) {
    const copiedProduct = new Product()
    copiedProduct.name = name
    copiedProduct.price = this.price
    return copiedProduct
  }
}

const table1 = new Product()
table1.name = 'Table1'
table1.price = 300

// @
const table2 = table1.copy('Table2')
