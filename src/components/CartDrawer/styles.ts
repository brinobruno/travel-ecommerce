import styled from 'styled-components'

import { FlexCenter } from '@/styles/shared'

const Container = styled.button`
  background: ${({ theme }) => theme.colors.labelPrimary};

  height: 50px;
  min-width: 98px;
  padding: 4px 12px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

const CartAmount = styled(FlexCenter)`
  height: 32px;
  width: 32px;

  background: ${({ theme }) => theme.colors.brandBlue};
  border-radius: 100%;

  > span {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.paragraph1};
    line-height: ${({ theme }) => theme.lineHeight.paragraph1};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`

export { Container, CartAmount }
