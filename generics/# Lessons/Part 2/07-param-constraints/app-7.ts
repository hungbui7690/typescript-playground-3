/*
  Apply Constraints on Generics
  - In TypeScript, generic constraints allow you to apply constraints on the types that can be passed as arguments to a generic function or used as type parameters in a generic class or interface.
  - By using generic constraints, you can ensure that a type parameter satisfies certain conditions or has specific properties. This can be useful when you want to restrict the types that can be used with a generic function or class to only those that meet certain criteria.



*/

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

let result = loggingIdentity('hello')
console.log(result)

// 🌲 In this example, the loggingIdentity function takes a type parameter T that must extend the Lengthwise interface, which ensures that arg has a length property. This constraint allows accessing the length property without causing a compilation error.
