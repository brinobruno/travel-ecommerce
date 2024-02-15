'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { constants } from '@/utils/constants'

import cartReducer from '../cart/reducer'
import localStorageMiddleware from './localStorageMiddleware'

const loadInitialState = () => {
  if (typeof window !== 'undefined') {
    const storedState = localStorage.getItem(constants.LOCAL_STORAGE_KEY)
    if (storedState) {
      try {
        return { cart: JSON.parse(storedState) }
      } catch (error) {
        console.error('Failed to parse stored state:', error)
      }
    }
    return undefined // Return undefined if no state is found or parsing fails
  }
}

const preloadedState = loadInitialState()

const rootReducer = combineReducers({
  cart: cartReducer,
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState, // Pass the loaded state to the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(localStorageMiddleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
