/*
  Creating a mapped type



*/

interface Form<T> {
  values: T
  errors: any // ❌ The type of errors is any, so no type checking will occur on this property
}

const contactForm: Form<{ name: string; email: string }> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
  errors: {
    emailAddress: 'Invalid email address', // ❌ The errors property references an incorrectly named field. The field name should be email rather than emailAddress
  },
}

console.log(contactForm)
