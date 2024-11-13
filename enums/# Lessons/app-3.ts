/*
  Enums



*/

enum Level {
  Low,
  Medium,
  High,
}

let level: Level
// level = 5 // ❌ in TypeScript 5+, a type error occurs. In prior TypeScript versions, numeric enums accept any numeric value.
