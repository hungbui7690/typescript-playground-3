/*
  Type Predicates
  - Type Predicate Functions are functions that "return a boolean value" and have a "particular return type" syntax. 
  - A type predicate is a type assertion that checks if an object has a specific property or set of properties. This allows TypeScript to narrow (or refine) the type of an object based on the result of the function.



*/

type Address = { postalCode: string; country: string }
type User = { name: string; address: Address | undefined }

// @ The next example is identical to the previous one, but with one small difference. We've changed isAddress's return type from boolean to "address is Address". With that change, isAddress becomes a type predicate. Now it works as a type guard!
function isAddress(address: Address | undefined): address is Address {
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

// 🌲 The only new part here is the address is Address in place of a return value. That's the type predicate: it lets our function serve as a type guard.
// 🍖 You can think of address is Address in the return type as answering the question: "is address a Address?" If isAddress(...) returns true, it tells the compiler that address has the type Address from then on. If it returns false, the types stay the same.
// 🍉 Where does the term "type predicate" come from? In general, a predicate ("preh-dih-kit") function is any function that returns a boolean. Type predicates are predicate functions that also change their arguments' static types.

// @ Returning to our example, the upgraded isAddress still works as a regular boolean function:
isAddress({ postalCode: '75010', country: 'France' })
