import { CartItem } from './cart-item'

export type Cart = {
  id: string
  cartItems: CartItem[]
  discountAmount: number
  subTotal: number
  total: number
}
