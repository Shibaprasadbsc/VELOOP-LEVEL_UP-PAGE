import { useCallback, useEffect, useState } from 'react'
import { Play, RotateCcw } from 'lucide-react'

import prizeTrophyImage from '../../assets/coincatcher/prize_trophy.png'
import rewardThunderboltImage from '../../assets/coincatcher/reward_thunderbolt.png'
import timerStopwatchImage from '../../assets/coincatcher/timer_stopwatch.png'
import veCoinCatchImage from '../../assets/coincatcher/ve_coin_catch.png'

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

      {/* =====================================================
          HEADER
          ===================================================== */}

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

        {/* VE COIN IMAGE */}

        <div className="coin-catcher__badge">
          <img
            src={veCoinCatchImage}
            alt="VE Coin"
            className="coin-catcher__asset coin-catcher__asset--badge"
          />
        </div>

      </div>


      {/* =====================================================
          GAME STATS
          ===================================================== */}

      <div className="coin-catcher__stats">

        {/* SCORE */}

        <div className="coin-catcher__stat">

          <span className="coin-catcher__stat-icon">
            <img
              src={prizeTrophyImage}
              alt=""
              className="coin-catcher__asset"
            />
          </span>

          <div>
            <span className="coin-catcher__stat-label">
              SCORE
            </span>

            <strong>
              {score}
            </strong>
          </div>

        </div>


        {/* TIME */}

        <div className="coin-catcher__stat">

          <span className="coin-catcher__stat-icon">
            <img
              src={timerStopwatchImage}
              alt=""
              className="coin-catcher__asset"
            />
          </span>

          <div>
            <span className="coin-catcher__stat-label">
              TIME
            </span>

            <strong>
              {timeLeft}s
            </strong>
          </div>

        </div>


        {/* REWARD */}

        <div className="coin-catcher__stat">

          <span className="coin-catcher__stat-icon">
            <img
              src={rewardThunderboltImage}
              alt=""
              className="coin-catcher__asset"
            />
          </span>

          <div>
            <span className="coin-catcher__stat-label">
              REWARD
            </span>

            <strong>
              +{REWARD_XP} XP
            </strong>
          </div>

        </div>

      </div>


      {/* =====================================================
          GAME AREA
          ===================================================== */}

      <div className="coin-catcher__game-area">


        {/* ===================================================
            START SCREEN
            =================================================== */}

        {gameState === 'start' && (
          <div className="coin-catcher__overlay">

            <div className="coin-catcher__overlay-icon">

              <img
                src={veCoinCatchImage}
                alt="VE Coin"
                className="coin-catcher__asset coin-catcher__asset--overlay"
              />

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


        {/* ===================================================
            PLAYING
            =================================================== */}

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
                  width: `${
                    ((GAME_DURATION - timeLeft) / GAME_DURATION) * 100
                  }%`,
                }}
              />

            </div>


            {/* CLICKABLE VE COIN */}

            <button
              type="button"
              className="coin-catcher__coin"
              style={{
                left: `${coin.x}%`,
                top: `${coin.y}%`,
              }}
              onClick={collectCoin}
              aria-label="Catch VE coin"
            >
              <img
                src={veCoinCatchImage}
                alt=""
                className="coin-catcher__coin-image"
              />
            </button>

          </>
        )}


        {/* ===================================================
            COMPLETE SCREEN
            =================================================== */}

        {gameState === 'complete' && (
          <div className="coin-catcher__overlay coin-catcher__overlay--complete">

            {/* TROPHY */}

            <div className="coin-catcher__result-icon">

              <img
                src={prizeTrophyImage}
                alt="Prize trophy"
                className="coin-catcher__asset coin-catcher__asset--result"
              />

            </div>


            <p className="coin-catcher__result-label">
              GAME COMPLETE
            </p>


            <h3>
              Great Catch!
            </h3>


            {/* SCORE */}

            <div className="coin-catcher__result-score">

              <span>
                Score
              </span>

              <strong>
                {score}
              </strong>

            </div>


            {/* REWARD */}

            <div className="coin-catcher__reward">

              <img
                src={rewardThunderboltImage}
                alt=""
                className="coin-catcher__reward-image"
              />

              <span>
                Reward
              </span>

              <strong>
                +{REWARD_XP} XP
              </strong>

            </div>


            {/* PLAY AGAIN */}

            <button
              type="button"
              className="btn btn-primary coin-catcher__action"
              onClick={startGame}
            >
              <RotateCcw size={18} />
              Play Again
            </button>


            {/* RESET */}

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