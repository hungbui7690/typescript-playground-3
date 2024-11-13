/*
  Passing default types to generics


*/

function firstOrNull<T>(array: T[]): T | null {
  return array.length === 0 ? null : array[0]
}

// @ Default type -> we need to specify the default type for T2 as well -> otherwise, Error
interface Component<T1 = string, T2 = any> {
  name: T1
  props: T2
  log: () => void
}

// @ Fix error by adding params
const button: Component<string, { text: string }> = {
  name: 'Button',
  props: {
    text: 'Save',
  },
  log: () => console.log('Save button'),
}

console.log(button.props.text)
// console.log(button.props.text2) // The type of props in button is any. So, TypeScript will not do any type checking on props.
