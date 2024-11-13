/*
  Creating a basic conditional type



*/

type NullableString = string | null

// @
type RemoveNull<T> = T extends null ? never : T

// @ The RemoveNull type removes null from the NullableString type, so firstName can no longer hold a null value.
let firstName: RemoveNull<NullableString>
firstName = null
firstName = 'Bob'

console.log(firstName)
