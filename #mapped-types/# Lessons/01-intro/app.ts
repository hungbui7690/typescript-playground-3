/*
  Mapped Types
  - Mapped types allow us to create new types from existing types. We can think of a mapped type as the array <map> function, but it maps types rather than values.


  
*/

// Mapped types help us keep our types more maintainable. Consider the function below that updates an object holding information about a person:
type Person = {
  name: string
  dob: Date
}

type PersonUpdate = {
  name?: string
  dob?: Date
}

function updatePerson(person: Person, update: PersonUpdate) {
  return { ...person, ...update }
}

// The function takes in the original person object as well as an object containing the properties to update.
// <PersonUpdate> isn't very DRY, though. If our program requires a new property to be added to <Person>, we will need to remember to add this to <PersonUpdate>.
