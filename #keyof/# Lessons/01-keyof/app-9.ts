/*
  Using <keyof> with TypeScript <mapped> types
  - A common use for the keyof operator is with mapped types, which transform existing types to new types by iterating through keys, often via the keyof operator.
  


*/

type OptionsFlags<T> = {
  [Property in keyof T]: boolean
}

type FeatureFlags = {
  darkMode: () => void
  newUserProfile: () => void
}

type FeatureOptions = OptionsFlags<FeatureFlags>
/*
  type FeatureOptions = {
    darkMode: boolean; 
    newUserProfile: boolean; 
  } 
*/

// 🌲 In this example, OptionsFlags is defined as a generic type that takes a type parameter T. [Property in keyof T] denotes the iteration of all property names of type T, and the square bracket is the index signature syntax. Thus, the OptionsFlags type contains all properties from the type T and remaps their value to Boolean.
