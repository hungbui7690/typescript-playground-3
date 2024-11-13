/*
  Generic Parameter Constraints



*/

interface Logable {
  log: () => void
}

function logItems<T extends Logable>(items: T[]): void {
  items.forEach((item) => item.log())
}

// @
const heading = {
  name: 'Heading',
  props: { text: 'Chapter 1' },
  log: () => console.log('Chapter 1 heading'),
}

const button = {
  name: 'Button',
  props: { text: 'Save' },
  trace: () => console.log('Save button'),
  log: () => console.log('Save button'), // @
}

logItems([heading, button])
