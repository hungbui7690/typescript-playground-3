/*
  keyof
  - extract the keys from an object in a type annotation.
  - The keyof operator is sometimes referred to as the index query operator because it queries the type specified after it.  
  - When TypeScript sees the keyof operator in a type annotation, it queries the type after it and extracts all its keys. 
  - It then constructs a union string literal type from the keys.


-------------------

  - The keyof type annotation can be used to extract the keys from an object. This is a key ingredient for creating mapped types which we will explore in the next lesson.


*/

type ContactDetails = {
  name: string
  email: string
  mobile: string
}

let keys: keyof ContactDetails
// The type of keys is 'name' | 'email' | 'mobile'. Note that in recent versions of TypeScript, when you hover over keys, the type will be printed as keyof ContactDetails.
