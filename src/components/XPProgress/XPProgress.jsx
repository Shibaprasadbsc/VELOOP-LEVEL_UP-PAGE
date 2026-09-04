function XPProgress({
  currentXP = 850,
  nextLevelXP = 1000,
  remainingXP = 150,
  progressPercentage = 85,
}) {
  return (
    <section className="xp-progress card">
      <div className="card-body">
        <div className="xp-progress__heading">
          <div>
            <p className="xp-progress__eyebrow">LEVEL PROGRESS</p>
            <h3>XP Progress</h3>
          </div>
          <span>{currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP</span>
        </div>

        <div className="progress xp-progress__track" aria-label="XP progress">
          <div
            className="progress-bar xp-progress__bar"
            role="progressbar"
            style={{ width: `${progressPercentage}%` }}
            aria-valuenow={progressPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {Math.round(progressPercentage)}%
          </div>
        </div>

        <p className="xp-progress__remaining mb-0">{remainingXP.toLocaleString()} XP needed for the next level.</p>
      </div>
    </section>
  )
}

export default XPProgress
