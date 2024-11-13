/*
  Creating a basic conditional type



*/

type NullableString = string | null

let firstName: NullableString
firstName = null
firstName = 'Bob'

console.log(firstName)
