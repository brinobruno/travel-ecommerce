'use client'

import { Dot, DotWrapper } from './styles'

export const Loader = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  )
}
