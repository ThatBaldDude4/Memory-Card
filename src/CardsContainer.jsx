import getPokemonData from "./pokemonApi";
import { useState, useEffect } from "react";
import Card from "./Card";

const pokemonArray = [
  "bulbasaur",
  "charmander",
  "squirtle",
  "pikachu",
  "jigglypuff",
  "meowth",
  "psyduck",
  "machop",
  "gengar",
  "snorlax",
  "mewtwo",
  "eevee"
];

export default function CardsContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getPokemonData(pokemonArray).then((data) => {
            setData(data);
        })
    }, [pokemonArray]);

    return (
        <div className="cards-container">
            {data.map((pokemon) => {
                return <Card name={pokemon.name} image={pokemon.image} key={`${pokemon.name}${pokemon.image}`}/>
            })}
        </div>
    )
}