'use client'

import { CartItem } from '@/entities'

import { CartAction } from './actions'
import * as actionTypes from './types'

export interface CartState {
  itemsInCart: CartItem[]
}

const initialState: CartState = {
  itemsInCart: [],
}

const reducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      const existingItemIndex = state.itemsInCart.findIndex(
        (item) => item.ticket.id === action.payload.ticket.id,
      )

      if (existingItemIndex >= 0) {
        // Item exists, update quantity and total price
        const updatedItems = state.itemsInCart.map((item, index) => {
          if (index === existingItemIndex) {
            // Create a new object with updated values
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
              subTotal: item.subTotal + action.payload.subTotal,
            }
          }
          return item
        })
        return {
          ...state,
          itemsInCart: updatedItems,
        }
      } else {
        // Item does not exist, add new item to cart
        return {
          ...state,
          itemsInCart: [...state.itemsInCart, action.payload],
        }
      }
    }
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.ticket.id !== action.payload,
        ),
      }
    default:
      return state
  }
}

export default reducer
