/*
  The mental model of unknown vs any
  - To be honest, I had difficulties understanding unknown when I had been learning it. How does it differ from any, since both types accept any value?
  - Here's the rule that had helped me understand the difference:
    # You can assign anything to unknown type but you have to do a type check or type assertion to operate on unknown
    # You can assign anything to any type and you can perform any operation on any

  🌲 The previous example has demonstrated exactly the similarity and difference between unknown and any.


----------------

  - unknown and any are 2 special types that can hold any value.
  - unknown is recommended over any because it provides safer typing — you have to use type assertion or narrow to a specific type if you want to perform operations on unknown.



*/

function invokeAnything(callback: unknown) {
  // The type check here is typeof callback === 'function' — checking whether the callback is a function. The type of callback narrows to function type.
  if (typeof callback === 'function') {
    callback()
  }
}

invokeAnything(1)

// callback being any, TypeScript doesn't enforce any type checking for the statement callback().
