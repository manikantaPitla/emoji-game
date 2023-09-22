import './index.css'

const WinOrLoseCard = props => {
  const {scoreAndTopScore, onClickReset} = props
  const {clickedEmojiesList} = scoreAndTopScore

  const resetGame = () => {
    onClickReset()
  }

  const isWon = clickedEmojiesList.length === 12 ? 'You Won' : 'You Lose'
  const scoreDisplayName =
    clickedEmojiesList.length === 12 ? 'Best Score' : 'Score'

  const resultImage =
    clickedEmojiesList.length === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <li className="win-or-lose-card">
      <div className="result-text-container">
        <h1 className="won-lose-text">{isWon}</h1>
        <p className="score-text">{scoreDisplayName}</p>
        <p className="score-display">{clickedEmojiesList.length}/12</p>
        <button type="button" className="play-again-btn" onClick={resetGame}>
          Play Again
        </button>
      </div>
      <img className="result-image" src={resultImage} alt="win or lose" />
    </li>
  )
}

export default WinOrLoseCard
