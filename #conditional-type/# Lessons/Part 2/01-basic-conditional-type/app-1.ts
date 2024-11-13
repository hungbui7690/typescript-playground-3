/*
  Creating a basic conditional type
  - T1 extends T2 ? A : B
    -> If T2 is within T1 then type A is used; otherwise, type B is used.


*/

type Person = {
  name: string
  age: number
}

type Example1 = Person extends {} ? string : number

// 🍖 Conditional types aren't very useful on their own but are extremely useful in generic types. A common use case is to use a conditional type with the never type to prune values from a type.
