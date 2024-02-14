'use client'

import { Filter } from '@/components/Filter'
import TicketsList from '@/components/TicketsList'

import { SearchParams } from './layout'
import { Container, Wrapper } from './styles'

export default function Home({ params }: SearchParams) {
  return (
    <Container>
      <Wrapper>
        <Filter />
        <TicketsList params={params} />
      </Wrapper>
    </Container>
  )
}
