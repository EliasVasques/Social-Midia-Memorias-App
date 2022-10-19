import React from "react"
import { useDispatch } from 'react-redux'

import './index.css'
import { pegarMemorias } from "../../redux/pegarMemoriasthunk"
import { setEditando } from '../../redux/editandoSlicer'

const Post = ({ memoria }) => {

    const dispatch = useDispatch()

    const deletarMemoria = () => {
        fetch(`http://localhost:5000/api/memorias/${memoria._id}`, {
            method: 'DELETE'
        })
        dispatch(pegarMemorias())
    }

    const darLike = async () => {
        const body = { ...memoria, like: memoria.like + 1}
        fetch(`http://localhost:5000/api/memorias/${memoria._id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(() => {
            dispatch(pegarMemorias())   
        })
    }

    const editarMemoria = () => {
        dispatch(setEditando(memoria))
    }

    return(
        <div className="post">
            <div className="imagem" style={{ 'backgroundImage': `url(${memoria.imagem}` }}>
               <div>
                   <p className="usuario">{ memoria.criador }</p>
                   <ion-icon onClick={editarMemoria} name="ellipsis-horizontal-outline"></ion-icon>
               </div>
               <p className="tempo-atras">{ memoria.updatedAt.slice(0, 10) }</p>
            </div>
            
            <div className="textos">
                <p>{ memoria.tags.split(',').map((tag) => '#' + tag).join(' ') }</p>
                <h3>{ memoria.titulo }</h3>
                <p>{ memoria.texto }</p>
                <div className="botoes-rodape">
                    <div className="like">
                        <ion-icon onClick={darLike} name="thumbs-up-sharp"></ion-icon> 
                        <span>LIKE { memoria.like }</span> 
                    </div>
                    <div>
                        <ion-icon onClick={deletarMemoria} name="trash-sharp"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post