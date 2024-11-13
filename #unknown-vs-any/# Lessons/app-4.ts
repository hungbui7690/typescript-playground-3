/*
  never: Representing the Impossible
  - The ‘never’ type signifies a value that will never occur


----------------

  When to Use
  - Functions that never return (e.g., throw an exception, loop infinitely)
  - Exhaustive checking in switch/case statements to ensure all cases are handled


----------------

  Key Takeaways
  - Strive to avoid ‘any’ whenever possible. It leads to less maintainable code over time.
  - ‘unknown’ provides type safety when dealing with unpredictable data sources.
  - ‘never’ helps signal impossible states and enforces exhaustive checks.

    => By understanding and applying ‘any’, ‘unknown’, and ‘never’ strategically, you’ll write far more robust and reliable TypeScript code.



*/

type Color = 'red' | 'blue' | 'green'

function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here")
}

function f(c: Color): number {
  switch (c) {
    case 'red':
      return 1
    case 'blue':
      return 2
    case 'green':
      return 3
    default:
      assertUnreachable(c)
  }
}

console.log(f('blue'))
