/*
  Never Type



*/

type Role = 'admin' | 'user'

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything'
    case 'user':
      return 'You can do something'
    default:
      // never reach here util we add a new role
      const _unreachable: never = role
      throw new Error(`Invalid role: ${_unreachable}`)
  }
}

console.log(authorize('admin'))
