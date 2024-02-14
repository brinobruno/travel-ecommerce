'use client'

import styled from 'styled-components'

import { Card } from '../../styles/shared'

export const Container = styled(Card)`
  width: 66%;
  min-height: 100vh;

  ul {
    width: 100%;
    background: ${({ theme }) => theme.colors.background};

    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`
