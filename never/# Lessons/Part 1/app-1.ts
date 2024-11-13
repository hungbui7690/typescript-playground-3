/*
  never


*/

// The return type is never
const keepLogging = (message: string) => {
  while (true) {
    console.log(message)
  }
}

// Why isn't the return type void?
// <void> is when the function returns without a value. In this example, the function <never> returns.
