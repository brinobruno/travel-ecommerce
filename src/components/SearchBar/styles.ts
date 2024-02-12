import styled from 'styled-components'

import { FlexCenter } from '../../styles/shared'

const Container = styled(FlexCenter)`
  height: 120px;
  background: ${({ theme }) => theme.colors.white};
`

const Form = styled.form`
  max-width: ${({ theme }) => theme.layout.container};
  width: 100%;
  margin: 0 ${({ theme }) => theme.spacing.m};
  padding: 0 12px;
  height: 48px;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray20};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

const Input = styled.input`
  width: 100%;

  &,
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    color: ${({ theme }) => theme.colors.gray40};
  }

  &:focus,
  &:focus-within,
  &:focus-visible {
    outline: none;
  }
`

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  border-left: 1px solid ${({ theme }) => theme.colors.gray20};
  padding-left: 12px;
`

export { Container, Form, Input, SubmitButton }
