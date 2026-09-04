import { ArrowUpRight, Gift } from 'lucide-react'

function NextLevelReward({ nextLevel = 13, remainingXP = 150 }) {
  return (
    <section className="next-level-reward card">
      <div className="card-body">
        <div className="next-level-reward__icon" aria-hidden="true">
          <Gift size={24} />
        </div>

        <div className="next-level-reward__copy">
          <p className="next-level-reward__eyebrow">NEXT REWARD</p>
          <h3>Level {nextLevel} reward</h3>
          <p>Earn {remainingXP.toLocaleString()} more XP to unlock it.</p>
        </div>

        <ArrowUpRight className="next-level-reward__arrow" size={20} aria-hidden="true" />
      </div>
    </section>
  )
}

export default NextLevelReward
