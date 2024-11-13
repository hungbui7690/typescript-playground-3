/*
  Enums



*/

// @ Level.High is 0, Level.Medium is 1 and Level.Low is 2
enum Level {
  Low,
  Medium,
  High,
}

let level: Level // @

level = Level.Low
console.log(level)

// 🌲 enum values are zero-based auto-incrementing numbers by default.
