/*
  Never Type



*/

// @ If we add a new value to the Role type and forget to add a logic to handle the new role, TypeScript will issue an error:
type Role = 'admin' | 'user' | 'guest'

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything'
    case 'user':
      return 'You can do something'

    // @ To fix this, you need to create a new case branch to handle the new role:
    case 'guest':
      return 'You can do nothing'

    default:
      const _unreachable: never = role
      throw new Error(`Invalid role: ${_unreachable}`)
  }
}

console.log(authorize('admin'))
