/*
  String literal union types
  - Specific string values can be unioned together to form what is called string literal union types.



*/

// String literal union types are beneficial when you want a more specific and narrower type than string.
type Fruit = 'Banana' | 'Apple' | 'Pear'

let fruit: Fruit
fruit = 'Apple'
fruit = 'Pear'
// fruit = 'strawberry' // ❌
