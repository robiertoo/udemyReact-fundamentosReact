import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho 
                nome='Filho1'
                idade={20}
                nerd={true}
            />
            <DiretaFilho 
                nome='Filho2'
                idade={17}
                nerd={false}
            />
            <DiretaFilho 
                nome='Filho3'
                idade={6}
                nerd={true}
            />
        </div>
    )
}