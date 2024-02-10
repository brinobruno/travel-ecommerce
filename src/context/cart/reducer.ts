import { Action, ActionTypes } from '@/context/cart/types'
import { Cart } from '@/entities'

export function cartReducer(state: Cart, action: Action): Cart {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }
    default:
      return state
  }
}
