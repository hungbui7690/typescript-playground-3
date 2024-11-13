/*
  Using a user-defined type guard with an assertion signature


----------------------

  - function assertTypeName(<paramName>: <WideTypeName>): <asserts> <paramName> <is> <NarrowTypeName> {
      if (some_check) {
        throw new Error('Assert failed')
      }
    }

  - <asserts> <paramName> <is> <NarrowTypeName> is the assertion signature in the above function.


----------------------

  - The type guard function carries out some checks on its parameter and throws an error if it isn't the type being asserted. If no errors are raised, then TypeScript will narrow the type to the one being asserted.



*/

interface Person {
  firstName: string
  surname: string
}
interface Organisation {
  name: string
}
type Contact = Person | Organisation

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
