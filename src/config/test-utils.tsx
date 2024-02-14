import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/GlobalStyles'
import theme from '@/styles/theme'

// @ts-expect-error typing tbd
export const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

// @ts-expect-error typing tbd
const customRender = (ui, options) =>
  render(ui, { wrapper: AppProviders, ...options })

// override render method
export { customRender as render }
