/*
  Generic Functions



*/

interface MetaData {
  sex: string
  height: 'tall' | 'short'
  favouriteNumber: number
}

// Define a generic interface
interface Person<T> {
  id: number
  name: string
  age: number
  metadata: T // @
}

// @ Using our generic
const personOne: Person<(number | string)[]> = {
  id: 1,
  name: 'Jeff',
  age: 31,
  metadata: ['male', 'tall', 22],
}

// @ Using our generic
const personTwo: Person<MetaData> = {
  id: 1,
  name: 'Jeff',
  age: 31,
  metadata: {
    sex: 'female',
    height: 'tall',
    favouriteNumber: 45,
  },
}
