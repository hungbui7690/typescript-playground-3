/*
  Enums
  - Enum values can be string's if we explicitly define a string value after the name. 



*/

// @ change all values to string
enum Level {
  Low = 'L',
  Medium = 'M',
  High = 'H',
}

let level: Level
level = Level.High // ❎
// level = 'H' // ❌

// 🌲 String enum values are strongly-typed to the named values declared in the enum
