import React, { useEffect, useState } from "react"


import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'

import Post from './componentes/Post'
import Form from './componentes/Form'

const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  let editando = null
  const buscadorParametros = new URLSearchParams(location.search)
  if(buscadorParametros.has('editando')) editando = buscadorParametros.get('editando')

  const [memorias, setMemorias] = useState(null)

  const setarMemorias = async () => {
    await fetch('http://localhost:5000/api/memorias')
      .then((resposta) => resposta.json()).then((memorias) => setMemorias(memorias))
  } 

  useEffect(() => {
    setarMemorias()
  }, [])

  /*<span onClick={() => dispatch(increment())}>+</span>
      <div>Count: { count }</div>
      <span onClick={() => dispatch(decrement())}>-</span>*/
  
  return(
    <div className="container">

      <div class="posts">
        {
          memorias && memorias.map(( memoria ) => (
            <Post key={memoria._id} memoria={memoria} />
          ))
        }
      </div>

      
     
      <div class="container-form">
        <Form editando={editando} />
      </div>
    </div>
  )
}

export default App