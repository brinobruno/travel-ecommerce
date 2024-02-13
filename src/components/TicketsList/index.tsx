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
      <section>
        <h1>Tickets</h1>

        <ul>
          {loading ? (
            <Loader />
          ) : (
            paginatedTickets.map((ticket) => (
              <li key={ticket.id}>
                <h3>{ticket.name}</h3>
              </li>
            ))
          )}
        </ul>

        {loading ? (
          ''
        ) : (
          <Pagination
            pages={Math.ceil(totalTicketsAmount / constants.PER_PAGE)}
            active={Number(currentPage || '1')}
          />
        )}
      </section>
    )
  } catch (error) {
    console.error('Error fetching or rendering tickets:', error)
    return <p>Error fetching tickets. Please try again later.</p>
  }
}

export default TicketsList
