/*
  any: Flexibility at the Cost of Safety
  - ‘any’ is essentially an escape hatch from TypeScript’s type checking. 
  - It allows a variable to hold a value of absolutely any type — number, string, object, you name it.


----------------

  When to Use
  - Migrating a JavaScript project to TypeScript gradually

  - Working with 3rd party libraries that don’t have type definitions

  - Prototyping where types are not yet fully defined

  - The Dangers of ‘any’: Using ‘any’ disables much of TypeScript’s benefits because it can lead to runtime errors that compile-time checks might have caught. You lose type safety and the compiler can’t help you much. Think of ‘any’ as a last resort.



*/

let something: any = 42
something = 'Hello' // No problem with TypeScript
something.someMethod() // This could crash at runtime if 'something' isn't an object with a 'someMethod'
