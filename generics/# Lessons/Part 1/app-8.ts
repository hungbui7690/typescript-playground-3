/*
  Inferring Types
  - TypeScript can often infer types within generics, reducing verbosity



*/

function createTuple<T, U>(first: T, second: U): [T, U] {
  return [first, second]
}

const stringNumTuple = createTuple('Hello', 42) // Type is inferred as [string, number]
