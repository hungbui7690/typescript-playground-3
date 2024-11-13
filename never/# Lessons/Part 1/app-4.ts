/*
  Use Cases


*/

type Status = 'Pending' | 'Working' | 'Complete' | 'Cancelled'

function neverReached(never: never) {}

function doSomeAction(status: Status) {
  switch (status) {
    case 'Pending':
      break
    case 'Working':
      break
    case 'Complete':
      break

    // @
    case 'Cancelled':
      break

    default:
      neverReached(status)
  }
}

doSomeAction('Pending')
