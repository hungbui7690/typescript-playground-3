/*
  Advanced Concepts


-------------------

  The infer Keyword
  - Introduce new type variables within conditional types to capture and infer types.


-------------------

  - The <GetReturnType> type is a powerful TypeScript utility type that extracts the return type of a function. Here's how it works:

    + Generic Type: It’s a generic type, meaning it takes another type (T) as an argument.
    + Conditional Type: It employs a conditional type (T extends ... ? ... : ...) to check if the input type T is a function.
    + infer Keyword: If T is a function, the infer R mechanism is used to capture the function's return type into a new type variable R.
    + Return Value: Finally, GetReturnType<T> returns either R (the inferred return type) or never if T is not a function.



*/

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// Get the return types
type AddNumbersReturnType = GetReturnType<typeof addNumbers> // type will be 'number'
let num: AddNumbersReturnType = 123

type GreetUserReturnType = GetReturnType<typeof greetUser> // type will be 'string'
let s: GreetUserReturnType = 'hello'

type NeverType = GetReturnType<string> // type will be 'never'

function addNumbers(x: number, y: number): number {
  return x + y
}

function greetUser(name: string): string {
  return 'Hello, ' + name + '!'
}

let n: NeverType = null // ❌ Type 'null' is not assignable to type 'never'.
