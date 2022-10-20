import React, { useEffect, useState } from "react"
import { } from './redux/memoriasSlicer'
import { useSelector, useDispatch } from 'react-redux'
import { pegarMemorias } from "./redux/pegarMemoriasthunk"

import Post from './componentes/Post'
import Form from './componentes/Form'
import Navbar from './componentes/Navbar'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(pegarMemorias())
  }, [])

  const memorias = useSelector((state) => state.memorias)

  return(<div>
      <Navbar />
      <div className="container">
        <div class="posts">
          { memorias.posts && memorias.posts.map((memoria) => (
            <Post memoria={memoria} key={memoria._id} />
          )) }
        </div>
        <div class="container-form">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default App