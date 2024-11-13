/*
  What are Conditional Types?
  - <TypeA> <extends> <TypeB> ? <TrueType> : <FalseType>


--------------

  Extracting Array Element Types



*/

type Flatten<T> = T extends any[] ? T[number] : T // T[number] will return type of T array element

type Flattened1 = Flatten<string[]> // Type is 'string'
let flattened1: Flattened1 = 'hello'

type Flattened2 = Flatten<number> // Type is 'number'
let flattened2: Flattened2 = 123

// Conditional Type: It checks a type T and provides different results based on whether T meets a certain condition.
// Condition: T extends any[] -> checks if the provided type T is an array (or more accurately, if it can be assigned to the any[] type).
// True -> T[number] -> If T is an array, the Flatten type becomes T[number]. Arrays in TypeScript are indexed by numbers, so this is extracting the element type of the array.
// False -> T -> If T is not an array, the type remains unchanged.
