/*
  Type Intersection



*/

type BaseElement = {
  name: string
  kind: 'text' | 'number' | 'email' // @
}

type TextInput = {
  kind: 'text' // @ common member
}

type Field = BaseElement & TextInput

const age: Field = {
  name: 'Age',
  kind: 'number', // ❌ The problem is that the type of the kind property in Field is 'text'. This is because the type of kind in BaseElement and TextInput are intersected to get 'text'. So, setting kind in age to 'number' raises a type error.
}

// ❎ both type aliases has the same common member (kind: string literal) -> will choose the second one
