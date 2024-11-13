/*
  Understanding the Fundamentals
  - At their core, generics allow you to introduce type parameters, much like function parameters. 
  - These type parameters are often named ‘T’ by convention. 
  - They serve as placeholders for the actual types that will be supplied when you utilize a generic component. 


------------------

  Benefits of Generics
  - Type Safety: Generics ensure that the types you work with are consistent throughout your code. This significantly reduces the likelihood of type-related errors.
  - Reusability: A single generic function or class can serve multiple purposes, eliminating redundant code for different data types.
  - Improved Readability: Using generics can make your code more self-documenting. Instead of deciphering specific types, the type variables convey the intended flexibility.



*/

function identity<T>(arg: T): T {
  return arg
}

let output1 = identity<string>('Hello, Generics!') // output1 is of type string
let output2 = identity<number>(42) // output2 is of type number

// The identity function takes an argument (arg) of type T and returns a value of the same type T. When you call it, you specify the concrete type within the angle brackets (<string>, <number>).
