import React, { useEffect, useState } from "react"

import Post from './componentes/Post'
import Form from './componentes/Form'

const App = () => {

  const [memorias, setMemorias] = useState(null)

  const setarMemorias = async () => {
    await fetch('http://localhost:5000/api/memorias')
      .then((resposta) => resposta.json()).then((memorias) => setMemorias(memorias))
  } 

  useEffect(() => {
    setarMemorias()
  }, [])
  
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
        <Form />
      </div>
    </div>
  )
}

export default App