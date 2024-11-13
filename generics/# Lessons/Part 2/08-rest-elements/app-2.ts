/*
  Generic rest elements with tuple types



*/

type NameAndThings<T extends unknown[]> = [name: string, ...things: T]

let billGrades: NameAndThings<('A' | 'B' | 'C')[]>
billGrades = ['Bill', 'A', 'A', 'C']
// billGrades = ['Bill', 'A', 'D', 'C'] // ❌ Error -> because 'D' is outside the type for the grade elements in the tuple. A grade can only be 'A', 'B', or 'C'.
