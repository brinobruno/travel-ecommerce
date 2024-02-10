import { Cart } from './cart'
import { Ticket } from './ticket'

export type CartItem = {
  id: string
  cartId: string
  quantity: number
  subTotal: number
  ticket: Ticket
  ticketId: string
  cart: Cart
}
