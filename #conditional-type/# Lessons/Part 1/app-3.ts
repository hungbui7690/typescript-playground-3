/*
  What are Conditional Types?
  - <TypeA> <extends> <TypeB> ? <TrueType> : <FalseType>


--------------

  Why Use Conditional Types?
  - Type Inference with Precision: Conditional types allow TypeScript to infer and narrow down types more accurately within your codebase. This enhanced inference reduces the need for manual type annotations while making your code more self-documenting.
  - Reusable Type Logic: You can encapsulate reusable type transformation logic within conditional types, promoting cleaner code and minimizing repetition.
  - Flexible APIs: Conditional types let you design APIs that offer different return types or behaviors depending on the input types. This leads to more versatile functions and components.



*/

type NonNull<T> = T extends null | undefined ? never : T

let nonNullValue1: NonNull<string | null> = 'hello' // string
let nonNullValue2: NonNull<string | null> = null // ❌ Type 'null' is not assignable to type 'string'.
