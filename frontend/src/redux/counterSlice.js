import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

/*const initialState = [
  { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
  { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
];*/

console.log(initialState)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setEstado: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { increment, decrement, setEstado } = counterSlice.actions

export default counterSlice.reducer