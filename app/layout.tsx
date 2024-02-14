'use client'

import { Provider } from 'react-redux'

import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import store from '@/context/store/storeConfig'

// import { AntdRegistry } from '@ant-design/nextjs-registry'
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
        {/* <AntdRegistry> */}
        <Providers>
          <GlobalStyles />
          <Provider store={store}>
            <Header />
            <SearchBar />

            {children}
          </Provider>
        </Providers>
        {/* </AntdRegistry> */}
      </body>
    </html>
  )
}
