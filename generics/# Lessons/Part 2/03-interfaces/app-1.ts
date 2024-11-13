/*
  Generic interfaces
  - A common use case for a generic interface is a generic form interface. 
  - This is because all forms have values, validation errors, etc. but the specific fields and validation rules differ from form to form.



*/

interface Form<T> {
  values: T
}

interface Contact {
  name: string
  email: string
}

const contactForm: Form<Contact> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
}
