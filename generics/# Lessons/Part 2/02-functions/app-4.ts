/*
  Using generics with functions



*/

interface ObjOne {
  prop1: string
  prop2: number
}

interface ObjTwo {
  prop3: string
  prop4: string
}

async function fetchData<T>() {
  const response = await fetch('API_URL')

  const data = (await response.json()) as T

  return data
}

// await fetchData<ObjOne>() // The returned data would have a type of ObjOne
// await fetchData<ObjTwo>() // The returned data would have a type of ObjTwo
