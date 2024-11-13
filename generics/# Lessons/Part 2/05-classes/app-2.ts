/*
  Generics Classes



*/

// @ Generics are not limited to functions – they can also be used with classes. Consider the following example of a generic Box class:
class Box<T> {
  private value: T

  constructor(value: T) {
    this.value = value
  }

  getValue(): T {
    return this.value
  }
}

let box = new Box<number>(42)
console.log(box.getValue()) // Output: 42

// 🌲 Here, Box is a generic class with a type parameter T. The constructor takes a value of type T, and the getValue method returns a value of type T. When creating an instance of Box<number>, it can only store and return values of type number.
