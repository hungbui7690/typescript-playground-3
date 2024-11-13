/*
  Use Generics with Interfaces
  - Generics can also be used with interfaces to create flexible and reusable definitions. 


*/

interface Pair<T, U> {
  first: T
  second: U
}

let pair: Pair<number, string> = { first: 1, second: 'two' }
console.log(pair) // Output: { first: 1, second: "two" }

// 🌲 Here, Pair is an interface with two type parameters T and U, representing the types of the first and second properties respectively. When declaring pair as Pair<number, string>, it enforces that the first property must be a number, and the second property must be a string.
