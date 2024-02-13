import { CartItem } from './cart-item'

export type Cart = {
  cartItems: CartItem[]
  discountAmount: number
  subTotal: number
  total: number
}
