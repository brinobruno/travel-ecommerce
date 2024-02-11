import { Filter } from '../Filter'
import { TicketList } from '../TicketList'
import { Container, Wrapper } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Wrapper>
        <Filter />
        <TicketList />
      </Wrapper>
    </Container>
  )
}
