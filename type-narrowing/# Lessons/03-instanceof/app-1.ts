/*
  instanceof
  - instanceof is a JavaScript operator that can check whether an object belongs to a particular class. It also takes inheritance into account.
    -> <objectVariable> instanceof <ClassName>



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
  // TODO - Output Hello {firstName} if a person
  // TODO - Output Hello {name} if an organisation
}

const bob = new Person('Bob', 'Young', 'bob.young@somewhere.com')
const redBricks = new Organisation('Red Bricks', 'info.redbricks@somewhere.com')

sayHello(bob)
sayHello(redBricks)
