import styled, { css } from 'styled-components'

import { ButtonSize, ButtonType } from '.'

interface ButtonStyleProps {
  type: ButtonType
  size: ButtonSize
}

export const ButtonStyles = styled.button<ButtonStyleProps>`
  padding: 20px;
  border: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  // Type
  ${(props) =>
    props.type === ButtonType.primary &&
    css`
      background: ${(props) => props.theme.colors.support10};
      color: ${(props) => props.theme.colors.white};
    `}

  ${(props) =>
    props.type === ButtonType.secondary &&
    css`
      background: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.support10};
      border-color: ${(props) => props.theme.colors.support10};
      border-width: 1px;
    `}

    ${(props) =>
    props.type === ButtonType.disabled &&
    css`
      background: ${(props) => props.theme.colors.gray10};
      color: ${(props) => props.theme.colors.gray30};
    `}

  // Size
  ${(props) =>
    props.size === ButtonSize.large &&
    css`
      height: 58px;
      border-radius: 4px;
      font-size: 16px;
    `}

    ${(props) =>
    props.size === ButtonSize.medium &&
    css`
      height: 50px;
      border-radius: 4px;
      font-size: 16px;
    `}

    ${(props) =>
    props.size === ButtonSize.small &&
    css`
      height: 39px;
      font-size: 14px;
      border-radius: 3px;
    `}
`
