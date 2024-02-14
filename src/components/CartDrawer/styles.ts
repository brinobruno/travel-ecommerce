import styled, { css } from 'styled-components'

import { FlexCenter } from '../../styles/shared'

interface CartDrawerProps {
  isOpen: boolean
}

const Container = styled.div<CartDrawerProps>`
  background: ${({ theme }) => theme.colors.labelPrimary};
  cursor: pointer;

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
    cursor: auto;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    position: absolute;
    top: 82px;
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

const CartWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray100};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.m};

  width: 494px;
  padding: 24px;

  > strong {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    display: inline-block;
    margin-bottom: 12px;
  }
`

const Summary = styled.div`
  button {
    width: 100%;
    margin-top: 24px;
    background: ${({ theme }) => theme.colors.labelPrimary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`

const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;

    p,
    span,
    strong {
      font-size: ${({ theme }) => theme.fontSize.paragraph2};
      line-height: ${({ theme }) => theme.lineHeight.paragraph2};

      &.discount {
        color: ${({ theme }) => theme.colors.brandLabelPrimary};
      }

      &.highlight {
        color: ${({ theme }) => theme.colors.labelPrimary};
        font-size: ${({ theme }) => theme.fontSize.header2};
        line-height: ${({ theme }) => theme.lineHeight.header2};
      }
    }

    p,
    span {
      color: ${({ theme }) => theme.colors.brandSecondary};
    }

    strong {
      color: ${({ theme }) => theme.colors.gray100};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`

export { Container, CartAmount, CartWrapper, Summary, Values }
