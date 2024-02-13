'use client'

import { Provider } from 'react-redux'

import { Filter } from '@/components/Filter'
import TicketsList from '@/components/TicketsList'
import store from '@/context/store/storeConfig'

import { Header } from '../src/components/Header'
import { SearchBar } from '../src/components/SearchBar'
import { SearchParams } from './layout'
import { Container, Wrapper } from './styles'

export default function Home({ params }: SearchParams) {
  return (
    <Provider store={store}>
      <Header />
      <SearchBar />

      <Container>
        <Wrapper>
          <Filter />
          <TicketsList params={params} />
        </Wrapper>
      </Container>
    </Provider>
  )
}
