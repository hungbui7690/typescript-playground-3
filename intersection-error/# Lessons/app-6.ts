/*
  Type Intersection


  
*/

interface HasEmail {
  email: string
}
interface User extends HasEmail {
  email: number
}

const user: User = { name: 'Amir' }

/*
  - Take a moment to read that error message, and compare it to the never error up above. This error is much clearer and more helpful in debugging the code. It tells us the interfaces' names, the property that caused the problem, and even the conflicting properties' individual types.

  - As you might guess, we recommend defaulting to extends instead of type intersections.

  - There's also a broader lesson here. New programmers tend to stop working on code as soon as it works. With more experience, they learn that working code isn't enough. Code must also be understandable and maintainable by other programmers, including programmers who join the team in the future and don't know the code's history.

  - The same principle applies to static types. Satisfying the type checker is like getting the code to work for the first time. But often, the first version of the code that gets the right answer has problems. It's important to treat static types with the same respect that we treat all other code: they need to work, but they also need to be understandable and maintainable.

  - In this lesson, we saw that type intersections can cause future maintenance problems that don't exist with interfaces and extends. When you initially write your code, both methods are easy to use. But as the code evolves, you'll benefit from better error messages with extends.
*/
