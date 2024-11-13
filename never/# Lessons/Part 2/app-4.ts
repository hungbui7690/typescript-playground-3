/*
  Never Type



*/

type Role = 'admin' | 'user' | 'guest'

// @ To make it more concise, we can define a function with the return type never and use it in the default branch:
const unknownRole = (role: never): never => {
  throw new Error(`Invalid role: ${role}`)
}

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything'
    case 'user':
      return 'You can do something'
    case 'guest':
      return 'You can do nothing'

    default:
      return unknownRole(role) // @
  }
}

console.log(authorize('admin'))
