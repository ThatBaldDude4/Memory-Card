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

export default function CardsContainer(props) {
    const [data, setData] = useState([]);
    const [clickedCardIds, setClickedCardIds] = useState([]);
    const clickedCards = props


    useEffect(() => {
        getPokemonData(pokemonArray).then((data) => {
            setData(data);
        })
    }, [pokemonArray]);


    function handleShuffle(e, id) {
        console.log(id)
        if (data.length === 0) {return};
        const beenClicked = clickedCardIds.includes(id)
        console.log(clickedCardIds)

        if (beenClicked) {
            props.handleResetGame();
        }
        props.setBestScore(prev => prev + 1);
        setClickedCardIds(prev => [...prev, id]);
        setData(shuffle(data));
        if (props.bestScore < props.currentScore) {
            props.setBestScore(props.currentScore);
        }
    }


    console.log(data);
    return (
        <div className="cards-container">
            {data.map((pokemon) => {
                return <Card 
                    name={pokemon.name} 
                    image={pokemon.image} 
                    key={pokemon.id}
                    onClick={(e) => {handleShuffle(e, pokemon.id)}}
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

// id is added to clicked array even if in array
// clicked array not properly checking id
// Game doesn't reset when card clicked twice