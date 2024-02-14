'use client'

import styled, { css } from 'styled-components'

import { ButtonSize, ButtonType } from '.'

interface ButtonStyleProps {
  type: ButtonType
  size: ButtonSize
}

export const Container = styled.button<ButtonStyleProps>`
  padding: 20px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.book};
  letter-spacing: ${({ theme }) => theme.letterSpacing.paragraph};

  // Type
  ${(props) =>
    props.type === ButtonType.primary &&
    css`
      background: ${({ theme }) => theme.colors.support10};
      border: 1px solid ${({ theme }) => theme.colors.support10};
      color: ${({ theme }) => theme.colors.white};
    `}

  ${(props) =>
    props.type === ButtonType.secondary &&
    css`
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.support10};
    `}

    ${(props) =>
    props.type === ButtonType.disabled &&
    css`
      background: ${({ theme }) => theme.colors.gray10};
      border: 1px solid ${({ theme }) => theme.colors.gray10};
      color: ${({ theme }) => theme.colors.gray30};
    `}


    ${(props) =>
    props.type === ButtonType.outline &&
    css`
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray20};
      color: ${({ theme }) => theme.colors.gray20};
    `}

  // Size
  ${(props) =>
    props.size === ButtonSize.large &&
    css`
      height: 58px;
      border-radius: 4px;
      font-size: ${({ theme }) => theme.fontSize.paragraph2};
      line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    `}

    ${(props) =>
    props.size === ButtonSize.medium &&
    css`
      height: 50px;
      border-radius: 4px;
      font-size: ${({ theme }) => theme.fontSize.paragraph2};
      line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    `}

    ${(props) =>
    props.size === ButtonSize.small &&
    css`
      height: 39px;
      border-radius: 3px;
      font-size: ${({ theme }) => theme.fontSize.paragraph3};
      line-height: ${({ theme }) => theme.lineHeight.paragraph3};
    `}
`
