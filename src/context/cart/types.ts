import { Cart, CartItem } from '../../entities'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export type Action =
  | { type: ActionTypes.ADD_TO_CART; payload: CartItem }
  | { type: ActionTypes.REMOVE_FROM_CART; payload: string }

export interface CartContextState {
  cart: Cart
}
