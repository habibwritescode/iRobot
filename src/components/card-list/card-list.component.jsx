import React from 'react'
import './card-list.styles.css'

function CardList(props) {
    return (
        <div className="grid-container">
            {props.robots.map(robot => (
                <h1 key={robot.id}>{robot.name}</h1>
            ))}
        </div>
    )
}

export default CardList