/*
  Generic rest elements with tuple types
  - type Scores = [string, ...number[]]
    -> As a reminder, a rest element type is a type for a collection of tuple elements



*/

// type NameAndThings<T extends unknown[]> = [string, ...T] // rest elements
type NameAndThings<T extends unknown[]> = [name: string, ...things: T] // add label -> name is string, things are tuple of type T

let bobScores: NameAndThings<number[]>
bobScores = ['Bob', 4, 9, 3]
// bobScores = ['Bob', 4, '9', 3] // ❌ Error -> because '9' is a string rather than a number which the type expects.
