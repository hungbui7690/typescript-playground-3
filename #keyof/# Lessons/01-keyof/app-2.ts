/*
  Defining the <keyof> operator
  - It can also be used for non-object types, including primitive types. 



*/

type BooleanKeys = keyof boolean // "valueOf"

type NumberKeys = keyof number // "toString" | "valueOf" | "toFixed" | "toExponential" | "toPrecision" | "toLocaleString"

type SymbolKeys = keyof symbol
//typeof Symbol.toPrimitive | typeof Symbol.toStringTag | "toString" | "valueOf"

// 🌲 As shown in the above examples, it’s less useful when applied to primitive types.
