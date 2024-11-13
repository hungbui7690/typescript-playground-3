/*
  unknown: The Type-Safe Alternative
  - ‘unknown’ is a much safer counterpart to ‘any’. It represents a variable whose type we don’t yet know.


----------------

  When to Use
  - Dealing with untrusted data from user input or 3rd party APIs
  - When type information is missing but you want to preserve type safety.

  => Enforcing Checks: Unlike ‘any’, you cannot directly perform operations on ‘unknown’ variables. TypeScript forces you to do type narrowing before using them.



*/

function processData(data: unknown) {
  if (typeof data === 'string') {
    // TypeScript now understands data is a string here
    console.log(data.toUpperCase())
  } else if (typeof data === 'number') {
    // TypeScript considers data a number in this block
    console.log(data * 2)
  }
}
