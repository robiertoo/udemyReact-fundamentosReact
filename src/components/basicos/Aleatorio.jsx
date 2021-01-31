import React from 'react'

export default props => {
    const { max, min } = props;
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return (
        <>
            <p>Valor Máximo: { props.max }</p>    
            <p>Valor Mínimo: { props.min }</p>
            <p>Número Aleatório: <strong>{ aleatorio }</strong></p> 
        </>
    )
}