/*
  Error Handling
  - Error handling is paramount in asynchronous programming. With async/await, we employ the familiar try...catch block


--------------------

  - The promises, async and await in TypeScript offers a powerful and elegant approach to managing asynchronous operations. 
  - By transforming the Promise-based paradigm into a more synchronous-like style, it enhances code readability, maintainability, and reduces the potential for errors common in callback-heavy Promise chains. 
  - For any TypeScript developer aiming to create robust, responsive, and user-friendly web applications, understanding async/await is an indispensable skill.



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

async function fetchDataWithAsyncAwait(url: string): Promise<string> {
  try {
    const response = await fetch(url)
    const data = await response.text()
    return data
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`)
  }
}

// @
async function getUserData() {
  try {
    const userData = await fetchDataWithAsyncAwait(
      'https://api.example.com/users/1'
    )
    console.log(userData)
  } catch (error) {
    console.error('Failed to get user data:', error)
  }
}

/*
  Key Points
  - Async/await is syntactic sugar built on top of Promises.
  - Async functions always return a Promise.
  - Use await to pause execution within an async function until a Promise settles.
  - Employ try...catch blocks for robust error handling.

*/
