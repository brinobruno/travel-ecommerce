import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  width: 100%;
  padding: 24px;

  a {
    color: ${({ theme }) => theme.colors.labelPrimary};

    &.active {
      color: ${({ theme }) => theme.colors.gray90};
    }

    &.disabled {
      pointer-events: none;
      color: ${({ theme }) => theme.colors.gray50};
    }
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    line-height: ${({ theme }) => theme.lineHeight.paragraph3};
    color: ${({ theme }) => theme.colors.gray50};
  }
`

export const NavNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    line-height: ${({ theme }) => theme.lineHeight.paragraph2};
  }
`
