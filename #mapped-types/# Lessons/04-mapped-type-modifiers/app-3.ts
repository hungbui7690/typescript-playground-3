/*
  Using mapped type modifiers



*/

type Contact = {
  name: string
  email?: string
}

type RequiredProperties<T> = {
  [K in keyof T]-?: string
}

const bob: RequiredProperties<Contact> = {
  name: 'Bob',
  email: 'bob@someemail.com', // @
}

console.log(bob)
