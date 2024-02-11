'use client'

import { ReactNode } from 'react'

import { Container } from './styles'

export enum ButtonType {
  primary,
  secondary,
  disabled,
  outline,
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
    <Container type={type} size={size} onClick={handleOnClick}>
      {children}
      {icon}
    </Container>
  )
}
