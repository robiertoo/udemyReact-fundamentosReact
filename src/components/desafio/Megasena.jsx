import React from 'react'
import Numeros from './Numeros'

export default props => {
    const gerarNumeros = quantidade => {
        let array = []
        let i = 0
        while (i < quantidade) {
            let numero = i == 0 
            ? gerarNumeroAleatorio(1, 10 * 1) 
            : gerarNumeroAleatorio(array[i - 1] + 1, 10 * i)
            array.push(numero)
            i++
        }
        return array
    }
    
    const gerarNumeroAleatorio = (min, max) => {
        let numero = parseInt(Math.random() * (max - min) + min)
        return numero
    }
    
    let numeros = gerarNumeros(6)

    return(
        <div>
            <Numeros array={numeros}/>
        </div>
    )
}