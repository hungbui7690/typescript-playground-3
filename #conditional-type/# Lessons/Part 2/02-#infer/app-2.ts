/*
  <infer> keyword
  - There is an <infer> keyword that can be used within a condition in a conditional type to put the inferred type into a variable. That inferred variable can then be used within the conditional branches.



*/

// The code contains two functions that return different objects. The code also includes types for the two functions.
// We will create a utility type called FunctionReturnType that will give the return type of a function. We will eventually create a union type consisting of the return types of the two functions using FunctionReturnType.
function addPerson(personName: string) {
  return {
    type: 'AddPerson',
    payload: personName,
  }
}

function removePerson(id: number) {
  return {
    type: 'RemovePerson',
    payload: id,
  }
}

type AddPersonType = typeof addPerson
type RemovePersonType = typeof removePerson
