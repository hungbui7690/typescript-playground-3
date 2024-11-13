/*
  Using a user-defined type guard with a type predicate
  - A user-defined type guard can carry out checks on its parameter and use a type predicate to tell TypeScript its type. A user-defined type guard that uses a type predicate must return a boolean value.



*/

interface Person {
  firstName: string
  surname: string
}
interface Organisation {
  name: string
}
type Contact = Person | Organisation

// @ We could have used "firstName" in contact as the return statement, but this could be used directly as a type guard. A more common implementation for a user-defined type guard is to check whether properties have values, which is what we have done here.
function isPerson(contact: Contact): contact is Person {
  return (contact as Person).firstName !== undefined
}

// @ Create a type guard function, called isOrganisation, to check whether an object is an Organisation.
function isOrganisation(contact: Contact): contact is Organisation {
  return (contact as Organisation).name !== undefined
}

function sayHello(contact: Contact) {
  // @
  if (isPerson(contact)) {
    console.log('Hello ' + contact.firstName)
  }
  if (isOrganisation(contact)) {
    console.log('Hello ' + contact.name)
  }
}

const bob: Person = {
  firstName: 'Bob',
  surname: 'Young',
}

const redBricks: Organisation = {
  name: 'Red Bricks',
}

sayHello(bob)
sayHello(redBricks)
