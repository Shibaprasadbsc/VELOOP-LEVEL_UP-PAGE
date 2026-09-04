import { Play } from 'lucide-react'

function Gamestart({ onStart }) {
  return (
    <div className="text-center">
      <Play size={40} />

      <h3>Play & Earn</h3>

      <p>
        Play the game and earn XP!
      </p>

      <button
        className="btn btn-primary"
        onClick={onStart}
      >
        Start Game
      </button>
    </div>
  )
}

export default Gamestart