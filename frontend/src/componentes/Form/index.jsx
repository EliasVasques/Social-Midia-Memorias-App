import React from "react"
import './index.css'
import InputText from "../InputText"

const Form = () => {
    return(
        <form>
            <h3>Criar Memória</h3>

            <div className="campo-input">
                <label>Criador</label>
                <input type="text" />
            </div>

            <div className="campo-input">
                <label>Título</label>
                <input type="text" />
            </div>

            <div className="campo-input">
                <label>Texto</label>
                <input type="text" />
            </div>

            <div className="campo-input">
                <label>Tags</label>
                <input type="text" />
            </div>

            <div className="campo-imagem">
                <input type="file" />
            </div>

            <button type="submit">Criar</button>
            <button>Limpar</button>
        </form>
    )
}

export default Form