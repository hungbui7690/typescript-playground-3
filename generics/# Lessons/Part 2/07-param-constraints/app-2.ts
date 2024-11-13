/*
  Generic Parameter Constraints



*/

interface Logable {
  log: () => void
}

// Add a constraint to the generic parameter in logItems to ensure it has the same structure as the Logable interface.
function logItems<T extends Logable>(items: T[]): void {
  items.forEach((item) => item.log())
}
