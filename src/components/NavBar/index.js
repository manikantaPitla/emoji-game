import './index.css'

const NavNar = props => {
  const {scoreAndTopScore} = props
  const {isGameRunning, clickedEmojiesList, topScore} = scoreAndTopScore

  return (
    <nav className="navigation">
      <div className="page-logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      <div className="game-score-container">
        {isGameRunning ? (
          <>
            <p className="score-got">Score: {clickedEmojiesList.length}</p>
            <p className="total-score-got">Top Score: {topScore}</p>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default NavNar
