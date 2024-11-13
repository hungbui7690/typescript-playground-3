/*
  Discriminated union pattern
  - The discriminated union pattern is a way of narrowing a union type. A requirement for this pattern is for the types in the union to have a common property. Conditional statements can then be used on the common property as a type guard to narrow the union type.



*/

// 🌲 What is the discriminant property in the Person and Organisation types
// -> The common property is <contactType>.
// 🤔 What is the union type?
// -> The <Contact> type will be the union type in discriminated union pattern.

interface Person {
  firstName: string
  surname: string
  contactType: 'person'
}
interface Organisation {
  name: string
  contactType: 'organisation'
}
type Contact = Person | Organisation

function sayHello(contact: Contact) {
  // @
  switch (contact.contactType) {
    case 'person':
      console.log('Hello ' + contact.firstName)
      break
    case 'organisation':
      console.log('Hello ' + contact.name)
      break
  }
}

const bob: Person = {
  firstName: 'Bob',
  surname: 'Young',
  contactType: 'person',
}

const redBricks: Organisation = {
  name: 'Red Bricks',
  contactType: 'organisation',
}

sayHello(bob)
sayHello(redBricks)
