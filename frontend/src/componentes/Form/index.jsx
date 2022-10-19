import React, { useEffect } from 'react'
import { useState, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { pegarMemorias } from '../../redux/pegarMemoriasthunk'
import { setEditando } from '../../redux/editandoSlicer'


import './index.css'

const Form = () => {

    const dispatch = useDispatch()

    const [criador, setCriador] = useState('')
    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')
    const [tags, setTags] = useState('')
    const [imagem, setImagem] = useState('')

    const memoriaEditando = useSelector((state) => state.editando)

    useEffect(() => {
        if(memoriaEditando.memoria) {
            setCriador(memoriaEditando.memoria.criador)
            setTitulo(memoriaEditando.memoria.titulo)
            setTexto(memoriaEditando.memoria.texto)
            setTags(memoriaEditando.memoria.tags)
            setImagem(memoriaEditando.memoria.imagem)
        }
    }, [ memoriaEditando ])


    const enviar = (e) => {
        e.preventDefault()
        
        const memoria = { criador, titulo, texto, tags, imagem }

        if(memoriaEditando.memoria) {
            fetch(`http://localhost:5000/api/memorias/${memoriaEditando.memoria._id}`, {
                method: 'PUT',
                body: JSON.stringify(memoria),
                headers: {
                    'Content-Type': 'application/json',
                }
            }) 
            .then(() => {
                dispatch(pegarMemorias())
                dispatch(setEditando(null))
            })
        } else {
            fetch('http://localhost:5000/api/memorias', {
                method: 'POST',
                body: JSON.stringify(memoria),
                headers: {
                    'Content-Type': 'application/json',
                }
            }) 
            .then(() => {
                dispatch(pegarMemorias())
            })
        }
        limpar()
    }

    const limpar = () => {
        setCriador('')
        setTitulo('')
        setTexto('')
        setTags('')
        setImagem('')
    }

    return(
        <form onSubmit={enviar}>

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
            
            <div className="campo-input">
                <label>Imagem (URL)</label>
                <input type="text" onChange={(e) => setImagem(e.target.value)} value={imagem} />
            </div>
            
            <button type="submit">{ memoriaEditando.memoria ? 'Editar' : 'Criar' }</button>
            <button onClick={limpar}>Limpar</button>
        </form>
    )
}

export default Form