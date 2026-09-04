import { Trophy } from 'lucide-react'
import heroVisual from '../../assets/hero.png'

function LevelHero({ currentLevel = 12, currentXP = 850, nextLevelXP = 1000 }) {
  return (
    <section className="level-hero" aria-labelledby="current-level-title">
      <div className="level-hero__content">
        <div className="level-hero__badge" aria-hidden="true">
          <Trophy size={26} strokeWidth={2.2} />
        </div>

        <div>
          <p className="level-hero__eyebrow">CURRENT LEVEL</p>
          <h2 id="current-level-title">Level {currentLevel}</h2>
          <p className="level-hero__xp"><strong>{currentXP.toLocaleString()} XP</strong> of {nextLevelXP.toLocaleString()} XP</p>
        </div>
      </div>

      <img className="level-hero__visual" src={heroVisual} alt="Layered VELOOP reward badge" />
    </section>
  )
}

export default LevelHero
