/*
  Generic rest elements with tuple types



*/

type NameAndThings<T extends unknown[]> = [name: string, ...things: T]

let billGrades: NameAndThings<('A' | 'B' | 'C')[]>
billGrades = ['Bill', 'A', 'A', 'C']

// @
function logThings<T extends unknown[]>(name: string, ...things: T) {
  console.log(things)
}

logThings('Bob', 4, 9, 3)
logThings('Bob', 4, '9', 3) // TypeScript infers the generic parameter type to be [number, string, number].
// logThings<number[]>('Bob', 4, '9', 3) // ❌ Error -> because '9' is not a number type.
