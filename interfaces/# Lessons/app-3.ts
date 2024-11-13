/*
  Extending interfaces
  - Interfaces can extend other interfaces to inherit all the properties and methods from the interface being extended.



*/

interface ButtonProps {
  text: string
  onClick?: () => void
}

// @
interface ColoredButtonProps extends ButtonProps {
  color: string
}

const buyButton: ButtonProps = {
  text: 'Buy',
  onClick: () => console.log('Buy'),
}

// @
const greenBuyButton: ColoredButtonProps = {
  color: 'Green',
  text: 'Buy',
  onClick: () => console.log('Buy'),
}
