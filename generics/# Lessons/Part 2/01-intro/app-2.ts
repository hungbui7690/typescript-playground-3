/*
  Intro



*/

// We can use the Promise generic type to specify the return type for asynchronous code. We specify the type of the item that is eventually returned in the generic parameter.
const promisedResponse: Promise<Response> = fetch('https://swapi.dev/api/')
// The code uses the Promise generic type to strongly-type what is returned from the fetch function.

promisedResponse.then((res) => console.log(res.ok)) // Let's use the then method in promisedResponse to handle the response when the promise has been resolved. Type the code out rather than copying and pasting and notice the intellisense the editor provides.

// 🌲 What has TypeScript inferred the type of the res parameter to be?
// - The type of res has been inferred to be Response
