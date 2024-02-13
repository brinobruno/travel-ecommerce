'use client'

import { Provider } from 'react-redux'

import { Filter } from '@/components/Filter'
import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import TicketsList from '@/components/TicketsList'
import store from '@/context/store/storeConfig'

import { SearchParams } from '../layout'
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
