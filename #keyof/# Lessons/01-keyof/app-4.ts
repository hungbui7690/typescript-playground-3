/*
  <Object.keys> vs. <keyof> operator



*/

type User = {
  name: string
  age: number
}

const user: User = {
  name: 'John',
  age: 32,
}

// @
type userKeyType = keyof typeof user

Object.keys(user).forEach((key) => {
  console.log(user[key as userKeyType]) // @
})
