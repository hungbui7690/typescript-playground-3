/*
  keyof
  - JS -> Object.keys
  - TS -> keyof

  🌲 Although they are similar, <keyof> only works on the type level and returns a literal union type, while <Object.keys> returns values.


------------------

  - <keyof> operator is used so frequently that it has become a building block for advanced typing in TS. In this article, we will examine the keyof operator and how it is commonly used with other TS features to achieve better type safety with TS generics, TS mapped types, and TS string literal types.


------------------

  Defining the keyof operator
  - The <keyof> operator takes an object type and produces a string or numeric literal union of its keys.


*/

type Staff = {
  name: string
  salary: number
}

// A simple usage is shown below. We apply the keyof operator to the Staff type, and we get a staffKeys type in return, which represents all the property names.
type staffKeys = keyof Staff // "name" | "salary" -> return union
