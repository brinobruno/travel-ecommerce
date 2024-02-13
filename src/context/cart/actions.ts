'use client'

import { Action } from 'redux'

import { CartItem } from '@/entities'

import * as actionTypes from './types'

export interface AddItemToCartAction extends Action {
  type: typeof actionTypes.ADD_ITEM_TO_CART
  payload: CartItem
}

export interface RemoveItemFromCartAction extends Action {
  type: typeof actionTypes.REMOVE_ITEM_FROM_CART
  payload: string // id to remove
}

export type CartAction = AddItemToCartAction | RemoveItemFromCartAction

export const addItemToCart = (item: CartItem): AddItemToCartAction => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  payload: item,
})

export const removeItemFromCart = (
  itemId: string,
): RemoveItemFromCartAction => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  payload: itemId,
})
