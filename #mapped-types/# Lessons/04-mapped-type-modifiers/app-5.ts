/*
  Using mapped type modifiers



*/

type Contact = {
  name: string
  email?: string
  age?: number
}

// 🍖
// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };

type RequiredProperties<T> = {
  [K in keyof T]-?: T[K] // ❎ T[K]
}

const bob: RequiredProperties<Contact> = {
  name: 'Bob',
  email: 'bob@someemail.com',
  age: 30, // ❎
}

console.log(bob)

// 🌲 We have changed the key type from string to T[K]. This gets the corresponding type from the type being mapped from. It is called a lookup type or sometimes an indexed access type.
