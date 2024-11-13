/*
  any


*/

function invokeAnything(callback: any) {
  callback()
}

invokeAnything(1)

// Because callback param is of any type, the statement callback() won't trigger type errors. You can do anything with a variable of type any.
// But running the script throws a runtime error: TypeError: callback is not a function. 1 is a number and cannot be invoked as a function — and TypeScript hasn't protected you from this error!
// How to allow invokeAnything() function to accept any kind of argument, but force a type check on that argument, for example, if invoking it as a function?
