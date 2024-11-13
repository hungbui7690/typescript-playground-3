/*
  What is the Record Type?
  - The Record type in TypeScript allows you to define objects with a fixed set of keys and a specific type for both the keys and the values. 
  - Think of it as a blueprint for your objects, ensuring consistency and catching errors early on. 


----------------------

  Record<Keys, Type>
  - Keys: 
    + This represents the type of the object's keys. 
    + It can be a string, number, symbol, or even another type!
  - Type: 
    + This defines the type of the object's values. 
    + Numbers, strings, booleans, or even custom types can be used here.


----------------------

  Why Use Record Types?
  - There are several reasons to embrace record types:

    # Type Safety: By specifying key and value types, you prevent unexpected data types from sneaking into your objects. This leads to fewer runtime errors and a more predictable codebase.

    # Improved Readability: Record types make your code more self-documenting. Anyone looking at your code can instantly understand the structure and expected data types of your objects.

    # Better Maintainability: Refactoring code with record types is a breeze. Changes to the object structure or types are clear and easy to track.



*/

// This code defines a person object with keys of type string & values of type number. TypeScript will prevent you from accidentally assigning a non-string key or a non-number value.
const person: Record<string, number> = {
  age: 30,
  height: 180,
}

person.salary = 5000 // This is okay, salary is a string.
person.name = 'John' // ❌ "John" is not a number
