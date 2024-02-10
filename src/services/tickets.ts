import { env } from '@/config/env'
import { ITicket } from '@/entities/ticket'
import { constants } from '@/utils/constants'

export async function fetchTickets(): Promise<ITicket[]> {
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
