import React from 'react'
import { useState } from "react"
import './index.css'

const Form = () => {

    const [memoria, setMemoria] = useState({
        criador: '',
        titulo: '',
        texto: '',
        tags: '',
    })

    const enviar = async (e) => {
        e.preventDefault()
        
        console.log(memoria)
        
        const resposta = await fetch('http://localhost:5000/api/memorias', {
            method: 'POST',
            body: JSON.stringify(memoria),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }

    return(
        <form onSubmit={enviar}>
            <h3>Criar Memória</h3>

            <div className="campo-input">
                <label>Criador</label>
                <input type="text" onChange={(e) => setMemoria({ ...memoria, criador: e.target.value })} />
            </div>

            <div className="campo-input">
                <label>Título</label>
                <input type="text" onChange={(e) => setMemoria({ ...memoria, titulo: e.target.value })} />
            </div>

            <div className="campo-input">
                <label>Texto</label>
                <input type="text" onChange={(e) => setMemoria({ ...memoria, texto: e.target.value })} />
            </div>

            <div className="campo-input">
                <label>Tags</label>
                <input type="text" onChange={(e) => setMemoria({ ...memoria, tags: e.target.value })} />
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