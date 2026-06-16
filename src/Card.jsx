export default function Card({name, image, onClick}) {
    return (
        <div className="pokemon-card" onClick={() => {onClick()}}>
            <h2>{name}</h2>
            <img src={image} />
        </div>
    )
}