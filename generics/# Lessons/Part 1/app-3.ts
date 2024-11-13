/*
  Generic Interfaces



*/

interface KeyValuePair<K, V> {
  key: K
  value: V
}

let numPair: KeyValuePair<number, number> = { key: 1, value: 10 }
let stringPair: KeyValuePair<string, boolean> = { key: 'active', value: true }
