/*
  Using a user-defined type guard with a type predicate
  - A type predicate can be used in a function's return type to indicate the narrowed type of the parameter:
      function isTypeName(<paramName>: M): <paramName> <is> <NarrowTypeName> {
        return boolean_result_of_check;
      }

  🌲 A type guard function must return a boolean value if a type predicate is used 


----------------------



*/

interface Person {
  firstName: string
  surname: string
}
interface Organisation {
  name: string
}
type Contact = Person | Organisation

// @
function isPerson(contact: Contact) {}

// @
function isOrganisation(contact: Contact) {}

function sayHello(contact: Contact) {
  // TODO - Output Hello {firstName} if a person
  // TODO - Output Hello {name} if an organisation
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
