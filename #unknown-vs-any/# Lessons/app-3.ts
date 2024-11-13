/*
  never: Representing the Impossible
  - The ‘never’ type signifies a value that will never occur


----------------

  When to Use
  - Functions that never return (e.g., throw an exception, loop infinitely)
  - Exhaustive checking in switch/case statements to ensure all cases are handled



*/

function keepProcessing(): never {
  while (true) {
    console.log('I always does something and never ends.')
  }
}
