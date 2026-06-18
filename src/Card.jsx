import { useState } from "react"

export default function Card({name, image, onClick, rotation}) {
    const customStyle = {
        transform: `rotate(${rotation}deg)`,
    }
    
    return (
        <div className="pokemon-card" onClick={() => {onClick()}}>
            <h2>{name}</h2>
            <img src={image} style={customStyle}/>
        </div>
    )
}