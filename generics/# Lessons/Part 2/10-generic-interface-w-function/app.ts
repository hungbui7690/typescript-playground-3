/*
  Use Generic Interfaces with A Function



*/

interface Collection<T> {
  add(item: T): void
  remove(item: T): void
  contains(item: T): boolean
}

class MyCollection<T> implements Collection<T> {
  private items: T[] = []
  add(item: T): void {
    this.items.push(item)
  }
  remove(item: T): void {
    const index = this.items.indexOf(item)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  }
  contains(item: T): boolean {
    return this.items.includes(item)
  }
}

const numberCollection: Collection<number> = new MyCollection<number>()
numberCollection.add(1)
numberCollection.add(2)
numberCollection.add(3)

console.log(numberCollection.contains(2)) // Output: true

const stringCollection: Collection<string> = new MyCollection<string>()
stringCollection.add('Hello')
stringCollection.add('World')
console.log(stringCollection.contains('Hello')) // Output: true
