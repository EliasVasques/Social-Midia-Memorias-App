import { createSlice } from '@reduxjs/toolkit'

export const editandoSlicer = createSlice({
  name: 'editando',
  initialState: { memoria: null },
  reducers: {
    setEditando(state, action) {
        state.memoria = action.payload
     },
    }
})

export const { setEditando } = editandoSlicer.actions

export default editandoSlicer.reducer