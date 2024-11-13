/*
  Challenge
  - can you write a utility type IsUnknown<T> which evaluates to true if T is unknown and false otherwise?


*/

type IsAny<T> = 0 extends 1 & T ? true : false
type IsUnknown<T> = IsAny<T> extends true
  ? false
  : unknown extends T
  ? true
  : false
