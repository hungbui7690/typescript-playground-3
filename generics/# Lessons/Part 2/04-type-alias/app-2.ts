/*
  Using generics with types



*/

// @ type instead of interface
type MetaData = {
  sex: string
  height: 'tall' | 'short'
  favouriteNumber: number
}

// @
type Person<T> = {
  id: number
  name: string
  age: number
  metadata: T
}

const personOne: Person<(number | string)[]> = {
  id: 1,
  name: 'Jeff',
  age: 31,
  metadata: ['male', 'tall', 22],
}

const personTwo: Person<MetaData> = {
  id: 2,
  name: 'Jess',
  age: 28,
  metadata: {
    sex: 'female',
    height: 'tall',
    favouriteNumber: 45,
  },
}
