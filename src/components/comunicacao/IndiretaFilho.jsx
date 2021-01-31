import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = _ => parseInt(Math.random() * (60 - 18) + 18)
    const gerarNerd = _ =>  Math.random() > 0.5

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ _ => cb('João', gerarIdade, gerarNerd) }>
                Fornecer Informações
            </button>
        </div>
    )
}