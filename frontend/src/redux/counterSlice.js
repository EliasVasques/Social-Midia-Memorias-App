import { createSlice } from '@reduxjs/toolkit'

/*
value: [['Elias', 'Férias em Morro de São Paulo', 'Eu e Nany...', '#luademel', '132123'],
       ['Elias', 'Férias em Morro de São Paulo', 'Eu e Nany...', '#luademel', '1321321']
],
*/


const setInicialState = async () => { 
  const resposta = await fetch('http://localhost:5000/api/memorias')
  const memorias = await resposta.json()

  if(resposta.ok) {
    const formatoArray = memorias.map((memoria) => {
      return [ memoria.criador, memoria.titulo, memoria.texto, memoria.tags, memoria._id ]
    })
    return formatoArray
  }
} 

const initialState = setInicialState()

console.log(initialState)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer