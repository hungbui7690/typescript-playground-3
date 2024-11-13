/*
  Use Cases
  - The code also contains a function containing a switch statement that does different things depending on the different values for the status parameter.


*/

// @ add new status "Cancelled"
type Status = 'Pending' | 'Working' | 'Complete'

// ❎ Wouldn't it be nice if TypeScript reminded us that we need to handle this new status in the doSomeAction function switch statement? Well, we can use the never type to do this.

function doSomeAction(status: Status) {
  switch (status) {
    case 'Pending':
      // some code
      break
    case 'Working':
      // some code
      break
    case 'Complete':
      // some code
      break
  }
}

doSomeAction('Pending')
