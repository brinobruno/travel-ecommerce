import { ThemeProvider } from 'styled-components'
import theme from './../src/styles/theme'
import GlobalStyles from './../src/styles/GlobalStyles'
import React from 'react'

export const decorators = [
  (Story: () => void) => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {Story()}
      </>
    </ThemeProvider>
  ),
]