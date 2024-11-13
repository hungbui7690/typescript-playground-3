/*
  Using <keyof> with TS generics
  


*/

type Staff = {
  name: string
  salary: number
}

// The keyof operator can be used to apply constraints in a generic function. The following function can retrieve the type of an object property using generics, an indexed access type, and the keyof operator:
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

/*
  If we are new to TypeScript, the above function may look complex. Let’s break it down:
  - <keyof> T returns a union of string literal types. The extends keyword is used to apply constraints to K, so that K is one of the string literal types only
  - <extends> means “is assignable” instead of “inherits”; K extends keyof T means that any value of type K can be assigned to the string literal union types
  - The indexed access operator obj[key] returns the same type that the property has

*/

// We can see how the getProperty type is used below:
const developer: Staff = {
  name: 'Tobias',
  salary: 100,
}

const nameType = getProperty(developer, 'name') // string
// const salaryType getProperty(developer, 'pay') // ❌ Cannot find name 'pay'.(2304)

// ❌ The compiler will validate the key to match one of the property names of type T because we apply the type constraint for the second parameter. In the above example, the compiler shows the error when an invalid key 'pay' is passed.

// If we don’t use the keyof operator, we can declare a union type manually:
// type staffKeys = 'name' | 'salary'
// function getProperty<T, K extends staffKeys>(obj: T, key: K): T[K] {
//   return obj[key]
// }
// ❌ The same type of constraint is applied, but the manual approach is less maintainable. Unlike the keyof operator approach, the type definition is duplicated, and the change of the original Staff type won’t be automatically propagated.
