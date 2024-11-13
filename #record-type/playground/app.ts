/*
  Using an Enum for Keys


-------------------

  - The record type is a powerful tool in your TypeScript arsenal. 
  - By leveraging it, you can create well-defined, type-safe objects that make your code more maintainable, readable, and less prone to errors. 
  - So, next time you’re working with objects in TypeScript, consider harnessing the power of record types to bring order to your object zoo!



*/

enum ProductStatus {
  Available,
  OutOfStock,
  Discontinued,
}

const productInventory: Record<ProductStatus, number> = {
  [ProductStatus.Available]: 100,
  [ProductStatus.OutOfStock]: 0,
  [ProductStatus.Discontinued]: 10,
}

// Here, we create an enum called ProductStatus to define the possible values for our object's keys. This ensures type safety and makes the code more readable.
