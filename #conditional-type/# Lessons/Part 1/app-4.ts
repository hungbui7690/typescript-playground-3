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
