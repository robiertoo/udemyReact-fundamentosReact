import React from 'react'
import Bola from './Bola'
import './Bolas.css'

export default props => {
    const { array } = props;

    const bolasJSX = array.map((numero, indice) => {
        return(
            <Bola numero={ numero } key={indice} />
        )
    })

    return(
        <div className='Bolas'>
            { bolasJSX }
        </div>
    )
}