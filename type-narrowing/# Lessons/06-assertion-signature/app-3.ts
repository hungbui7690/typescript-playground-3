/*
  Using a user-defined type guard with an assertion signature
  - A user-defined type guard can carry out checks on its parameter and use an assertion signature to tell TypeScript what type it is. A user-defined type guard that uses an assertion signature throws an error if the checks fail.



*/

interface Person {
  firstName: string
  surname: string
}
interface Organisation {
  name: string
}
type Contact = Person | Organisation

function assertIsPerson(contact: Contact): asserts contact is Person {
  if ((contact as Person).firstName === undefined) {
    throw new Error('Not a person')
  }
}

// @ Create an assertion type guard, called <assertIsOrganisation>, to check whether an object is an <Organisation>.
function assertIsOrganisation(
  contact: Contact
): asserts contact is Organisation {
  if ((contact as Organisation).name === undefined) {
    throw new Error('Not an organisation')
  }
}

function sayHello(contact: Contact) {
  assertIsOrganisation(contact)
  console.log('Hello ' + contact.name)
}

const bob: Person = {
  firstName: 'Bob',
  surname: 'Young',
}

const redBricks: Organisation = {
  name: 'Red Bricks',
}

sayHello(bob) // ❎ Hello Bob
sayHello(redBricks) // ❌ Error: Not an organisation
