import Pagination from '@/components/Pagination'
import { fetchPaginatedTickets } from '@/services/tickets'
import { constants } from '@/utils/constants'
import getTotalAmountOfTickets from '@/utils/getTotalTickets'

import { SearchParams } from '../../../app/layout'

const TicketsList = async ({ params }: SearchParams) => {
  const currentPage = params.pagination
  const totalTicketsAmount = await getTotalAmountOfTickets()

  const paginatedTickets = await fetchPaginatedTickets({
    page: Number(currentPage) || 1,
    limit: constants.PER_PAGE,
  })

  return (
    <section>
      <h1>Tickets</h1>
      <ul>
        {paginatedTickets.map((ticket) => (
          <li key={ticket.id}>
            <h3>{ticket.name}</h3>
          </li>
        ))}
      </ul>

      <Pagination
        pages={Math.ceil(totalTicketsAmount / constants.PER_PAGE)}
        active={Number(currentPage || '1')}
      />
    </section>
  )
}

export default TicketsList
