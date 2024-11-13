/*
  Record<K,V>
  - How can we narrow the type of the record keys so that only 'rodj', 'janes' or 'fredp' are accepted? 



*/

type Result = {
  firstName: string
  surname: string
  score: number
}

type ResultRecord = Record<'rodj' | 'janes' | 'fredp', Result> // @

const records: ResultRecord = {
  rodj: {
    firstName: 'Rod',
    surname: 'James',
    score: 70,
  },
  janes: {
    firstName: 'Jane',
    surname: 'Smith',
    score: 95,
  },
  fredp: {
    firstName: 'Fred',
    surname: 'Peters',
    score: 60,
  },
  // ❌ Error
  // bobk: {
  //   firstName: 'Bob',
  //   surname: 'Keel',
  //   score: 65,
  // },
}

console.log(records)
