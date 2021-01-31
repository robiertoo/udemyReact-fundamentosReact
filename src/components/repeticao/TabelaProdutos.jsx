import React from 'react'
import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default props => {
    const produtosJSX = produtos.map((produto, i) => {
        return (
            <tr key={ produto.id } className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <th>{ produto.id }</th>
                <td>{ produto.nome }</td>
                <td>R$ { produto.preco.toFixed(2).toString().replace('.', ',') }</td>
            </tr>
        )
    })
    return (
        <div>
            <table className='TabelaProdutos'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    { produtosJSX }
                </tbody>
            </table>
        </div>
    )
}