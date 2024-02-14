'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 46px;
`

export const Gallery = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 434px;
  margin-bottom: 38px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  button {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`

export const Header = styled.header`
  display: flex;
  gap: 14px;

  margin-bottom: 34px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      font-size: ${({ theme }) => theme.fontSize.paragraph3};
      line-height: ${({ theme }) => theme.lineHeight.paragraph3};
      color: ${({ theme }) => theme.colors.support50};
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 38px;

  h3 {
    margin-bottom: 8px;
  }
`

export const Details = styled.div`
  width: 68%;
`

export const Pricing = styled.aside`
  background: ${({ theme }) => theme.colors.white};
  width: 32%;
  height: fit-content;
  padding: 24px;
`

export const PricingItem = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    gap: 14px;

    div {
      flex-direction: column;
      gap: 2px;
    }

    span,
    strong {
      font-size: ${({ theme }) => theme.fontSize.paragraph2};
      line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    }

    span {
      color: ${({ theme }) => theme.colors.gray40};
    }

    strong {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.brandBlack};
    }
  }
`

export const Summary = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    color: ${({ theme }) => theme.colors.gray40};
  }
`

export const Total = styled.div`
  &,
  div {
    display: flex;
  }

  flex-direction: column;
  gap: 24px;

  div {
    justify-content: space-between;
    align-items: center;

    span {
      font-size: ${({ theme }) => theme.fontSize.paragraph2};
      line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    }

    h2 {
      color: ${({ theme }) => theme.colors.brandBlue};
    }
  }
`

export const Amenities = styled.div`
  &,
  div {
    display: flex;
    align-items: center;
  }

  gap: 14px;
  margin: 24px 0 34px;

  div {
    gap: 8px;
    color: ${({ theme }) => theme.colors.gray40};

    span {
      font-size: ${({ theme }) => theme.fontSize.paragraph3};
      line-height: ${({ theme }) => theme.lineHeight.paragraph3};
    }
  }
`

export const Info = styled.div`
  margin-bottom: 24px;

  p {
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    line-height: ${({ theme }) => theme.lineHeight.paragraph2};
    color: ${({ theme }) => theme.colors.gray40};
  }
`

export const Location = styled.div`
  iframe {
    max-width: 100%;
    max-height: 340px;
    border: 0;
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray10};
  margin: 24px 0;
`
