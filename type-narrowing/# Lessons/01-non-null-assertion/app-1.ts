/*
  Non-null assertion



*/

function duplicate(text: string | null) {
  let fixString = function () {
    if (text === null || text === undefined) {
      text = ''
    }
  }
  fixString()

  return text.concat(text) // text here is '' -> but not null or undefined -> since it go through the fixString()
}

console.log(duplicate('hello'))

/*
  So, this is a case where we know more about the code than TypeScript does. We can, of course, use a type assertion to resolve the type error. However, the non-null assertion operator is a more concise solution to type errors that involve null or undefined.

  It is worth noting that if the code were more straightforward, then TypeScript would understand that text on the return statement wasn't null.
*/
