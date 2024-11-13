/*
  Using a user-defined type guard with an assertion signature



*/

interface Person {
  firstName: string
  surname: string
}
interface Organisation {
  name: string
}
type Contact = Person | Organisation

// @ We are throwing an error if the firstName property is undefined. If the function returns without an error being raised, then the contact parameter is asserted to be of type Person
function assertIsPerson(contact: Contact): asserts contact is Person {
  if ((contact as Person).firstName === undefined) {
    throw new Error('Not a person')
  }
}

function sayHello(contact: Contact) {
  // @
  assertIsPerson(contact)
  console.log('Hello ' + contact.firstName)
}

const bob: Person = {
  firstName: 'Bob',
  surname: 'Young',
}

const redBricks: Organisation = {
  name: 'Red Bricks',
}

sayHello(bob) // ❎ Hello Bob
// sayHello(redBricks) // ❌ Error: Not a person
