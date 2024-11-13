/*


*/

// We’ve all been in situations where we used a library that had been typed sparingly. Take the following third-party function for example:
function describePerson(person: {
  name: string
  age: number
  hobbies: [string, string] // tuple
}) {
  return `${person.name} is ${
    person.age
  } years old and loves ${person.hobbies.join(' and  ')}.`
}

// If the library doesn’t provide a standalone type for the person argument of describePerson, defining a variable beforehand as the person argument would not be inferred correctly by TypeScript:
const alex = {
  name: 'Alex',
  age: 20,
  hobbies: ['walking', 'cooking'], // ❌ type string[] != [string, string]
}

// TypeScript will infer the type of alex as { name: string; age: number; hobbies: string[] } and will not permit its use as an argument for describePerson.
