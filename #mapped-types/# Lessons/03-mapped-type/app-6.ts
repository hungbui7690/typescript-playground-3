/*
  Creating a mapped type



*/

interface Form<T> {
  values: T
  errors: { [K in keyof T]?: string }
}

// @ add mobile param
const contactForm: Form<{ name: string; email: string; mobile: string }> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
    mobile: '0745 6723432', // @
  },
  errors: {
    mobile: 'You must add a mobile number', // @
  },
}

console.log(contactForm)
