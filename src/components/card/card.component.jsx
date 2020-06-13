import React from 'react'
import './card.styles.css'

function Card(props) {
    return (
        <div className="card">
            <img src={`https://robohash.org/${props.robot.id}.png?set=set3&size=180x180`} alt=""/>
            <h1>{props.robot.name}</h1>
            <p>{props.robot.email}</p>
        </div>
    )
}

export default Card