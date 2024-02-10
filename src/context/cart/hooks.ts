import { useContext } from 'react'

import { CartContext, CartContextDispatch } from '@/context/cart/context'
import { CartContextState } from '@/context/cart/types'

export function useCartState(): CartContextState {
  const { state } = useContext(CartContext)
  if (!state) throw new Error('useCartState must be used within a CartProvider')
  return state
}

export function useCartDispatch(): CartContextDispatch {
  const { dispatch } = useContext(CartContext)
  if (!dispatch)
    throw new Error('useCartDispatch must be used within a CartProvider')
  return dispatch
}
