import { Cart } from '../../entities'
import { Action, ActionTypes } from './types'

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
