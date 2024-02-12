'use client'

import styled from 'styled-components'

import { FlexBetween, FlexCenter } from '@/styles/shared'

export const Container = styled(FlexCenter)`
  width: 100%;
`

export const Wrapper = styled(FlexBetween)`
  gap: ${({ theme }) => theme.spacing.dashboardGap};

  max-width: ${({ theme }) => theme.layout.container};
  width: 100%;
  margin: 36px ${({ theme }) => theme.spacing.m} 24px;
`
