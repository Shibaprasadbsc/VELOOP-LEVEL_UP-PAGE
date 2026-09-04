import { Lock, CheckCircle } from 'lucide-react'

function LevelRewardCard({ level, reward, unlocked = false }) {
  return (
    <section className={`level-reward-card card ${unlocked ? 'level-reward-card--unlocked' : 'level-reward-card--locked'}`}>
      <div className="card-body">
        <div className="level-reward-card__content">
          <div className="level-reward-card__icon" aria-hidden="true">
            {unlocked ? <CheckCircle size={25} /> : <Lock size={25} />}
          </div>

          <div>
            <p className="level-reward-card__eyebrow">LEVEL {level} REWARD</p>
            <h3>{reward}</h3>
            <span className="level-reward-card__status">{unlocked ? 'Unlocked' : 'Locked'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LevelRewardCard
