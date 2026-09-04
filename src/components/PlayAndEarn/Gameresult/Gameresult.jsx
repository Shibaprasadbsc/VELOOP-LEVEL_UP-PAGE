import { Trophy } from 'lucide-react'

function Gameresult({ score, onReplay }) {
  return (
    <div className="text-center">
      <Trophy size={40} />

      <h3>Game Complete!</h3>

      <p>
        You earned <strong>{score} XP</strong>
      </p>

      <button
        className="btn btn-primary"
        onClick={onReplay}
      >
        Play Again
      </button>
    </div>
  )
}

export default Gameresult