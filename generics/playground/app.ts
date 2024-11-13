/*
  Example: A Generic Data Fetcher


*/

interface Resource<T> {
  id: number
  data: T
}

class DataFetcher<T> {
  constructor(private url: string) {}

  async fetchData(): Promise<Resource<T>> {
    const response = await fetch(this.url)
    const data: T = await response.json()
    return { id: 1, data } // Placeholder, actual ID from response
  }
}

const userFetcher = new DataFetcher<{ name: string; role: string }>(
  'https://api.users/1'
)
/*
  - Resource<T> = {
      id: number
      data: T
    }
  - Resource<User> = {
      id: number
      data: {
        name: string,
        role: string
      }
  }
*/

userFetcher.fetchData().then((user) => console.log(user.data.name))
