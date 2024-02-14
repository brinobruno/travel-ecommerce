import styled from 'styled-components'

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  div {
    background: ${({ theme }) => theme.colors.brandBlue};
    width: 40px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    span {
      color: ${({ theme }) => theme.colors.gray10};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.gray40};
  }

  strong {
    color: ${({ theme }) => theme.colors.brandBlack};
    padding-right: 4px;
  }

  span,
  strong {
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    line-height: ${({ theme }) => theme.lineHeight.paragraph3};
  }
`
