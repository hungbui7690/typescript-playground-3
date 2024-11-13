/*
  Spreading generic tuple parameters
  - narrow the return type down



*/

function merge(names: string[], scores: number[]) {
  return [...names, ...scores]
}

let scores = merge(['Bill', 'Jane'], [8, 9]) // (string | number)[]

// 🌲 A more strongly-typed return type would be [string, string, number, number] or better still ["Bill", "Jane", 8, 9].
