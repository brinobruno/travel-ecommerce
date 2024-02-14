'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Loader } from '@/components/Loader'
import { TicketDetails } from '@/components/TicketDetails'
import { Ticket } from '@/entities'
import { fetchTicket } from '@/services/tickets'

import { Container, Wrapper } from './../../styles'

export default function Page() {
  const { id: ticketId } = useParams()
  const [ticket, setTicket] = useState<Ticket | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTicket = async () => {
      try {
        const fetchedTicket = await fetchTicket({ ticketId })
        setTicket(fetchedTicket)
      } catch (error) {
        console.error('Error fetching ticket details:', error)
      } finally {
        setLoading(false)
      }
    }

    setTicket(null)
    setLoading(true)
    getTicket()
  }, [ticketId])

  return (
    <Container>
      <Wrapper>
        {loading && <Loader />}

        {!loading && ticket ? (
          <TicketDetails
            id={ticket.id}
            key={ticket.id}
            name={ticket.name}
            description={ticket.description}
            location={ticket.location}
            image={ticket.image}
            price={ticket.price}
            rating={ticket.rating}
            createdAt={ticket.createdAt}
            updatedAt={ticket.updatedAt}
          />
        ) : null}

        {!loading && !ticket ? <p>No ticket found...</p> : null}
      </Wrapper>
    </Container>
  )
}
