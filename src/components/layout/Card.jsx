import './Card.css'
import React from 'react'

export default props => {
    const { color, titulo } = props;
    const cardStyle = {
        backgroundColor : color,
        borderColor : color
    }
    return (
        <div className='Card' style={ cardStyle }>
            <h2 className='Title'>{ titulo }</h2>
            <div className='Content'>
                { props.children }
            </div>
        </div>
    )
}