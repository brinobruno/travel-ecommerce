import { Ticket } from './ticket'

export type CartItem = {
  ticket: Ticket
  quantity: number
  subTotal: number
}
