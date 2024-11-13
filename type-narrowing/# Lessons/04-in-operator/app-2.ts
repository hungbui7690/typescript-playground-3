/*
  "in" operator
  - The in operator can be used to help TypeScript narrow the type of an object variable by its property name. It is arguably more useful than instanceof because it can be applied to any object structure.



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
  // @ - Output Hello {firstName} if a person
  if ('firstName' in contact) {
    console.log('Hello ' + contact.firstName)
  }

  // @ - Output Hello {name} if an organisation
  if ('name' in contact) {
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
