import { useCallback, useEffect, useState } from 'react'
import { Coins, Play, RotateCcw, Timer, Trophy, Zap } from 'lucide-react'

const GAME_DURATION = 20
const REWARD_XP = 25

const createCoin = () => ({
  id: `${Date.now()}-${Math.random()}`,
  x: Math.floor(Math.random() * 82) + 5,
  y: Math.floor(Math.random() * 70) + 8,
})

function CoinCatcher() {
  const [gameState, setGameState] = useState('start')
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION)
  const [score, setScore] = useState(0)
  const [coin, setCoin] = useState(null)

  const startGame = useCallback(() => {
    setScore(0)
    setTimeLeft(GAME_DURATION)
    setCoin(createCoin())
    setGameState('playing')
  }, [])

  const finishGame = useCallback(() => {
    setCoin(null)
    setGameState('complete')
  }, [])

  useEffect(() => {
    if (gameState !== 'playing') {
      return undefined
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timer)
          finishGame()
          return 0
        }

        return previousTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameState, finishGame])

  const collectCoin = () => {
    if (gameState !== 'playing') {
      return
    }

    setScore((previousScore) => previousScore + 1)
    setCoin(createCoin())
  }

  const resetGame = () => {
    setScore(0)
    setTimeLeft(GAME_DURATION)
    setCoin(null)
    setGameState('start')
  }

  return (
    <section className="coin-catcher card">
      <div className="coin-catcher__header">
        <div>
          <p className="coin-catcher__eyebrow">
            MINI GAME
          </p>

          <h2>
            VE Coin Catch
          </h2>

          <p className="coin-catcher__description">
            Catch as many VE coins as you can in 20 seconds.
          </p>
        </div>

        <div className="coin-catcher__badge">
          <Coins size={22} />
        </div>
      </div>

      <div className="coin-catcher__stats">
        <div className="coin-catcher__stat">
          <span className="coin-catcher__stat-icon">
            <Trophy size={17} />
          </span>

          <div>
            <span className="coin-catcher__stat-label">
              SCORE
            </span>

            <strong>{score}</strong>
          </div>
        </div>

        <div className="coin-catcher__stat">
          <span className="coin-catcher__stat-icon">
            <Timer size={17} />
          </span>

          <div>
            <span className="coin-catcher__stat-label">
              TIME
            </span>

            <strong>{timeLeft}s</strong>
          </div>
        </div>

        <div className="coin-catcher__stat">
          <span className="coin-catcher__stat-icon">
            <Zap size={17} />
          </span>

          <div>
            <span className="coin-catcher__stat-label">
              REWARD
            </span>

            <strong>+{REWARD_XP} XP</strong>
          </div>
        </div>
      </div>

      <div className="coin-catcher__game-area">

        {gameState === 'start' && (
          <div className="coin-catcher__overlay">
            <div className="coin-catcher__overlay-icon">
              <Coins size={34} />
            </div>

            <h3>
              Ready to Catch?
            </h3>

            <p>
              Click the coins before the timer runs out.
            </p>

            <button
              type="button"
              className="btn btn-primary coin-catcher__action"
              onClick={startGame}
            >
              <Play size={18} />
              Start Game
            </button>
          </div>
        )}

        {gameState === 'playing' && coin && (
          <>
            <div className="coin-catcher__playing-header">
              <span>
                Catch the coins!
              </span>

              <span>
                {GAME_DURATION - timeLeft}s / {GAME_DURATION}s
              </span>
            </div>

            <div className="coin-catcher__progress">
              <span
                style={{
                  width: `${((GAME_DURATION - timeLeft) / GAME_DURATION) * 100}%`,
                }}
              />
            </div>

            <button
              type="button"
              className="coin-catcher__coin"
              style={{
                left: `${coin.x}%`,
                top: `${coin.y}%`,
              }}
              onClick={collectCoin}
              aria-label="Catch coin"
            >
              <Coins size={27} />
            </button>
          </>
        )}

        {gameState === 'complete' && (
          <div className="coin-catcher__overlay coin-catcher__overlay--complete">

            <div className="coin-catcher__result-icon">
              <Trophy size={34} />
            </div>

            <p className="coin-catcher__result-label">
              GAME COMPLETE
            </p>

            <h3>
              Great Catch!
            </h3>

            <div className="coin-catcher__result-score">
              <span>Score</span>
              <strong>{score}</strong>
            </div>

            <div className="coin-catcher__reward">
              <Zap size={18} />
              <span>
                Reward
              </span>
              <strong>
                +{REWARD_XP} XP
              </strong>
            </div>

            <button
              type="button"
              className="btn btn-primary coin-catcher__action"
              onClick={startGame}
            >
              <RotateCcw size={18} />
              Play Again
            </button>

            <button
              type="button"
              className="coin-catcher__reset"
              onClick={resetGame}
            >
              Reset
            </button>

          </div>
        )}

      </div>
    </section>
  )
}

export default CoinCatcher