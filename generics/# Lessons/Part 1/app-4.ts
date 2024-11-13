/*
  Generic Classes



*/

class GenericQueue<T> {
  private data: T[] = []

  enqueue(item: T) {
    this.data.push(item)
  }
  dequeue(): T | undefined {
    return this.data.shift()
  }
}

let stringQueue = new GenericQueue<string>()

stringQueue.enqueue('First')
stringQueue.enqueue('Second')

console.log(stringQueue.dequeue())
console.log(stringQueue.dequeue())
console.log(stringQueue.dequeue())
