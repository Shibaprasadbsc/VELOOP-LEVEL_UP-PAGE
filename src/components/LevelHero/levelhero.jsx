import { ArrowRight, Gift, ShieldCheck } from 'lucide-react'

function LevelHero() {
  const handleStartEarning = () => {
    document
      .getElementById('how-it-works')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleExploreRewards = () => {
    document
      .getElementById('rewards')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="dashboard-hero">

      <div className="hero-copy">

        <p className="hero-kicker">
          LEVEL UP. EARN MORE.
        </p>

        <h1>
          LEVEL UP.
          <br />
          <span>EARN REWARDS.</span>
        </h1>

        <p className="hero-description">
          Complete tasks, earn VEs and unlock
          <br />
          exciting rewards every day!
        </p>

        <div className="hero-buttons">

          <button
            type="button"
            className="yellow-button"
            onClick={handleStartEarning}
          >
            Start Earning
            <ArrowRight size={21} />
          </button>

          <button
            type="button"
            className="outline-button"
            onClick={handleExploreRewards}
          >
            <Gift size={20} />
            Explore Rewards
          </button>

        </div>

        <div className="hero-trust">

          <span>
            <ShieldCheck size={17} />
            100% Secure
          </span>

          <span>•</span>

          <span>Instant Rewards</span>

          <span>•</span>

          <span>Trusted by 250K+ Users</span>

        </div>

      </div>

    </section>
  )
}

export default LevelHero