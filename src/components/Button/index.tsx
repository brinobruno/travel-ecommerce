import { ReactNode } from 'react'

import { ButtonStyles } from './styles'

export enum ButtonType {
  primary,
  secondary,
  disabled,
}

export enum ButtonSize {
  large,
  medium,
  small,
}

type ButtonProps = {
  type: ButtonType
  size: ButtonSize
  icon?: JSX.Element
  onClick?: () => void
  children?: ReactNode
}

export function Button({ type, size, icon, onClick, children }: ButtonProps) {
  const handleOnClick = () => {
    if (onClick) onClick()
  }

  return (
    <ButtonStyles type={type} size={size} onClick={handleOnClick}>
      {children}
      {icon && icon}
    </ButtonStyles>
  )
}
