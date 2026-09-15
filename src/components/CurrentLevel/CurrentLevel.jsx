import {
  Coins,
  Flame,
  Trophy,
  Zap,
} from 'lucide-react'

function CurrentLevel() {
  const currentXP = 7450
  const targetXP = 10000
  const nextLevelXP = targetXP - currentXP
  const progress = (currentXP / targetXP) * 100

  return (
    <section className="current-level-card">

      {/* ==================================================
          CURRENT LEVEL HEADER
      ================================================== */}

      <div className="current-level-header">

        {/* LEVEL BADGE */}
        <div className="current-level-badge">
          <div className="current-level-badge-inner">
            <Trophy
              size={38}
              strokeWidth={1.8}
            />
          </div>
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


        {/* TOP RIGHT TROPHY */}
        <div className="current-level-trophy">

          <div className="current-level-trophy-glow">
            <Trophy
              size={35}
              strokeWidth={1.8}
            />
          </div>

        </div>

      </div>


      {/* ==================================================
          XP PROGRESS
      ================================================== */}

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


      {/* ==================================================
          NEXT LEVEL
      ================================================== */}

      <div className="current-level-next">

        <span>
          Next Level 13
        </span>

        <strong>
          {nextLevelXP.toLocaleString()} XP to go
        </strong>

      </div>


      {/* ==================================================
          BALANCE / PROGRESS STATS
      ================================================== */}

      <div className="current-level-stats">

        {/* VEs BALANCE */}
        <div className="current-level-stat">

          <div className="current-level-stat-icon current-level-stat-icon--coin">
            <Coins
              size={22}
              strokeWidth={2}
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
            <Zap
              size={22}
              strokeWidth={2}
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
            <Flame
              size={22}
              strokeWidth={2}
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