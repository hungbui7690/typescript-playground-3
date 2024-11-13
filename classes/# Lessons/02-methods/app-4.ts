/*
  Implementing methods



*/

class Product {
  name?: string
  price?: number

  // The method's name parameter isn't strongly-typed yet. Add a type annotation to ensure this is a string.
  copy(name) {
    const copiedProduct = new Product()
    copiedProduct.name = name
    copiedProduct.price = this.price
    return copiedProduct
  }
}

const table1 = new Product()
table1.name = 'Table1'
table1.price = 300
