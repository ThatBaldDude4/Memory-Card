import {useState} from 'react'
import CardsContainer from './CardsContainer'

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  function handleResetGame() {
    setCurrentScore(0)
  }

  return (
    <>
      <p>Best Score: {bestScore}</p>
      <p>Current Score: {currentScore}</p>
      <CardsContainer 
        bestScore={bestScore}
        currentScore={currentScore}
        setBestScore={setBestScore}
        setCurrentScore={setCurrentScore}
        handleResetGame={handleResetGame}
      />
    </>
  )

}

export default App
