/*
  Creating interfaces
  - An interface allows a new type to be created with a name and structure. The structure includes all the properties and methods that the type has without any implementation.
  - Interfaces don't exist in JavaScript - they are only used by the TypeScript compiler type checking process.



*/

// @ create interface
interface ButtonProps {
  text: string
  onClick?: () => void // optional
}

// @ create button
const buyButton: ButtonProps = {
  text: 'Buy',
  onClick: () => console.log('Buy'),
}
