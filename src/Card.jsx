export default function Card({name, image}) {
    return (
        <div className="pokemon-card">
            <h2>{name}</h2>
            <img src={image} />
        </div>
    )
}