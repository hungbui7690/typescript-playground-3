/*
  unknown
  - An unknown type variable, same as any, accepts any value. But when trying to use the unknown variable, TypeScript enforces a type check. Exactly what you need!



*/

function invokeAnything(callback: unknown) {
  callback() // ❌ 'callback' is of type 'unknown'
}

invokeAnything(1)

// Because the callback argument is of type unknown, the statement callback() has a type error Object is of type 'unknown'. Now, contrary to any, TypeScript protects you from invoking something that might not be a function!
