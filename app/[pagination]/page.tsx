// import { Provider } from 'react-redux'

import { Filter } from '@/components/Filter'
import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import TicketsList from '@/components/TicketsList'

import { SearchParams } from '../layout'
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
