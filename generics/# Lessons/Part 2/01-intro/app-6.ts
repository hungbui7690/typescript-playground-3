/*
  Passing multiple generics



*/

function mergeArrays<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
  return [...arr1, ...arr2]
}

const numArray = [1, 2, 3]
const strArray = ['hello', 'world']

const mergedArray = mergeArrays<number, string>(numArray, strArray) // explicit
const mergedArray2 = mergeArrays(numArray, strArray) // implicit

console.log(mergedArray) // [1, 2, 3, "hello", "world"]
