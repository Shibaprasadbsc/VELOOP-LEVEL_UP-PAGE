import { useState } from 'react'
import Gamestart from '../Gamestart/Gamestart'
import Gameplay from '../Gameplay/Gameplay'
import Gameresult from '../Gameresult/Gameresult'

function Gamecontainer() {
  const [gameState, setGameState] = useState('start')
  const [score, setScore] = useState(0)

  const startGame = () => {
    setScore(0)
    setGameState('playing')
  }

  const finishGame = (finalScore) => {
    setScore(finalScore)
    setGameState('result')
  }

  const replayGame = () => {
    setScore(0)
    setGameState('playing')
  }

  return (
    <div>
      {gameState === 'start' && (
        <Gamestart onStart={startGame} />
      )}

      {gameState === 'playing' && (
        <Gameplay onFinish={finishGame} />
      )}

      {gameState === 'result' && (
        <Gameresult
          score={score}
          onReplay={replayGame}
        />
      )}
    </div>
  )
}

export default Gamecontainer