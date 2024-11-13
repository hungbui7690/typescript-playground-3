/*
  Creating open-ended tuples
  - An open-ended tuple is where its items have some structure, but the number of elements isn't fixed. 
    -> use rest operator



*/

let benScores: [name: string, ...scores: number[]]
benScores = ['Ben', 50, 75, 85]

// We can specify the type for the above example as follows:
// 🌲 [string, ...number[]]
// 🍉 The ...number[] is a <rest> element, and it means that we can have a varying amount of number elements at the end of the structure.
// Notice the that the ... is placed before the label rather than the type.
