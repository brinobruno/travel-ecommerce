'use client'

import { CartItem } from '@/entities'

import { CartAction } from './actions'
import * as actionTypes from './types'

interface CartState {
  itemsInCart: CartItem[]
}

const initialState: CartState = {
  itemsInCart: [],
}

const reducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload],
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
