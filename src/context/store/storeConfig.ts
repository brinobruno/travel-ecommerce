'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import cartReducer from '../cart/reducer'
import localStorageMiddleware from './localStorageMiddleware'

const rootReducer = combineReducers({
  cart: cartReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(localStorageMiddleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
