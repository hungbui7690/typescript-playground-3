/*
  Using generics with classes



*/

// @ Defining our new class with a generic
class ExampleClass<T> {
  private values: T[] = []

  setValue(value: T): void {
    this.values.push(value)
  }
  getValues(): T[] {
    return this.values
  }
}

// @ Using 'number' as the type to replace our generic 'T'
const example = new ExampleClass<number>()

// @ We can now only pass in numbers. Any other type will error.
example.setValue(24)
example.setValue(42)
const values = example.getValues()

console.log(values) // [24, 42]
