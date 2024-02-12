import { fetchTickets } from '@/services/tickets'

const getTotalAmountOfTickets = async () => {
  const tickets = await fetchTickets()
  return tickets.length
}

export default getTotalAmountOfTickets
