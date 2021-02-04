import React, { useState } from 'react'
import Numeros from './Numeros'
import Formulario from './Formulario'
import Botao from './Botao'

export default props => {
    const [numeros, setNumeros] = useState([])
    const [quantidade, setQuantidade] = useState([])

    function gerarNumeros() {
        let array = []
        let i = 0
        while (i < quantidade) {
            let numero = i == 0 
            ? gerarNumeroAleatorio(1, 10 * 1) 
            : gerarNumeroAleatorio(array[i - 1] + 1, 9 * i)
            array.push(numero)
            i++
        }
        // return array
        setNumeros(array)
        console.log(numeros)
        console.log(quantidade)
    }
    
    const gerarNumeroAleatorio = (min, max) => {
        let numero = parseInt(Math.random() * (max - min) + min)
        return numero
    }

    return(
        <div>
            <Formulario mudarTexto={setQuantidade} />
            <Botao clicar={ gerarNumeros } />
            <Numeros array={numeros}/>
        </div>
    )
}