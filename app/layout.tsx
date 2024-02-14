'use client'

import { Provider } from 'react-redux'

import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import store from '@/context/store/storeConfig'

import GlobalStyles from '../src/styles/GlobalStyles'
import Providers from '../src/styles/lib/styled/providers'

export interface SearchParams {
  params: {
    pagination: string
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <GlobalStyles />
          <Provider store={store}>
            <Header />
            <SearchBar />

            {children}
          </Provider>
        </Providers>
      </body>
    </html>
  )
}
