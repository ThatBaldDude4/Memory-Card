export default function Card({name, image, onClick, rotation, isHardMode}) {
    // if hard mode apply unique styles
    const customStyle = !isHardMode ? {} : {
        transform: `scale(0.5) rotate(${rotation}deg)`,
        border: `none`,
        fontSize: `10px`,
        margin: `0`,
        padding: `0`,
    }

    const imageStyle = !isHardMode ? {} : {
        backgroundColor: `white`,
    }

    return (
        <div role="button" className="pokemon-card" onClick={() => {onClick()}} style={customStyle}>
            <h2>{name}</h2>
            <img src={image} style={imageStyle} alt={`${name} pokemon`} />
        </div>
    )
}