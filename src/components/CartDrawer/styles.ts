import styled, { css } from 'styled-components'

import { FlexCenter } from '../../styles/shared'

interface CartDrawerProps {
  isOpen: boolean
}

const Container = styled.div<CartDrawerProps>`
  background: ${({ theme }) => theme.colors.labelPrimary};

  height: 50px;
  min-width: 98px;
  padding: 4px 12px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  position: relative;

  .cart-modal {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    color: ${({ theme }) => theme.colors.gray100};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow.m};

    padding: 24px;

    position: absolute;
    bottom: -48px;
    right: 0;

    z-index: 100;

    ${(props) =>
      props.isOpen &&
      css`
        visibility: visible;
        opacity: 1;
      `}
  }
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
