/*
  Conditional Types
  - Conditional types provide dynamic type transformations based on conditions



*/

type NonNullableX<T> = T extends null | undefined ? never : T

// if(string extends null | undefined) -> then never -> else string
type T1 = NonNullableX<string> // string
type T2 = NonNullableX<null> // never
