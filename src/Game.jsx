import getPokemonData from "./pokemonApi";
import { useState, useEffect } from "react";
import Card from "./Card";
import './gameStyles.css';

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

export default function Game({setIsLoading}) {
    const [data, setData] = useState([]);
    const [clickedCardIds, setClickedCardIds] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const isLoading = data.length === 0;
    const hasWon = data.length === currentScore && data.length > 0;

    useEffect(() => {
        getPokemonData(pokemonArray).then((data) => {
            const shuffled = shuffle(data);
            setData(shuffled);
        }).catch((err) => {
            console.error('Failed to retrieve data');
        })
    }, []);

    function handleResetGame() {
        setCurrentScore(0)
        setClickedCardIds([]);
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    }


    function handleCardClick(id) {
        if (data.length === 0) {return};
        if (clickedCardIds.includes(id)) {
            handleResetGame()
            return;
        };

        const nextScore = currentScore + 1;

        setCurrentScore(nextScore);
        setClickedCardIds(prev => [...prev, id]);
        setData(shuffle(data));
        
        if (nextScore === data.length) {
            alert("Congrats you have good memory");
        }
    }

    return (
        <>
        {isLoading && 
            <div className="loading-container">
                Catching Pokemon...
                <div className="circle"></div>
            </div>
        }
        {/* Data is hydrated */}
        {!isLoading &&
            <div className="cards-container">
                <div className="score-container">
                    <p>Best Score: {bestScore}</p>
                    <p>Current Score: {currentScore}</p>
                </div>
                {data.map((pokemon) => {
                    return <Card 
                        name={pokemon.name} 
                        image={pokemon.image} 
                        key={pokemon.id}
                        onClick={() => {handleCardClick(pokemon.id)}}
                    />
                })}
            </div>
        }
        {}
        </>
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