/*
  Promises with .then and .catch


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

fetchData('https://api.example.com')
  .then((data) => {
    console.log(data) // "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error) // Error: Network error
  })
