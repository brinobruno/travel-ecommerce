'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Ticket } from '@/entities'
import { fetchPaginatedTickets } from '@/services/tickets'
import { constants } from '@/utils/constants'
import getTotalAmountOfTickets from '@/utils/getTotalTickets'

import { SearchParams } from '../../../app/layout'
import { Loader } from '../Loader'
import Pagination from '../Pagination'
import { TicketListItem } from '../TicketListItem'
import { Container } from './styles'

const TicketsList = ({ params }: SearchParams) => {
  const [totalTicketsAmount, setTotalTicketsAmount] = useState(0)
  const [paginatedTickets, setPaginatedTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)

  const queryParam = useSearchParams()

  const currentSearch = queryParam.get('search')
  const currentPage = params.pagination

  try {
    useEffect(() => {
      const getTotTickets = async () => {
        const totalTicketsResponse = await getTotalAmountOfTickets()
        const paginatedTicketsResponse = await fetchPaginatedTickets({
          page: Number(currentPage) || 1,
          limit: constants.PER_PAGE,
          search: currentSearch ?? '',
        })

        setTotalTicketsAmount(totalTicketsResponse)
        setPaginatedTickets(paginatedTicketsResponse)
        setLoading(false)
      }

      getTotTickets()
    }, [])

    return (
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <ul>
            {paginatedTickets.map((ticket) => (
              <TicketListItem
                key={ticket.id}
                id={ticket.id}
                image={ticket.image}
                name={ticket.name}
                location={ticket.location}
                price={ticket.price}
                rating={ticket.rating}
              />
            ))}
          </ul>
        )}

        {loading ? (
          ''
        ) : (
          <Pagination
            pages={Math.ceil(totalTicketsAmount / constants.PER_PAGE)}
            active={Number(currentPage || '1')}
          />
        )}
      </Container>
    )
  } catch (error) {
    console.error('Error fetching or rendering tickets:', error)
    return <p>Error fetching tickets. Please try again later.</p>
  }
}

export default TicketsList
