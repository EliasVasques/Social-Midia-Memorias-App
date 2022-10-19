import { createSlice } from '@reduxjs/toolkit'

import { pegarMemorias } from './pegarMemoriasthunk';

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