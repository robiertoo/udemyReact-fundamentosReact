import './Contador.css'
import React from 'react'

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

    setPasso = evento => {
        this.setState({
            passo : +evento.currentTarget.value
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h3>{ this.state.numero }</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id='passoInput' type="number" 
                        value={this.state.passo}
                        onChange={this.setPasso}
                    />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={ this.dec }>-</button>
            </div>
        )
    }
}

export default Contador