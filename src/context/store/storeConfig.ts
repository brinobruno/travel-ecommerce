import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { cartReducer } from '@/context/cart/reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type AppStore = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch