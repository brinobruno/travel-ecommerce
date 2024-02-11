'use client'

import { fetchTickets } from '@/services/tickets'

import { Container } from './styles'

export async function TicketList() {
  const tickets = await fetchTickets()

  return (
    <Container>
      <h1>TicketList</h1>

      {tickets.map((ticket) => (
        <p key={ticket.id}>{ticket.name}</p>
      ))}
    </Container>
  )
}
