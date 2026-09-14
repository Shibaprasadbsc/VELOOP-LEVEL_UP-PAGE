import {
  ArrowRight,
  CalendarCheck,
  Coins,
  Gift,
  Rocket,
  Users,
} from 'lucide-react'

function CTAStats() {
  const handleJoinNow = () => {
    console.log('Join Now clicked')
  }

  return (
    <section className="cta-stats-section">

      <div className="cta-card">

        <div className="rocket-art">
          <Rocket size={72} />
        </div>

        <div>

          <h2>
            The More You Play,
            <br />
            The More You Earn!
          </h2>

          <p>
            Join VELOOP Rewards and start your
            <br />
            journey to amazing rewards.
          </p>

        </div>

        <button
          type="button"
          className="yellow-button"
          onClick={handleJoinNow}
        >
          Join Now
          <ArrowRight size={19} />
        </button>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <Users size={31} />
          <strong>250K+</strong>
          <span>Active Users</span>
        </div>

        <div className="stat-card">
          <CalendarCheck size={31} />
          <strong>1.2M+</strong>
          <span>Tasks Completed</span>
        </div>

        <div className="stat-card">
          <Coins size={31} />
          <strong>5M+</strong>
          <span>VEs Earned</span>
        </div>

        <div className="stat-card">
          <Gift size={31} />
          <strong>100K+</strong>
          <span>Rewards Redeemed</span>
        </div>

      </div>

    </section>
  )
}

export default CTAStats