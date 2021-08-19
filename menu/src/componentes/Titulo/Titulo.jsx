import React from 'react'

import Header from './Titulo.jsx'

export default function Titulo(props) {
    return (

        <div className="titulo">
           <h3>
               {props.texto}
           </h3>
        </div>

    )
}