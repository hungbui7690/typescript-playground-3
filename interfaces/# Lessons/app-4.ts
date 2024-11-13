/*
  Using interfaces for functions



*/

interface ButtonProps {
  text: string
  onClick?: () => void
}

interface ColoredButtonProps extends ButtonProps {
  color: string
}

// @
interface Log {
  (message: string): void
}

// @
const log = (message: string) => {
  console.log(message)
}

const buyButton: ButtonProps = {
  text: 'Buy',
  onClick: () => console.log('Buy'),
}

const greenBuyButton: ColoredButtonProps = {
  color: 'Green',
  text: 'Buy',
  onClick: () => console.log('Buy'),
}
