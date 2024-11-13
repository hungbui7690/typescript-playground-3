/*
  Type Predicates
  - Type Predicate Functions are functions that "return a boolean value" and have a "particular return type" syntax. 
  - A type predicate is a type assertion that checks if an object has a specific property or set of properties. This allows TypeScript to narrow (or refine) the type of an object based on the result of the function.


------------------

  Problem



*/

type Address = { postalCode: string; country: string }
type User = { name: string; address: Address | undefined }

// @ without type predicate
function isAddress(address: Address | undefined): boolean {
  return address !== undefined
}

const amir: User = {
  name: 'Alex',
  address: { postalCode: '75010', country: 'France' },
}

let address: Address
if (isAddress(amir.address)) {
  address = amir.address // @ error here
} else {
  address = { postalCode: 'unknown', country: 'unknown' }
}

// 🌲 A regular boolean function like <isAddress> above doesn't act as a type guard. However, with one small change it can.
