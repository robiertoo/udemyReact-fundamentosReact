import './Contador.css'
import React from 'react'

import Display from './Display'
import PassoImport from './PassoForm'
import Botoes from './Botoes'

class Contador extends React.Component {

    
    state = {
        numero : this.props.numeroInicial || 0 ,
        passo : this.props.passo || 5
    }

    inc = () => {
        this.setState({
            numero : this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero : this.state.numero - this.state.passo
        })
    }

    setPasso = novoPasso => {
        this.setState({
            passo : novoPasso
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoImport passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}

export default Contador