import { useState } from "react"

export default function Card({name, image, onClick, rotation, isHardMode}) {
    // if hard mode apply unique styles
    const customStyle = !isHardMode ? {} : {
        transform: `scale(0.5) rotate(${rotation}deg)`,

    }

    return (
        <div className="pokemon-card" onClick={() => {onClick()}} style={customStyle}>
            <h2>{name}</h2>
            <img src={image} />
        </div>
    )
}