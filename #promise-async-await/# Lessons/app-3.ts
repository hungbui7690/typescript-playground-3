/*
  Enter Async/Await
  - Async/await provides a cleaner way to work with Promises. Let’s refactor our example:
    # async: The async keyword declares that a function is asynchronous and always returns a Promise.
    # await: The await keyword pauses the execution of an async function until a Promise settles (either resolves or rejects). It can only be used within an async function.



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

// Notice how the async/await version reads like synchronous code, even though it’s handling asynchronous operations behind the scenes.
