/*
  Generic class
  - adding a strongly-typed <add> method to the class. This method has a single parameter for the list item to be added. The implementation should add the new list item to the items array.



*/

class List<T> {
  private items: T[] = []

  add(item: T) {
    this.items.push(item)
  }
}

const numberList = new List<number>()
numberList.add(1)
// numberList.add('2') // ❌ Error -> string
