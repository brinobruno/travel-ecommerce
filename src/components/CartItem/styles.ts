import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 18px;
`

export const ImageContainer = styled.div`
  &,
  img {
    width: 58px;
    height: 62px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    background: unset;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span,
  strong {
    color: ${({ theme }) => theme.colors.brandSecondary};
  }

  strong {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    font-weight: ${({ theme }) => theme.fontWeight.book};
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
  }
`

export const InfoDetails = styled.div`
  width: 100%;
`

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`
