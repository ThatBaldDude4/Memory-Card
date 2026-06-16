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

    function handleShuffle() {
        if (data.length === 0) {return};
        setData(shuffle(data));
    }

    return (
        <div className="cards-container">
            {data.map((pokemon) => {
                return <Card 
                    name={pokemon.name} 
                    image={pokemon.image} 
                    key={`${pokemon.name}${pokemon.image}`}
                    onClick={handleShuffle}
                />
            })}
        </div>
    )
}

function shuffle(array) {
  const shuffled = [...array]; 
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  };

  return shuffled;
}
