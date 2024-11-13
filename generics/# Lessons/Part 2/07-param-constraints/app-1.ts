/*
  Generic Parameter Constraints
  - It is possible to require generic parameters to have a particular structure
    -> <T extends ContrainingType>


*/

interface Logable {
  log: () => void
}

function logItems<T>(items: T[]): void {
  items.forEach((item) => item.log())
}

// ❌ The logItems function contains a type error where it references item.log. Why is this so?
// - TypeScript doesn't know that the array items contain a log method, so, it raises an error.
