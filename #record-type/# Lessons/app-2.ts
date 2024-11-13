/*
  Union Types for Keys and Values
  - Here’s an example where keys are fruit names, values are colors, and both key and value types are unions



*/

type Fruit = 'banana' | 'apple' | 'orange'
type Color = 'yellow' | 'red' | 'orange' | 'green'

const fruitColors: Record<Fruit, Color> = {
  banana: 'yellow',
  apple: 'red', // ❎ Could also be 'green' for certain types of apples
  orange: 'orange',
}

fruitColors.apple = 'green' // Valid Assignments

// Invalid Assignments (TypeScript will catch these):
fruitColors.pear = 'yellow' // ❌ pear is not a valid Fruit
fruitColors.banana = 'blue' // ❌ blue is not a valid Color
