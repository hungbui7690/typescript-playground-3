/*
  Type Intersection


  
*/

type HasEmail1 = {
  email: string
}

type HasEmail2 = {
  email: number
}

type User = HasEmail1 & HasEmail2

const user: User = {
  email: 'amir@example.com',
}

/*
  - The error above refers to <never>, which we saw in an earlier lesson. It's a type that doesn't allow any values at all. Assigning any value to a never causes a type error like the one above.
  - The error message hints at what our type intersection actually did. No value can be both a string and a number at the same time, so our email property gets the type never. The overall User type is {email: never}.

  - This never error message may seem vague now, but it's even worse when we have to debug it in a real system. Imagine that type and variable declaration above lives in a different file. Our HasEmail1 and HasEmail2 types are defined in "<email1.ts>" and "<email2.ts>". The User type is defined in "<user.ts>". And our actual const user: User variable is created in "<login.ts>".

  - The error message about never shows up in "<login.ts>", where we tried to create the variable. We have to trace that back to the definition of User in "<user.ts>". We then have to open "<email1.ts>" and "<email2.ts>" to see how HasEmail1 and HasEmail2 are defined.

  - We're still not done! Now we have to manually find the conflicting properties on the HasEmail1 and HasEmail2 types. In our simple example, each type only has one property, so it's obvious which property caused the problem. But in real-world systems, those types may have dozens of properties, and those properties may themselves be complex nested object types.

  - If we've already defined HasEmail1 and HasEmail2 types, then it might seem easy to intersect them with &. But in the long term, we're making more work for ourselves: we risk confusing errors about never in the future.

  - Ideally, we want a type error at the point where we combine the two types to make User. Specifically, we want to know which properties actually conflict, and we want to know what types those properties have.
  
  - Fortunately, there's a better approach that accomplishes those goals. We can use extends instead of a type intersection. When an interface extends another interface or type, and the two types have incompatible properties, we get a type error.
*/
