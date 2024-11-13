/*
  <Object.keys> vs. <keyof> operator



*/

type User = {
  name: string
  age: number
}

const user: User = {
  name: 'John',
  age: 32,
}

console.log(Object.keys(user)) // ["name", "age"]

Object.keys(user).forEach((key) => {
  console.log(user[key]) // ❌ Error is shown
})

// 🌲 The error is because we tried to use the string type key to access the object with union type “name” | “age“
// 🍉 You might wonder why TypeScript doesn’t return typed keys as “name” | “age“. This is intentional.
// 🍖 In a nutshell, the strongly typed Object.keys is fine at compile time. But objects often have extra properties at runtime. If this is the case, Object.keys will return extra keys. Those extra keys will violate the assumption that keyof is an exhaustive list of the key of the object. This may cause the app to crash.
