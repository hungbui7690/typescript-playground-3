/*
  Method overloading
  - Method overloading is where a single method can have multiple signatures but still be strongly-typed.
    # logger.log("An important message");
    # logger.log("An important message in the orders module", <"Orders">);


-----------------

  Syntax
    methodName(params1): returnType1
    methodName(params2): returnType2
    methodName(params3): returnType3 // implementation signature
    {
      -> implementation
    }



*/

// Single Product
class Product {
  constructor(public name: string, public price: number) {}
}

// Multiple Products
class Products {
  private products: Product[] = []
  add(product: Product) {
    this.products.push(product)
  }

  // @ method overloading
  filter(name: string): Product[]
  filter(name: string, price: number): Product[]
  filter(name: string, price?: number): Product[] {
    if (price === undefined) {
      return this.products.filter((product) => product.name === name)
    } else {
      return this.products.filter(
        (product) => product.name === name && product.price === price
      )
    }
  }
}

const products = new Products()
products.add(new Product('Table', 400))
products.add(new Product('Chair', 100))
products.add(new Product('Lamp', 30))

// @ intellisence will suggest the method overloading
console.log(products.filter('Table', 400))
