/*
  Spreading generic tuple parameters to narrow the return type
  - The spread syntax can be used on a generic tuple type using three dots (...). We are going to use this feature to narrow the return type of merge.



*/

// We have added a generic parameter type called Names that is an array of strings, and a generic parameter type called Scores that is an array of numbers. These types are used in the type annotations for the name and scores function parameters.
function merge<Names extends string[], Scores extends number[]>(
  names: Names,
  scores: Scores
) {
  return [...names, ...scores]
}
// Inferred type of scores is (string | number)[]
// So, this hasn't narrowed the type as required.
