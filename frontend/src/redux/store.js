import { configureStore } from '@reduxjs/toolkit'
import memoriasReducer from './memoriasSlicer'

export const store = configureStore({
  reducer: {
    memorias: memoriasReducer,
  },
})

