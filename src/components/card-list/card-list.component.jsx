import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

function CardList(props) {
    return (
        <div className="grid-container">
            {props.robots.map(robot => (
                <Card key={robot.id} robot={robot}/>
            ))}
        </div>
    )
}

export default CardList