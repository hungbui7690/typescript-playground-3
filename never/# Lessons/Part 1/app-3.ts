/*
  Use Cases


*/

type Status = 'Pending' | 'Working' | 'Complete' | 'Cancelled'

// @
function neverReached(never: never) {}

function doSomeAction(status: Status) {
  switch (status) {
    case 'Pending':
      break
    case 'Working':
      break
    case 'Complete':
      break

    // @ Notice that we now get a type error in the default branch of the switch statement.
    default:
      neverReached(status)
  }
}

doSomeAction('Pending')
