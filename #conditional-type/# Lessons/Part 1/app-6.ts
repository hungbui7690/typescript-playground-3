/*
  Modeling Options



*/

interface User {
  name: string
  age: number
}

interface UserWithOptionalEmail {
  name: string
  age: number
  email?: string
}

type WithEmail<T> = T extends { email: string } ? T : T & UserWithOptionalEmail

function processUser(user: WithEmail<User>) {
  if (user.email) {
    console.log('User email: ', user.email)
  } else {
    console.log("The user doesn't have an email")
  }
}

const userWithEmail: WithEmail<User> = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
}

const userWithoutEmail: WithEmail<User> = {
  name: 'Bob',
  age: 25,
}

processUser(userWithEmail)
processUser(userWithoutEmail)
