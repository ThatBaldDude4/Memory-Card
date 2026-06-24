import getPokemonData from "./pokemonApi";
import { useState, useEffect } from "react";
import Card from "./Card";
import WinDialog from "./WinDialog";
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
    const [isHardMode, setIsHardMode] = useState(false);
    const isLoading = data.length === 0;
    const hasWon = currentScore >= data.length  && data.length > 0;

    useEffect(() => {
        getPokemonData(pokemonArray).then((data) => {
            const shuffled = shuffle(data);
            setData(shuffled);
        }).catch((err) => {
            console.error('Failed to retrieve data');
        })
    }, []);

    function handleResetGame(isDifficult) {
        setCurrentScore(0)
        setClickedCardIds([]);
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
        setIsHardMode(isDifficult);
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
    }

    return (
        <>
        {isLoading && 
            <div role="status" className="loading-container">
                Catching Pokemon...
                <div className="circle"></div>
            </div>
        }
        {/* Data is hydrated */}
        {!isLoading &&
            <div className="cards-container">
                <div className="score-container">
                    <p data-testid="best-score-container">Best Score: {bestScore}</p>
                    <p>Current Score: {currentScore}</p>
                </div>
                {data.map((pokemon) => {
                    const rotation = Math.floor(Math.random() * 300);
                    return <Card 
                        name={pokemon.name} 
                        image={pokemon.image} 
                        key={pokemon.id}
                        onClick={() => {handleCardClick(pokemon.id)}}
                        rotation={rotation}
                        isHardMode={isHardMode}
                    />
                })}
            </div>
        }
        {hasWon && <WinDialog handleResetGame={handleResetGame}/>}
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