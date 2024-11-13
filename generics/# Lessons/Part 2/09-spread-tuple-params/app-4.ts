/*
  Spreading generic tuple parameters to narrow the return type




*/

// Spread the returned type
function merge<Names extends string[], Scores extends number[]>(
  names: [...Names],
  scores: [...Scores]
): [...Names, ...Scores] {
  return [...names, ...scores]
}

let scores = merge(['Bill', 'Jane'], [8, 9]) // ['Bill', 'Jane', 8, 9]
