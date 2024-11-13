/*
  Declaration merging
  - It is legal in TypeScript for multiple interfaces with the same name to be created. 
  - TypeScript will merge interfaces with the same name in a process called declaration merging.


---------------------

  - It is worth noting that duplicate type names and declaration merging can be confusing if we use this in our code. It is arguably clearer to extend types as we did in the last section so that each type has a unique name.
  - However, declaration merging is useful on types from a 3rd party library. This is because the types in some libraries are maintained outside of the main library and can be out of date. If this is the case, we can use declaration merging to update types in our code until it is updated in the official library.


*/

interface ButtonProps {
  text: string
  onClick?: () => void
}

// @ TypeScript is happy with the second ButtonProps interface, but the variables using ButtonProps now have a type error. This is because an id property is now required on the ButtonProps type
interface ButtonProps {
  id: string
}
// 🌲 Interface members are added to the existing type during the declaration merging process.

interface ColoredButtonProps extends ButtonProps {
  color: string
}

interface Log {
  (message: string): void
}

const log = (message: string) => {
  console.log(message)
}

// @ will cause error here -> since id is required
const buyButton: ButtonProps = {
  text: 'Buy',
  onClick: () => console.log('Buy'),
}

const greenBuyButton: ColoredButtonProps = {
  color: 'Green',
  text: 'Buy',
  onClick: () => console.log('Buy'),
}
