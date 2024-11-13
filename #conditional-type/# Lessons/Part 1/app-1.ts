/*
  Conditional Types
  - <SomeType> <extends> <OtherType> ? <TrueType> : <FalseType>
    -> If a given type SomeType extends another given type OtherType, then ConditionalType is TrueType, otherwise it is FalseType.



*/

/*
  if (T extends string[])
    then string
  else:
    if(T extends number[])
      then number
    else never
*/
type Recursive<T> = T extends string[]
  ? string
  : T extends number[]
  ? number
  : never

const a: Recursive<string[]> = '10' // works
const b: Recursive<string> = 10 // ❌ Type 'number' is not assignable to type 'never'.
