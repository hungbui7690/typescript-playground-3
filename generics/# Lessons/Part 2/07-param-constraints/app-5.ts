/*
  A more complex example
  - A parameter constraint can be dependent on another generic parameter. We are going to work through an example of this.




*/

interface Form<T> {
  values: T
}

function getFieldValue<T>(form: Form<T>, fieldName: string) {
  return form.values[fieldName]
}

// 🤔 The getFieldValue function contains a type error where it references form.values[fieldName]. Why is this so?
// -> TypeScript doesn't know what the structure of value is, so, it raises an error.
