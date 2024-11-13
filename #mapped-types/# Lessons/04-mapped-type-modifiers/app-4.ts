/*
  Using mapped type modifiers



*/

type Contact = {
  name: string
  email?: string
  age?: number // @
}

type RequiredProperties<T> = {
  [K in keyof T]-?: string
}

const bob: RequiredProperties<Contact> = {
  name: 'Bob',
  email: 'bob@someemail.com',
  age: 30, // ❌ The mapped type gives all the keys a string type, but we have specified a number for age.
}

console.log(bob)
