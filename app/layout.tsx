'use client'

import dynamic from 'next/dynamic'

import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'

import GlobalStyles from '../src/styles/GlobalStyles'
import Providers from '../src/styles/lib/styled/providers'

export interface SearchParams {
  params: {
    pagination: string
  }
}

const DynamicContextProvider = dynamic(
  () => import('./../src/context/store/provider'),
  {
    ssr: false,
  },
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <GlobalStyles />
          <DynamicContextProvider>
            <Header />
            <SearchBar />

            {children}
          </DynamicContextProvider>
        </Providers>
      </body>
    </html>
  )
}
