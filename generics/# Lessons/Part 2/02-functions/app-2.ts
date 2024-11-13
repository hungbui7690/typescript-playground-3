/*
  Generic function
  - You will often see names T and S used for the type parameters in TypeScript code. Here are some of the common names that are used and what they are used for:
      T (for "T"ype)
      S (for "S"ate)
      E (for "E"lement)
      K (for "K"ey)
      V (for "V"alue)


*/

// We define the type parameters for a generic function in angled-brackets before the function's parentheses:
// The type parameters are placeholders for the real types. We can choose any names we want for these. These type parameter names can then be referenced within the function implementation.
function firstOrNull<T>(array: T[]): T | null {
  return array.length === 0 ? null : array[0]
}

firstOrNull(['Rod', 'Jane', 'Fred']) // implicit type inference
firstOrNull<number>([1, 2, 3]) // explicit
