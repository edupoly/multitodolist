import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { boardapi } from '../features/muiltytodos/boardapi'

export const store = configureStore({
  reducer: {
    [boardapi.reducerPath]:boardapi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boardapi.middleware),
})

setupListeners(store.dispatch)