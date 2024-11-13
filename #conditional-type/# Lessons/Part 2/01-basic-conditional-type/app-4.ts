/*
  Creating a basic conditional type



*/

type NullableString = string | null

type RemoveNull<T> = T extends null ? never : T

// @ NonNullable will remove <undefined> from a type as well as null.
type NonNullable<T> = T extends null | undefined ? never : T

let firstName: NonNullable<NullableString> // @
firstName = null
firstName = 'Bob'

console.log(firstName)

// 🌲 With the help of generics and the never type, conditional types allow utility types to be created that remove possible values from a type. This approach is heavily used within Typescript's standard utility types
