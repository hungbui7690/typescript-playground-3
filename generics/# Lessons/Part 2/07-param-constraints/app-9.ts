/*
  Constraint using <keyof>
  - You can use the keyof operator to specify a constraint on a generic type parameter. The keyof operator allows you to extract the keys from a given type and use them as constraints when defining a generic function or class.



*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const person = {
  name: 'John',
  age: 25,
  city: 'New York',
}

const nameZ = getProperty(person, 'name') // 'John'
const age = getProperty(person, 'age') // 25
const city = getProperty(person, 'city') // 'New York'

// const invalidKey = getProperty(person, 'email') // ❌ Error
