import React from "react"
import './index.css'

const Post = ({ memoria }) => {
    return(
        <div className="post">
            <div className="imagem">
               <div>
                   <p className="usuario">{ memoria.criador }</p>
                   <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
               </div>
               <p className="tempo-atras">{ memoria.updatedAt }</p>
            </div>
            
            <div className="textos">
                <p>{ memoria.tags }</p>
                <h3>{ memoria.titulo }</h3>
                <p>{ memoria.texto }</p>
                <div>
                    <ion-icon name="thumbs-up-sharp"></ion-icon>
                    <ion-icon name="trash-sharp"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Post