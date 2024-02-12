import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Action, CartContextState } from './types'
import { Cart } from '../../entities'

import { cartReducer } from './reducer'

export type CartContextDispatch = Dispatch<Action>

const initialState: Cart = {
  id: uuidv4(),
  discountAmount: 0,
  subTotal: 0,
  total: 0,
  cartItems: [],
}

export const CartContext = createContext<{
  state: CartContextState
  dispatch: CartContextDispatch
}>({
  state: { cart: initialState },
  dispatch: () => initialState,
})

export const CartProvider: React.FC<{
  initialCart: Cart
  children: ReactNode
}> = ({ initialCart, children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCart || initialState)

  return (
    <CartContext.Provider value={{ state: { cart: state }, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
