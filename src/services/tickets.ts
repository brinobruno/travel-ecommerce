import { env } from '@/config/env'
import { Ticket } from '@/entities/ticket'
import { constants } from '@/utils/constants'

const getRequestOptions = {
  method: 'GET',
  next: {
    revalidate: constants.REVALIDATE_FREQUENCY,
  },
}

export async function fetchTickets(): Promise<Ticket[]> {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/tickets`,
      getRequestOptions,
    )
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`,
      )
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching the tickets:', error)
    throw error
  }
}

export async function fetchTicket(ticketId: string): Promise<Ticket> {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/tickets/${ticketId}`,
      getRequestOptions,
    )
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`,
      )
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching the ticket:', error)
    throw error
  }
}

export const fetchPaginatedTickets = async (page: number, limit: number) => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/tickets?page=${page}&limit=${limit}`,
      getRequestOptions,
    )

    return await response.json()
  } catch (error) {
    console.error('Error fetching paginated tickets:', error)
    throw error
  }
}
