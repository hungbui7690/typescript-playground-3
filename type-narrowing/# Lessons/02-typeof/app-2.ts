/*
  typeof
  - typeof is a JavaScript operator that returns a string indicating the JavaScript type of the operand.


*/

function double(item: string | number) {
  if (typeof item === 'string') {
    return item.concat(item)
  } else {
    return item + item
  }
}

// 🌲 So, TypeScript has cleverly narrowed the type of item in the branches of logic following the typeof check. This is called a typeof type guard and is useful on variables or expressions with primitive types.
// - TypeScript can narrow the type of a variable following an if statement that uses a typeof check. This approach is useful when checking against primitive types.
