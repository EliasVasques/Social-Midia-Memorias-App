import React from 'react'
import { useEffect } from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux'

import { pegarMemorias } from '../../redux/pegarMemoriasthunk'

import './index.css'

const Form = () => {

    const dispatch = useDispatch()

    const [criador, setCriador] = useState('')
    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')
    const [tags, setTags] = useState('')
    const [imagem, setImagem] = useState('')

    const enviar = (e) => {
        e.preventDefault()

        const memoria = { criador, titulo, texto, tags, imagem }
        fetch('http://localhost:5000/api/memorias', {
            method: 'POST',
            body: JSON.stringify(memoria),
            headers: {
                'Content-Type': 'application/json'
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
        setImagem('')
    }

    return(
        <form onSubmit={enviar} encType='multipart/form-data'>

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
                <input type="file" name="imagem" onChange={(e) => setImagem(e.target.value)} value={imagem} />
            </div>
            
            <button type="submit">Criar</button>
            <button onClick={limpar}>Limpar</button>
        </form>
    )
}

export default Form