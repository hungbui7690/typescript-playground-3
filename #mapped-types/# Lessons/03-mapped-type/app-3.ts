/*
  Creating a mapped type



*/

interface Form<T> {
  values: T
  errors: { [K in keyof T]: string } // ❎
}

const contactForm: Form<{ name: string; email: string }> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
  errors: {
    email: 'Invalid email address', // ❌ change to email still not work
  },
}

console.log(contactForm)
