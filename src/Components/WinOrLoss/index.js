const WinOrLoss = props => {
  const {results} = props
  const {score} = results
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <h1>YOUR SCORE</h1>
      <p>{score}</p>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default WinOrLoss
