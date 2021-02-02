import React from 'react'

import './App.css'

import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            
            
            <Card titulo='#12 - Componente Contador' color='#58a77e'>
                <Contador numeroInicial={10} passo={3} />
            </Card>    
            <Card titulo='#11 - Componente Controlado' color='#58a77e'>
                <Input />
            </Card>    
            <Card titulo='#10 - Comunicação Indireta' color='#73503C'>
                <IndiretaPai />
            </Card>    
            <Card titulo='#09 - Comunicação Direta' color='#2B9464'>
                <DiretaPai />
            </Card>    
            <Card titulo='#08 - Renderização Condicional' color='#D14D28'>
                <UsuarioInfo usuario={{nome : 'Mirtes'}} />
                <UsuarioInfo usuario={{}} />
                <ParOuImpar numero={15} />
                <ParOuImpar numero={20} />
            </Card>    
            <Card titulo='#07 - Desafio Tabela Produtos' color='#35404F'>
                <TabelaProdutos />
            </Card>

            <Card titulo='#06 - Repetição' color='#59323C'>
                <ListaAlunos />
            </Card>

            <Card titulo='#05 - Componente com Filhos' 
            color='#24A8AC'>
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome='Pedro' />
                    <FamiliaMembro nome='Julia' />
                    <FamiliaMembro nome='Jeferson' />
                </Familia>
            </Card>

            <Card titulo='#04 - Desafio Aleatório' 
            color='#354458'>
                <Aleatorio max={100} min={3}/>
            </Card>

            <Card titulo='#03 - Fragmento' 
            color='#3A9AD9'>
                <Fragmento />
            </Card>
            
            <Card titulo='#02 - Com Parâmetro' 
            color='#29ABA4'>
                <ComParametro 
                    titulo='Situação do Aluno' 
                    aluno='Lucas da Silva' 
                    nota={9.3} 
                />
            </Card>

            <Card titulo='#01 - Primeiro Componente' 
            color='#EB7260'>
                <Primeiro />
            </Card>
        </div>

        
    </div>
