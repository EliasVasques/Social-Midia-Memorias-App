import React, { useEffect, useState } from "react"

import Post from './componentes/Post'
import Form from './componentes/Form'


/* prox passo: add tarefas via form */


const App = () => {

  const [memorias, setMemorias] = useState(null)

  const setarMemorias = async () => {
    /*const resposta = await fetch('http://localhost:5000/api/memorias')
    const memorias = await resposta.json()
    if(resposta.ok) setMemorias(memorias)*/
    await fetch('http://localhost:5000/api/memorias')
      .then((resposta) => resposta.json())
      .then((memorias) => setMemorias(memorias))
  } 

  useEffect(() => {
    //http://localhost:3000
    setarMemorias()

  }, [])
  
  return(
    <div className="container">
      {
        memorias && memorias.map(( memoria ) => (
          <Post key={memoria._id} memoria={memoria} />
        ))
      }
     
      <Form />
    </div>
  )
}

export default App