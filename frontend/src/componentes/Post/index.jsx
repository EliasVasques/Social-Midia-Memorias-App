import React from "react"
import { useDispatch } from 'react-redux'

import { pegarMemorias } from "../../redux/pegarMemoriasthunk"
import { setEditando } from '../../redux/editandoSlicer'
import './index.css'

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

    const moduloNumero = (numero) => {
        if(numero < 0) return numero * -1
        return numero
    }

    const getTempoAtras = () => {       
        let ultUpdate = memoria.updatedAt.slice(0, 10) // pega só a data
        ultUpdate = ultUpdate.split('-') // transforma num array
        ultUpdate = ultUpdate.map((valor) => Number(valor)) // para inteiro

        const d = new Date()
        const hoje = [ d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate() ]

        if(ultUpdate[0] !== hoje[0]) 
            return `${moduloNumero(hoje[0] - ultUpdate[0])} anos atrás`
        else if(ultUpdate[1] !== hoje[1]) 
            return `${moduloNumero(hoje[1] - ultUpdate[1])} meses atrás`
        else if(ultUpdate[2] !== hoje[2]) 
            return `${ moduloNumero(hoje[2] - ultUpdate[2])} dias atrás`
        else return 'hoje'
    }

    const getTags = () => {
        if(memoria.tags === "") return "" 
        else return memoria.tags.split(',').map((tag) => '#' + tag).join(' ')
    }

    const urlImagemDefault = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAMAAABCfAldAAAAY1BMVEUiIiL///8fHx/r6+szMzMbGxvPz88LCwsSEhLU1NSVlZWFhYUAAABwcHCRkZEXFxcpKSn5+flZWVl/f3/a2trz8/NnZ2fg4OA9PT23t7dTU1OcnJx2dnbAwMCjo6OsrKxHR0e3rdh5AAAB2UlEQVR4nO2Z3Y6CMBBGsQgtMFr+VERU3v8pt7QguJs1cuPU5Ds3mkLCyTd0WmsQAAAAAAAAAAAAAAAAAAAA+IVYCQyfUVWdrKLu9EcFZbpZSaYg+IWCh/AtDmyCVb59gyBlE9zJd/oL7fkE7UOFktHLe5kFSXdZSy/6MLOgygrzLc7/D5FXUB1dF7kunq+eXXgF6TT2ueNjKZPdmbwRFE04CqaTlNiGRbssuCeCezleorN5JZcRMpc4HgXLMTS1swVf6PAK6tb5nccAhbKRJnJxL2+bkWVtFuXbVFO6O+FuLjJ3ozbvYZObwISOpgIbTvmjdXMLBm4/T901IEHTnJlnNb+gRfWDhCuw3V5toilCLwRFlAwDdWFd7Pf7FKEXgkPzm4iptJ+99kdQdrNf0URONyFvBHVzmAVTGUTNZnGZX1Bou2MIb7a/DLnRxQ6QJ4Jjcz5SW2+KcnjzhLSRVuSFILnmbBYTTZeLS40yG+FWeCCo28M8JeS0JEf1o9VwC7ota9g/7/ml22k3Ebug6PeZoZS/7qDKDvMLmgkx8PfsSg3DQ6ycgr7/cPf+6MP7w6M1QPDLBFWVxKtIdp89RDdr2UoY/igBAAAAAAAAAAAAAAAAAAD4an4AXoMgxTmNQysAAAAASUVORK5CYII='
    
    return(

        <div className="post">
            <div className="imagem" 
                style={ memoria.imagem ? { 'backgroundImage': `url(${memoria.imagem}` } 
                : {'backgroundImage': `url(${urlImagemDefault})`}}
            >
               <div>
                   <p className="usuario">{ memoria.criador }</p>
                   <ion-icon onClick={editarMemoria} name="ellipsis-horizontal-outline"></ion-icon>
               </div>
               <p className="tempo-atras">{ getTempoAtras() }</p>
            </div>
            
            <div className="conteudo">
                <div className="textos">
                    <p>{ getTags() }</p>
                    <h3>{ memoria.titulo }</h3>
                    <p>{ memoria.texto }</p>
                </div>
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