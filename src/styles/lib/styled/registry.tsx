'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components'

import GlobalStyles from '@/styles/GlobalStyles'
import theme from '@/styles/theme'

export default function StyledComponentsRegistry({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [styledComponentsStyleSheet, setStyledComponentsStyleSheet] = useState(
    () => new ServerStyleSheet(),
  )

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  )
}
