'use client'

import styled, { keyframes } from 'styled-components'
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`

interface DotProps {
  delay: string
}

export const DotWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const Dot = styled.div<DotProps>`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px; /* Animation */
  animation: ${BounceAnimation} 0.8s linear infinite;
  animation-delay: ${(props) => props.delay};
`
