import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./authSlice"
import { countryApi } from './countrySlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(countryApi.middleware),
})