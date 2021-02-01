import React, { useState } from 'react'

export default props => {
    const[valor, setValor] = useState('Inicial')
    const quandoMudar = e => {
        setValor(e.currentTarget.value)
    }

    return(
        <div>
            <h2>{ valor }</h2>
            <div style={{
                display : 'flex',
                flexDirection : "column"
            }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <input value={undefined} />
            </div>
        </div>
    )
}