/*
  Object union types


------------------

  String literal unions v string enums
  - String literal unions are like string enums in that they create a narrow type of specific strings. 
  - If the strings are meaningful and don't need to be mapped to something more meaningful, then a string literal union is a concise way of creating the type. 
  - String enums are useful when the meaning of string value isn't apparent because it can be given a meaningful name to help the readability of the code.



*/

type Actions = { type: 'loading' } | { type: 'loaded'; data: { name: string } }

const loadingAction: Actions = { type: 'loading' }
