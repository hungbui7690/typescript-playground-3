/*
  Classes



*/

// In TypeScript, if strict mode is on, fields must be given an initial value or be optional
class Product {
  name?: string
  price?: number
}

const table1 = new Product()
table1.name = 'Table1'
table1.price = '$300' // a type error is raised on the price field assignment because it is not a number. The price field should be: table1.price = 300
