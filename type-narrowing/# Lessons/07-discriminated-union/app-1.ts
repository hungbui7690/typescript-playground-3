/*
  Discriminated union pattern



*/

// 1. The first part of the pattern is to have a common singleton type property. A singleton type is one that contains only a single value. An example of a singleton type is a string literal. This part of the pattern is called the discriminant:
type Type1 = {
  commonName: 'value1'
}

type Type2 = {
  commonName: 'value2'
}

type TypeN = {
  commonName: 'valueN'
}

// 2. The second part of the pattern is to have a union type of all the singleton types used. This part of the pattern is called the union:
type UnionType = Type1 | Type2 | TypeN

// 3. The final part of the pattern is to have type guards on the common property which narrows the union type:
function doSomething(param: UnionType) {
  switch (param.commonName) {
    case 'value1':
      // type narrowed to Type1
      break
    case 'value2':
      // type narrowed to Type2
      break
    case 'valueN':
      // type narrowed to TypeN
      break
  }
}
