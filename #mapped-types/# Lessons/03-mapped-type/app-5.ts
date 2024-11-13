/*
  Creating a mapped type



*/

interface Form<T> {
  values: T
  errors: { [K in keyof T]?: string } // ❎ add optional
}

const contactForm: Form<{ name: string; email: string }> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
  errors: {
    email: 'Invalid email address', // no need name property anymore
  },
}

console.log(contactForm)
