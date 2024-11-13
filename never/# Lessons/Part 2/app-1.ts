/*
  Never Type
  - The never type in TypeScript is a special type that represents values that can "never be reached". 
  - This type is typically used to "represent errors or exceptions".


------------------

  - In TypeScript, never is an empty set of values. In fact, in <Flow>, another popular JavaScript type system, the equivalent type is called exactly empty
  - Since there’s no values in the set, never type can never (pun-intended) have any value, including values of any type. That’s why never is also sometimes referred to as an uninhabitable type or a bottom type.


------------------

  🌲 <void> is when the function returns without a value. 
    <never> -> the function never returns.



*/

// string and number are mutually exclusive. In other words, a value cannot be both a string and a number simultaneously.
type Alphanumeric = string & number // never -> not possible

// Following function will always throw an error, so its return type is never:
function raiseError(message: string): never {
  throw new Error(message)
}

// Following function will always throw an error, so its return type is never:
function divideByZero(x: number) {
  return x / 0
}

// The never type can also be used to represent values that are unreachable in a particular context. For example, the following code will never be executed, so the type of the b variable is never:
if (true) {
  let a = 1
} else {
  let b = a // b has type never
}

// If you have a function that contains an indefinite loop, its return type should be never. For example:
function infiniteLoop(): never {
  while (true) {
    // Code that never exits
  }
}
