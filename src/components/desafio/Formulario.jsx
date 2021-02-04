import React from 'react'

export default props => {
    return(
        <div>
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="text" onChange={e => props.mudarTexto(e.currentTarget.value) }/>
        </div>
    )
}