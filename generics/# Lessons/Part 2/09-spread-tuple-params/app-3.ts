/*
  Spreading generic tuple parameters to narrow the return type




*/

// We have spread the generic type parameters in the function parameter type annotations.
function merge<Names extends string[], Scores extends number[]>(
  names: [...Names],
  scores: [...Scores]
) {
  return [...names, ...scores]
}

let scores = merge(['Bill', 'Jane'], [8, 9]) // ('Bill' | 'Jane' | 8 | 9)[]
