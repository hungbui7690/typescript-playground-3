/*
  Record<K,V>
  - https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
  - Generic types can have multiple parameters



*/

type Result = {
  firstName: string
  surname: string
  score: number
}

// "key" is String -> "value" is Result
type ResultRecord = Record<string, Result> // @ Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

const records: ResultRecord = {
  rodj: {
    firstName: 'Rod',
    surname: 'James',
    score: 70,
  },
  janes: {
    firstName: 'Jane',
    surname: 'Smith',
    score: 95,
  },
  fredp: {
    firstName: 'Fred',
    surname: 'Peters',
    score: 60,
  },
}

console.log(records)
