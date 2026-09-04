import { Lock, Check, Trophy } from 'lucide-react'

function LevelRoadmap({ currentLevel = 12 }) {
  const levels = [10, 11, 12, 13, 14].map((level) => ({
    level,
    status: level < currentLevel ? 'completed' : level === currentLevel ? 'current' : 'locked',
    reward: level === currentLevel ? 'Current level' : level < currentLevel ? 'Completed' : 'Upcoming reward',
  }))

  return (
    <section className="level-roadmap card">
      <div className="card-body">
        <div className="level-roadmap__heading">
          <div>
            <p className="level-roadmap__eyebrow">YOUR JOURNEY</p>
            <h3>Level Roadmap</h3>
          </div>
          <span>Level {currentLevel}</span>
        </div>

        <div className="level-roadmap__track">
          {levels.map((item) => (
            <article key={item.level} className={`level-roadmap__step level-roadmap__step--${item.status}`}>
              <div className="level-roadmap__icon">
                {item.status === 'completed' && <Check size={18} />}
                {item.status === 'current' && <Trophy size={18} />}
                {item.status === 'locked' && <Lock size={18} />}
              </div>

              <strong>Level {item.level}</strong>
              <p>{item.reward}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LevelRoadmap
