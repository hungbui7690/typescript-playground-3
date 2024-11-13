/*
  instanceof
  - The instanceof operator can be used to help TypeScript narrow the type of a class object variable. It only works on class structures and not other TypeScript structures, such as interfaces.



*/

class Contact {
  constructor(public emailAddress: string) {}
}

class Person extends Contact {
  constructor(
    public firstName: string,
    public surname: string,
    emailAddress: string
  ) {
    super(emailAddress)
  }
}

class Organisation extends Contact {
  constructor(public name: string, emailAddress: string) {
    super(emailAddress)
  }
}

function sayHello(contact: Contact) {
  // @ - Output Hello {firstName} if a person
  if (contact instanceof Person) {
    console.log('Hello ' + contact.firstName)
  }

  // @ - Output Hello {name} if an organisation
  if (contact instanceof Organisation) {
    console.log('Hello ' + contact.name)
  }
}

const bob = new Person('Bob', 'Young', 'bob.young@somewhere.com')
const redBricks = new Organisation('Red Bricks', 'info.redbricks@somewhere.com')

sayHello(bob)
sayHello(redBricks)
