'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '@/styles/lib/styled/registry'
import theme from '@/styles/theme'

const Providers = (props: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default Providers
