import { createSlice } from '@reduxjs/toolkit'

import { pegarMemorias } from './pegarMemoriasthunk';

/*
 { _id: "1", updatedAt: "", criador: "Dave Patrick", titulo: "em Las Vegas", tags: "#viajando", texto: "..." },
  { _id: "2", updatedAt: "", criador: "Dave Patrick", titulo: "em Las Vegas", tags: "#viajando", texto: "..." },
*/

export const memoriasSlicer = createSlice({
  name: 'memorias',
  initialState: {
    posts: [],
    loading: false
  },
  reducers: {
    
  },
  extraReducers: {
    [pegarMemorias.fulfilled]: (state, action) => {
      state.loading = false
      state.posts = action.payload
    },
    [pegarMemorias.rejected]: (state) => {
      state.loading = false
    },
    [pegarMemorias.pending]: (state) => {
      state.loading = true
    }
  }
})

export const { } = memoriasSlicer.actions

export default memoriasSlicer.reducer