/*
  A more complex example
  - A parameter constraint can be dependent on another generic parameter. We are going to work through an example of this.


*/

interface Form<T> {
  values: T
}

// @
function getFieldValue<T, K extends keyof T>(form: Form<T>, fieldName: K) {
  return form.values[fieldName]
}

const contactForm = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
  },
}

console.log(getFieldValue(contactForm, 'name'))
// console.log(getFieldValue(contactForm, 'phone')) // ❌ Error
