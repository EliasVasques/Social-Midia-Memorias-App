import React from "react"
import './index.css'

const Post = () => {
    return(
        <div className="post">
            <div className="imagem">
               <div>
                   <p className="usuario">Elias</p>
                   <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
               </div>
               <p className="tempo-atras">3 horas atrás</p>
            </div>
            
            <div className="textos">
                <p>#Voando</p>
                <h3>De paraquedas em Barramas!</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui provident nisi consequuntur fuga numquam, ad quidem repellat consequatur.</p>
                <div>
                    <ion-icon name="thumbs-up-sharp"></ion-icon>
                    <ion-icon name="trash-sharp"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Post