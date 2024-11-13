/*
  Using "typeof" to infer a type
  - The typeof type annotation can be used to extract the type from an object. This approach reduces the types we need to create, making our code more maintainable.



*/

// @ remove ContactDetails type
const initialContactDetails = { name: '', email: '', mobile: '' }

// @ use typeof to infer a type
function saveContactDetails(details: typeof initialContactDetails) {
  console.log(details)
}
