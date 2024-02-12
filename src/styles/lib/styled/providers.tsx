'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'
import StyledComponentsRegistry from './registry'

const Providers = (props: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default Providers
