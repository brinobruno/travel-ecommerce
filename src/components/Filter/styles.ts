'use client'

import styled from 'styled-components'

import { Card, FlexCenter } from '@/styles/shared'

interface ProgressProps {
  percentage: number
}

const Container = styled(Card)`
  width: 33%;
  padding: 24px 24px 12px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: -12px;

  span {
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    line-height: ${({ theme }) => theme.lineHeight.paragraph3};
    font-weight: ${({ theme }) => theme.fontWeight.book};
    color: ${({ theme }) => theme.colors.labelSecondary};
  }
`

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  > strong {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 6px;
  }
`

const FilterItemWrap = styled(FilterItem)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 6px;
`

const PriceRange = styled(FilterItemWrap)`
  button {
    max-width: 150px;
    width: 100%;
    padding: 8px;
  }
`

const PropertyTier = styled(FilterItemWrap)`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray10};
    padding: 4px;

    span {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.paragraph3};
      line-height: ${({ theme }) => theme.lineHeight.paragraph3};
      color: ${({ theme }) => theme.colors.gray30};

      display: inline-block;
      margin-left: 10px;
    }
  }
`

const Amenities = styled(FilterItem)`
  gap: 12px;
`

const CheckBox = styled(FlexCenter)`
  gap: 10px;

  div {
    height: 20px;
    width: 20px;

    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.gray20};
    cursor: pointer;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    line-height: ${({ theme }) => theme.lineHeight.paragraph3};
    font-weight: ${({ theme }) => theme.fontWeight.book};
  }
`

const PropertyTypes = styled(FilterItem)`
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${({ theme }) => theme.colors.gray20};
    border: 1px solid ${({ theme }) => theme.colors.gray20};
    border-radius: 2px;
    padding: 8px;
    width: 100%;

    span {
      font-size: ${({ theme }) => theme.fontSize.paragraph3};
      line-height: ${({ theme }) => theme.lineHeight.paragraph3};
      font-weight: ${({ theme }) => theme.fontWeight.book};
    }

    &.active {
      color: ${({ theme }) => theme.colors.brandBlue};
      border: 1px solid ${({ theme }) => theme.colors.brandBlue};
    }
  }
`

const ReviewScore = styled(FilterItem)`
  gap: 12px;
`

const Review = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  span {
    font-size: ${({ theme }) => theme.fontSize.paragraph4};
    line-height: ${({ theme }) => theme.lineHeight.paragraph4};
  }

  > span {
    color: ${({ theme }) => theme.colors.gray70};
  }
`

const ProgressBar = styled.div`
  width: 59%;
  background: ${({ theme }) => theme.colors.labelTerciary};
  display: flex;
  flex-shrink: 0;

  &,
  & div {
    height: 30px;
  }
`

const Progress = styled.div<ProgressProps>`
  display: flex;
  padding: 8px;

  width: ${(props) => props.percentage}%;
  background: ${({ theme }) => theme.colors.support30};

  span {
    color: ${({ theme }) => theme.colors.white};

    &.hidden {
      visibility: hidden;
      user-select: none;
    }
  }
`

const Separator = styled.div`
  height: 1px;
  width: 100%;
  margin: 24px 0;
  background: ${({ theme }) => theme.colors.gray10};
`

export {
  Container,
  Header,
  FilterItem,
  FilterItemWrap,
  PriceRange,
  PropertyTier,
  Amenities,
  PropertyTypes,
  ReviewScore,
  Review,
  ProgressBar,
  Progress,
  CheckBox,
  Separator,
}
