import React from "react"
import './index.css'

const InputText = ( { label }) => {
    return(
        <div className="campo-input">
            <label>{ label }</label>
            <input type="text" />
        </div>
    )
}

export default InputText