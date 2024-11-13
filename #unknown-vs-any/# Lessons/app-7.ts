/*
  unknown
  - An unknown type variable, same as any, accepts any value. But when trying to use the unknown variable, TypeScript enforces a type check. Exactly what you need!



*/

function invokeAnything(callback: unknown) {
  // You need to perform type checking before using a variable of type unknown. In the example, you would simply need to check if callback is a function type:
  if (typeof callback === 'function') {
    callback()
  }
}

invokeAnything(1)

// Having added typeof callback === 'function' check, you can safely invoke callback() because unknown has narrowed to Function type. No type errors and no runtime errors! Great!
