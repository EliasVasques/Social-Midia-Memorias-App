import { configureStore } from '@reduxjs/toolkit'
import memoriasReducer from './memoriasSlicer'
import editandoReducer from './editandoSlicer'


export const store = configureStore({
  reducer: {
    memorias: memoriasReducer,
    editando: editandoReducer,
  },
})

