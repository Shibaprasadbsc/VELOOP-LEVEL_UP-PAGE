import { useState } from 'react'

function Gameplay({ onFinish }) {
  const [score, setScore] = useState(0)

  const handleClick = () => {
    setScore(score + 10)
  }

  const handleFinish = () => {
    onFinish(score)
  }

  return (
    <div className="text-center">
      <h3>Quick Click Challenge</h3>

      <p>
        Score: <strong>{score} XP</strong>
      </p>

      <button
        className="btn btn-primary me-2"
        onClick={handleClick}
      >
        Click to Earn XP
      </button>

      <button
        className="btn btn-success"
        onClick={handleFinish}
      >
        Finish Game
      </button>
    </div>
  )
}

export default Gameplay