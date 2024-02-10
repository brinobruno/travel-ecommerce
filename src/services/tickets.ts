import { env } from '@/config/env'
import { Ticket } from '@/entities/ticket'
import { constants } from '@/utils/constants'

export async function fetchTickets(): Promise<Ticket[]> {
  try {
    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/tickets`, {
      method: 'GET',
      next: {
        revalidate: constants.REVALIDATE_FREQUENCY,
      },
    })
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`,
      )
    }

    const tickets = await response.json()

    return tickets
  } catch (error) {
    console.error('Error fetching the tickets:', error)
    throw error
  }
}

export async function fetchTicket(ticketId: string): Promise<Ticket> {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/tickets/${ticketId}`,
      {
        method: 'GET',
        next: {
          revalidate: constants.REVALIDATE_FREQUENCY,
        },
      },
    )
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`,
      )
    }

    const ticket = await response.json()

    return ticket
  } catch (error) {
    console.error('Error fetching the ticket:', error)
    throw error
  }
}
