export default function WinDialog({handleResetGame}) {
    return (
        <div className="win-container">
            <h2>You won!</h2>
            <button onClick={() => {handleResetGame(false)}}>Play Again</button>
            <button onClick={() => {handleResetGame(true)}}>Hard Mode</button>
        </div>
    )
}