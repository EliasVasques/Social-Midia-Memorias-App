import React from 'react'
import { useState, useRef } from "react"
import { useDispatch } from 'react-redux'

import { pegarMemorias } from '../../redux/pegarMemoriasthunk'

import './index.css'

const Form = () => {

    /*const filesElement = useRef(null)*/

    const dispatch = useDispatch()

    const [criador, setCriador] = useState('')
    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')
    const [tags, setTags] = useState('')
    const [imagem, setImagem] = useState('')


    const enviar = (e) => {
        e.preventDefault()
        
        //const memoria = { criador, titulo, texto, tags, imagem }
        
        const memoria = new FormData();
        memoria.append("criador", criador);
        memoria.append("titulo", titulo);
        memoria.append("texto", texto);
        memoria.append("tags", tags);
        memoria.append("imagem", imagem);

        fetch('http://localhost:5000/api/memorias', {
            method: 'POST',
            body: /*JSON.stringify(*/memoria/*)*/,
            headers: {
                /*'Content-Type': 'application/json',*/
                "Content-Type": "form-data"
            }
        }) 
        .then(() => {
            dispatch(pegarMemorias())
        })
    }

    const limpar = () => {
        setCriador('')
        setTitulo('')
        setTexto('')
        setTags('')
    }


    const setarImagem = (e) => {
        const arquivo = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(arquivo);

        setImagem(reader.result);
        console.log(imagem);
    };

    return(
        <form onSubmit={enviar} encType="multipart/form-data">

            <h3>Criar Memória</h3>

            <div className="campo-input">
                <label>Criador</label>
                <input type="text" onChange={(e) =>  setCriador(e.target.value) } value={criador} />
            </div>

            <div className="campo-input">
                <label>Título</label>
                <input type="text" onChange={(e) => setTitulo(e.target.value)} value={titulo} />
            </div>

            <div className="campo-input">
                <label>Texto</label>
                <input type="text" onChange={(e) => setTexto(e.target.value)} value={texto} />
            </div>

            <div className="campo-input">
                <label>Tags</label>
                <input type="text" onChange={(e) => setTags(e.target.value)} value={tags} />
            </div>
            
            <div className='campo-imagem'>
                <label>Imagem</label>
                <input type="file" name="imagem" /*multiple ref={filesElement}*/ onChange={setarImagem} />
            </div>
            
            <button type="submit">Criar</button>
            <button onClick={limpar}>Limpar</button>
        </form>
    )
}

export default Form