/*
  Generic interfaces
  - We will now expand the Form interface to include a property for the form's validation errors. 
  - This will be based on the generic type passed into Form, but not all the fields will have validation errors.



*/

/*
  @ Let's add this errors property to our Form interface:

  The errors property is given a type that has syntax we haven't covered so far in this course. So let's break this down:
  - The type is in curly brackets, so we are constructing an object type.
  - [K in keyof T] will put all the keys in the type T into a string literal union. This will be "name" | "email" for contactForm.
  - [K in keyof T] is the property name of the object being constructed. So, for contactForm, the object's properties are name and email.
  - The ? after the property name means the properties are optional.
  - The type for the properties is string.
  - So, for contactForm, the type for the errors is {name?: string; email?: string}.
*/
interface Form<T> {
  errors: {
    [K in keyof T]?: string
  }
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

  // @
  errors: {
    email: 'This must be a valid email address',
    // age: 'You must enter your age', // ❌ Error -> age is not in contactForm
  },
}
