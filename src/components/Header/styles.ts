'use client'

import styled from 'styled-components'

import { FlexCenter } from '@/styles/shared'

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray10};
  height: 100px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: ${({ theme }) => theme.layout.container};
  width: 100%;
  margin: 0 ${({ theme }) => theme.spacing.m};
`

const Control = styled.div`
  display: flex;
  align-items: center;

  > div {
    gap: 16px;
  }
`

const SpacedGapContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const ExchangeRate = styled(SpacedGapContainer)`
  span {
    font-size: ${({ theme }) => theme.fontSize.paragraph4};
    line-height: ${({ theme }) => theme.lineHeight.paragraph4};
  }

  a {
    height: 24px;
  }
`

const UserArea = styled(SpacedGapContainer)`
  color: ${({ theme }) => theme.colors.brandBlue};
`

const SignIn = styled(FlexCenter)`
  gap: 4px;

  > span {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`

const Divider = styled.div`
  height: 29px;
  width: 1px;
  margin: 0 16px;
  background: ${({ theme }) => theme.colors.gray10};
`

export { Container, Nav, Control, ExchangeRate, UserArea, SignIn, Divider }
