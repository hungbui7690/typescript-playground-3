/*
  Never Type



*/

// Inferred return type: void -> we can fix by adding the return type: never
function failDeclaration(message: string) {
  throw new Error(message)
}

// Inferred return type: never
const failExpression = function (message: string) {
  throw new Error(message)
}
