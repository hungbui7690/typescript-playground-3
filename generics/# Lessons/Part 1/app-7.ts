/*
  Mapped Types
  - Mapped types let you create new types by transforming properties in existing types



*/

interface Person {
  name: string
  age: number
}

type ReadonlyPerson<T> = {
  readonly [P in keyof T]: T[P]
}

let readonlyPerson: ReadonlyPerson<Person> = { name: 'Bob', age: 25 }
readonlyPerson.name = 'Charlie' // ❌ Cannot assign to readonly property
