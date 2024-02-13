import { Middleware } from 'redux'

import { CartState } from '../cart/reducer'
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../cart/types'

const LOCAL_STORAGE_KEY = 'cart'

const localStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action: unknown) => {
    const result = next(action)

    // @ts-expect-error action is of type unknown
    if ([ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART].includes(action.type)) {
      // After the state has been updated, save it to localStorage
      const state = storeAPI.getState()
      const cartState: CartState = state.cart

      const serializedState = JSON.stringify(cartState)
      localStorage.setItem(LOCAL_STORAGE_KEY, serializedState)
    }

    return result
  }

export default localStorageMiddleware
