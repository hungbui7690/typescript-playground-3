/*
  Passing default types to generics


*/

// @ add default type
function firstOrNull<T = string>(array: T[]): T | null {
  return array.length === 0 ? null : array[0]
}

const first = firstOrNull([1, 2, 3]) // Generic parameters aren't required on functions. In this case, the parameter has been inferred to be number
console.log(first)
