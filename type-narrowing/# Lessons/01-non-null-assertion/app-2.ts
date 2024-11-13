/*
  Non-null assertion



*/

function duplicate(text: string | null) {
  // or we can do this
  if (text === null || text === undefined) {
    text = ''
  }
  return text.concat(text)
}

console.log(duplicate('hello'))
