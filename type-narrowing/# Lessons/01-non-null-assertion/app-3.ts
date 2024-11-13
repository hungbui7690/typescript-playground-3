/*
  Non-null assertion operator syntax
  - The non-null assertion operator is an exclamation mark (!), and this is placed after the variable or expression that we want to tell TypeScript isn't null or undefined.


---------------------

  - The non-null assertion operator is a concise way of avoiding unnecessary null and undefined checks in our code. We should only use this when we definitely know the variable or expression can't be null or undefined.



*/

function duplicate(text: string | null) {
  if (text === null || text === undefined) {
    text = ''
  }
  return text!.concat(text!) // @ text!
}

console.log(duplicate('hello'))
