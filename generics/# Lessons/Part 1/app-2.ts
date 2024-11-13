/*
  Generic Functions



*/

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse()
}

let numbers = [1, 2, 3]
let reversedNumbers = reverseArray<number>(numbers)

let names = ['Alice', 'Bob', 'Charlie']
let reversedNames = reverseArray<string>(names)
