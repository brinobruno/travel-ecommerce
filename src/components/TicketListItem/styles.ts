'use client'

import styled from 'styled-components'

export const Container = styled.li`
  box-shadow: ${({ theme }) => theme.boxShadow.s};
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  min-height: 232px;

  display: flex;
`

export const ImageContainer = styled.div`
  &,
  img {
    height: 232px;
    width: 214px;

    @media (max-width: 1100px) {
      height: 232px;
      width: 160px;
    }
  }

  img {
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px 24px;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 18px;
  }

  h3 {
    padding-bottom: 8px;
  }
`

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-bottom: 44px;

  p {
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    line-height: ${({ theme }) => theme.lineHeight.paragraph3};
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 154px;
  width: 100%;

  border-left: 1px solid ${({ theme }) => theme.colors.gray10};
  height: 100%;
  padding-left: 24px;
  margin-left: 12px;

  @media (max-width: 1200px) {
    width: fit-content;
  }

  p {
    color: ${({ theme }) => theme.colors.gray40};
    font-size: ${({ theme }) => theme.fontSize.paragraph4};
    line-height: ${({ theme }) => theme.lineHeight.paragraph4};
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    line-height: ${({ theme }) => theme.lineHeight.paragraph3};

    display: inline-flex;
    gap: 2px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.brandBlue};
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    line-height: ${({ theme }) => theme.lineHeight.paragraph3};
    background: ${({ theme }) => theme.colors.brandBlue};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 3px;
    padding: 12px 6px;
    margin-top: 24px;
    width: 100%;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    @media (max-width: 1200px) {
      gap: 2px;
    }
  }
`
