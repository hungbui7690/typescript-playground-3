/*
  Tuples
  - A tuple can be thought of as an array with a fixed number of elements. Some of the hooks in React return tuples.
    -> useState hook
  - Tuples are useful when we want to store multiple bits of data. Tuples are a little more concise than an object but aren't as self-documenting as objects. So, tuples are nice for small and obvious data structures.
  - The tuple type doesn't exist in JavaScript. The closest we have are arrays, but there is no way of enforcing the number of elements and each element's type.




*/

const tomScore = ['Tom', 70]

// ❌ We want tomScore to only have two array elements with the first being a string and the second being a number. Has TypeScript inferred an appropriate type for this.
// - Unfortunately not, the type is (string | number)[]. So, the array can hold more than two elements
