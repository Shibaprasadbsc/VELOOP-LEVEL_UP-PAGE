import { ArrowRight } from 'lucide-react'

import rocketImage from '../../assets/ctastats/rocket.png'
import activeUsersImage from '../../assets/ctastats/active_users.png'
import tasksCompletedImage from '../../assets/ctastats/tasks_completed.png'
import vesEarnedImage from '../../assets/ctastats/ves_earned.png'
import rewardsRedeemedImage from '../../assets/ctastats/rewards_redeemed.png'

const stats = [
  {
    image: activeUsersImage,
    value: '250K+',
    label: 'Active Users',
  },
  {
    image: tasksCompletedImage,
    value: '1.2M+',
    label: 'Tasks Completed',
  },
  {
    image: vesEarnedImage,
    value: '5M+',
    label: 'VEs Earned',
  },
  {
    image: rewardsRedeemedImage,
    value: '100K+',
    label: 'Rewards Redeemed',
  },
]

function CTAStats() {
  const handleJoinNow = () => {
    console.log('Join Now clicked')
  }

  return (
    <section className="cta-stats-section">

      {/* =====================================================
          CTA CARD
          ===================================================== */}

      <div className="cta-card">

        {/* ROCKET ART */}

        <div className="rocket-art">
          <img
            src={rocketImage}
            alt="VELOOP Rewards"
            className="cta-rocket-image"
          />
        </div>


        {/* CTA CONTENT */}

        <div className="cta-content">

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

          <button
            type="button"
            className="yellow-button"
            onClick={handleJoinNow}
          >
            Join Now
            <ArrowRight size={19} />
          </button>

        </div>

      </div>


      {/* =====================================================
          STATS
          ===================================================== */}

      <div className="stats-grid">

        {stats.map((stat) => (
          <div
            className="stat-card"
            key={stat.label}
          >

            <div className="stat-image">
              <img
                src={stat.image}
                alt=""
              />
            </div>

            <strong>
              {stat.value}
            </strong>

            <span>
              {stat.label}
            </span>

          </div>
        ))}

      </div>

    </section>
  )
}

export default CTAStats