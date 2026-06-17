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

export default function Game(props) {
    const [data, setData] = useState([]);
    const [clickedCardIds, setClickedCardIds] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const clickedCards = props


    useEffect(() => {
        getPokemonData(pokemonArray).then((data) => {
            setData(data);
        })
    }, [pokemonArray]);

    function handleResetGame() {
        setCurrentScore(0)
        setClickedCardIds([]);
    }


    function handleShuffle(e, id) {
        if (data.length === 0) {return};
        if (clickedCardIds.includes(id)) {handleResetGame()};

        setCurrentScore(prev => prev + 1);
        setClickedCardIds(prev => [...prev, id]);
        setData(shuffle(data));

        if (bestScore < currentScore) {
            setBestScore(currentScore);
        }
    }

    return (
        <div className="cards-container">
            <p>Best Score: {bestScore}</p>
            <p>Current Score: {currentScore}</p>
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