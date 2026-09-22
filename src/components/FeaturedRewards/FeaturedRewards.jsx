import {
  ChevronLeft,
  ChevronRight,
  Star,
  Coins,
} from 'lucide-react'

import amazonVoucherStar from '../../assets/featuredrewards/amazon_voucher_star.png'
import amazonVoucherDollar from '../../assets/featuredrewards/amazon_voucher_dollar.png'
import airpodsPro from '../../assets/featuredrewards/airpods_pro.png'
import smartWatch from '../../assets/featuredrewards/smart_watch.png'
import iphone15 from '../../assets/featuredrewards/iphone_15.png'

const rewards = [
  {
    id: 1,
    title: 'Amazon Voucher',
    value: '₹20',
    image: amazonVoucherStar,
    cost: '2,000',
    type: 'star',
  },
  {
    id: 2,
    title: 'Amazon Voucher',
    value: '₹500',
    image: amazonVoucherStar,
    cost: '300',
    type: 'star',
  },
  {
    id: 3,
    title: 'Amazon Voucher',
    value: '₹2,000',
    image: amazonVoucherDollar,
    cost: '500',
    type: 'coin',
    featured: true,
  },
  {
    id: 4,
    title: 'AirPods Pro',
    subtitle: '(2nd Gen)',
    image: airpodsPro,
    cost: '500',
    type: 'star',
  },
  {
    id: 5,
    title: 'Smart Watch',
    subtitle: 'Premium',
    image: smartWatch,
    cost: '200',
    type: 'coin',
  },
  {
    id: 6,
    title: 'iPhone 15',
    subtitle: '(128GB)',
    image: iphone15,
    cost: '250',
    type: 'coin',
  },
]

function FeaturedRewards() {
  const handlePrevious = () => {
    console.log('Previous rewards')
  }

  const handleNext = () => {
    console.log('Next rewards')
  }

  return (
    <section
      id="rewards"
      className="featured-rewards-section"
    >

      {/* =====================================================
          SECTION TITLE
          ===================================================== */}

      <div className="section-title">
        <span />
        <h2>FEATURED REWARDS</h2>
        <span />
      </div>


      {/* =====================================================
          REWARDS CAROUSEL
          ===================================================== */}

      <div className="featured-rewards-wrapper">

        {/* LEFT ARROW */}

        <button
          type="button"
          className="featured-rewards-arrow featured-rewards-arrow--left"
          onClick={handlePrevious}
          aria-label="Previous rewards"
        >
          <ChevronLeft size={22} />
        </button>


        {/* REWARD CARDS */}

        <div className="featured-rewards-grid">

          {rewards.map((reward) => (
            <article
              key={reward.id}
              className={`reward-card ${
                reward.featured ? 'reward-card--featured' : ''
              }`}
            >

              {/* REWARD NAME */}

              <div className="reward-card-title">
                <span>{reward.title}</span>

                {reward.value && (
                  <strong>{reward.value}</strong>
                )}

                {reward.subtitle && (
                  <small>{reward.subtitle}</small>
                )}
              </div>


              {/* REWARD IMAGE */}

              <div className="reward-card-image">
                <img
                  src={reward.image}
                  alt={reward.title}
                />
              </div>


              {/* REWARD COST */}

              <div className="reward-card-cost">

                {reward.type === 'star' ? (
                  <Star
                    size={17}
                    fill="currentColor"
                  />
                ) : (
                  <Coins
                    size={17}
                    fill="currentColor"
                  />
                )}

                <strong>{reward.cost}</strong>

              </div>

            </article>
          ))}

        </div>


        {/* RIGHT ARROW */}

        <button
          type="button"
          className="featured-rewards-arrow featured-rewards-arrow--right"
          onClick={handleNext}
          aria-label="Next rewards"
        >
          <ChevronRight size={22} />
        </button>

      </div>

    </section>
  )
}

export default FeaturedRewards