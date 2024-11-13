/*
  Introduction
  - In the world of web development, managing asynchronous operations is crucial. 
  - Applications often need to fetch data from servers, handle user interactions that trigger delayed responses, or perform time-consuming tasks. 
  - TypeScript, being a superset of JavaScript, offers the ‘async/await’ syntax to streamline asynchronous programming, making our code more readable and maintainable.


--------------------

  The Foundation: Promises
  - Before we dive into async/await, it’s essential to grasp the concept of Promises in JavaScript. A Promise represents the eventual outcome of an asynchronous operation. It exists in one of three states:
    # Pending: The operation is ongoing.
    # Fulfilled: The operation completed successfully.
    # Rejected: The operation failed due to an error.


*/

function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous network request
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Data fetched successfully!')
      } else {
        reject(new Error('Network error'))
      }
    }, 1000)
  })
}
