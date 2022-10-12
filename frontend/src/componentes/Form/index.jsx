import React from 'react'
import { useEffect } from 'react'
import { useState } from "react"
import './index.css'

const Form = ({ editando }) => {

    const [memoria, setMemoria] = useState({
        criador: '',
        titulo: '',
        texto: '',
        tags: '',
    })

    const setarMemoriaEditando = async () => {
        await fetch(`http://localhost:5000/api/memorias/${editando}`)
            .then((resposta) => resposta.json())
            .then((memoria) => {
                setMemoria(memoria)
            })
    }

    useEffect(() => {
        if(editando) {
            setarMemoriaEditando()
        }
    }, [])

    const enviar = async (e) => {
        e.preventDefault()
        
        const resposta = await fetch('http://localhost:5000/api/memorias', {
            method: 'POST',
            body: JSON.stringify(memoria),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(resposta)

    }

    return(
        <form onSubmit={enviar}>
            <h3>Criar Memória</h3>

            <div className="campo-input">
                <label>Criador</label>
                <input type="text" onChange={(e) => setMemoria({ ...memoria, criador: e.target.value })} value={memoria.criador} />
            </div>

            <div className="campo-input">
                <label>Título</label>
                <input type="text" onChange={(e) => setMemoria({ ...memoria, titulo: e.target.value })} value={memoria.titulo} />
            </div>

            <div className="campo-input">
                <label>Texto</label>
                <input type="text" onChange={(e) => setMemoria({ ...memoria, texto: e.target.value })} value={memoria.texto} />
            </div>

            <div className="campo-input">
                <label>Tags</label>
                <input type="text" onChange={(e) => setMemoria({ ...memoria, tags: e.target.value })} value={memoria.tags} />
            </div>

            <div className="campo-imagem">
                <input type="file" onChange={(e) => setMemoria({ ...memoria, imagem: e.target.value })} />
            </div>

            <button type="submit">Criar</button>
            <button>Limpar</button>
        </form>
    )
}

export default Form