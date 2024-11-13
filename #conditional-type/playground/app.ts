/*
  Advanced Concepts


-------------------

  Distributive Conditional Types
  - Distributive conditional types in TypeScript apply a conditional type check to each member of a union type individually. 
  - The result of the conditional type is then formed into a new union. In a nutshell, they “distribute” over union types.


-------------------

  - BoxedValue<T>: This conditional type takes a generic type T. If T is any type (any), it returns an object { value: T } (wrapping the value in a box). Otherwise, it returns never.
    # BoxedValues: We have a union type number | string. Due to the distributive nature of the conditional type, BoxedValue is applied to each member of the union:
      + BoxedValue<number> -> { value: number }
      + BoxedValue<string> -> { value: string }



*/

type BoxedValue<T> = T extends any ? { value: T } : never

// BoxedValue<number | string > = { value: string; } | { value: number; }
let value1: BoxedValue<number | string> = { value: 123 }
let value2: BoxedValue<number | string> = { value: 'hello' }

// Error: Type 'number' is not assignable to type '{ value: string; } | { value: number; }'
let value3: BoxedValue<number | string> = 456
