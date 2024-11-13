/*
  Type Aliases



*/

// @ Create a type alias called Log that represents "log" function.
type Log = (message: string, category?: string) => void

const log = (message: string) => {
  console.log(message)
}
