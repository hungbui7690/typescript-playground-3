/*
  Type Intersection


*/

type A = {
  fn: (a: string) => void
}
type B = {
  fn: (a: string, b: string) => void
}

type A_and_B = A & B

const ab_v1: A_and_B = {
  fn: (a: string) => {}, // @
}

const ab_v2: A_and_B = {
  fn: (a: string, b: string) => {}, // ❌ The parameters of a common function member of an intersection type are mathematically intersected.
}
