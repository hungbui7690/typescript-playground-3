/*
  Constraints
  - For example, you can define a generic function that takes two parameters of different types and returns a merged object of those types. You can apply constraints to ensure that the types being merged have specific properties or meet certain conditions.


*/

function merge<U extends { name: string }, V extends { age: number }>(
  obj1: U,
  obj2: V
) {
  return { ...obj1, ...obj2 }
}

const person = { name: 'John' }
const age = { age: 25 }
const result = merge(person, age) // Output: { name: 'John', age: 25 }
