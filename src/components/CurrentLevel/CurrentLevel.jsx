import blueStarBadge from '../../assets/currentlevel/bluestarbadge.png'
import cup from '../../assets/currentlevel/cup.png'
import cyanDiamond from '../../assets/currentlevel/cyandiamond.png'
import dollarCoin from '../../assets/currentlevel/dollarcoin.png'
import purpleCrystal from '../../assets/currentlevel/purplecrystal.png'
import purpleLevelStar from '../../assets/currentlevel/purplelevelstar.png'
import thunderVolt from '../../assets/currentlevel/thundervolt.png'
import veCoin from '../../assets/currentlevel/vecoin.png'

function CurrentLevel() {
  const currentXP = 7450
  const targetXP = 10000
  const nextLevelXP = targetXP - currentXP
  const progress = (currentXP / targetXP) * 100

  return (
    <section className="current-level-card">

      {/* =========================================
          DECORATIVE ARTWORK
          ========================================= */}

      <img
        src={cyanDiamond}
        alt=""
        aria-hidden="true"
        className="current-level-decoration current-level-decoration--diamond"
      />

      <img
        src={dollarCoin}
        alt=""
        aria-hidden="true"
        className="current-level-decoration current-level-decoration--dollar"
      />

      <img
        src={purpleLevelStar}
        alt=""
        aria-hidden="true"
        className="current-level-decoration current-level-decoration--star"
      />

      {/* =========================================
          CURRENT LEVEL HEADER
          ========================================= */}

      <div className="current-level-header">

        {/* LEVEL BADGE */}
        <div className="current-level-badge">
          <img
            src={purpleLevelStar}
            alt="Current level badge"
            className="current-level-badge-image"
          />
        </div>

        {/* LEVEL INFORMATION */}
        <div className="current-level-information">
          <p className="current-level-label">
            CURRENT LEVEL
          </p>

          <h2>
            Level 12
          </h2>
        </div>

        {/* TOP RIGHT CUP */}
        <div className="current-level-trophy">
          <img
            src={cup}
            alt="Level reward"
            className="current-level-trophy-image"
          />
        </div>

      </div>

      {/* =========================================
          XP PROGRESS
          ========================================= */}

      <div className="current-level-xp">

        <div className="current-level-xp-header">
          <span>
            XP Progress
          </span>

          <strong>
            {currentXP.toLocaleString()} / {targetXP.toLocaleString()} XP
          </strong>
        </div>

        <div
          className="current-level-xp-track"
          role="progressbar"
          aria-valuenow={currentXP}
          aria-valuemin="0"
          aria-valuemax={targetXP}
          aria-label="Current XP progress"
        >
          <span
            className="current-level-xp-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>

      {/* =========================================
          NEXT LEVEL
          ========================================= */}

      <div className="current-level-next">

        <span>
          Next Level 13
        </span>

        <strong>
          {nextLevelXP.toLocaleString()} XP to go
        </strong>

      </div>

      {/* =========================================
          BALANCE / PROGRESS STATS
          ========================================= */}

      <div className="current-level-stats">

        {/* VE BALANCE */}
        <div className="current-level-stat">

          <div className="current-level-stat-icon current-level-stat-icon--coin">
            <img
              src={veCoin}
              alt="VE Coin"
              className="current-level-stat-image"
            />
          </div>

          <div className="current-level-stat-content">
            <span>
              Your Balance
            </span>

            <strong>
              12,540 VEs
            </strong>
          </div>

        </div>

        {/* SVEs BALANCE */}
        <div className="current-level-stat">

          <div className="current-level-stat-icon current-level-stat-icon--blue">
            <img
              src={thunderVolt}
              alt="SVEs"
              className="current-level-stat-image"
            />
          </div>

          <div className="current-level-stat-content">
            <span>
              SVEs Balance
            </span>

            <strong>
              8,320 SVEs
            </strong>
          </div>

        </div>

        {/* STREAK */}
        <div className="current-level-stat">

          <div className="current-level-stat-icon current-level-stat-icon--purple">
            <img
              src={purpleCrystal}
              alt="Streak"
              className="current-level-stat-image"
            />
          </div>

          <div className="current-level-stat-content">
            <span>
              Streak
            </span>

            <strong>
              12 Days
            </strong>
          </div>

        </div>

      </div>

    </section>
  )
}

export default CurrentLevel