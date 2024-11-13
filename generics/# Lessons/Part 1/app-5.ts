/*
  Type Constraints
  - Sometimes, you need to ensure that the types used with your generics have certain properties or methods. Type constraints help you achieve that.



*/

function getProperty<T extends { name: string }, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key]
}

const person = { name: 'Alice', age: 30 }
let personName = getProperty(person, 'name')
let personId = getProperty(person, 'id') // ❌ Argument of type '"id"' is not assignable to parameter of type '"name" | "age"'.
