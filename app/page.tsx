// import { Provider } from 'react-redux'

import { Filter } from '@/components/Filter'
import TicketsList from '@/components/TicketsList'

import { Header } from '../src/components/Header'
import { SearchBar } from '../src/components/SearchBar'
import { SearchParams } from './layout'
import { Container, Wrapper } from './styles'

export default function Home({ params }: SearchParams) {
  return (
    <>
      <Header />
      <SearchBar />

      <Container>
        <Wrapper>
          <Filter />
          <TicketsList params={params} />
        </Wrapper>
      </Container>
    </>
  )
}
