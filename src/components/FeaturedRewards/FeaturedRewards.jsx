import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

function FeaturedRewards() {
  const rewards = [
    {
      title: 'Amazon Voucher',
      subtitle: '₹20',
      icon: 'a',
      points: '2,000',
      type: 'xp',
    },
    {
      title: 'Amazon Voucher',
      subtitle: '₹500',
      icon: 'a',
      points: '300',
      type: 'xp',
    },
    {
      title: 'Amazon Voucher',
      subtitle: '₹2,000',
      icon: 'a',
      points: '500',
      type: 've',
      featured: true,
    },
    {
      title: 'AirPods Pro',
      subtitle: '(2nd Gen)',
      icon: '🎧',
      points: '500',
      type: 'xp',
    },
    {
      title: 'Smart Watch',
      subtitle: 'Premium',
      icon: '⌚',
      points: '200',
      type: 've',
    },
    {
      title: 'iPhone 15',
      subtitle: '(128GB)',
      icon: '📱',
      points: '250',
      type: 've',
    },
  ]

  const scrollRewards = (direction) => {
    const container = document.querySelector('.rewards-grid')

    if (!container) return

    container.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="rewards"
      className="featured-section"
    >

      <div className="section-title">
        <span />
        <h2>FEATURED REWARDS</h2>
        <span />
      </div>

      <div className="rewards-wrapper">

        <button
          type="button"
          className="carousel-button left"
          onClick={() => scrollRewards('left')}
          aria-label="Previous rewards"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="rewards-grid">

          {rewards.map((reward) => (
            <article
              className={`reward-card ${
                reward.featured ? 'featured' : ''
              }`}
              key={`${reward.title}-${reward.subtitle}`}
            >

              <h3>{reward.title}</h3>

              <strong className="reward-name">
                {reward.subtitle}
              </strong>

              <div className="reward-image">

                {reward.icon === 'a' ? (
                  <span className="amazon-icon">
                    a
                  </span>
                ) : (
                  <span className="emoji-product">
                    {reward.icon}
                  </span>
                )}

              </div>

              <div className="reward-points">

                <span>
                  {reward.type === 'xp'
                    ? '✦'
                    : '🪙'}
                </span>

                {reward.points}

              </div>

            </article>
          ))}

        </div>

        <button
          type="button"
          className="carousel-button right"
          onClick={() => scrollRewards('right')}
          aria-label="Next rewards"
        >
          <ChevronRight size={22} />
        </button>

      </div>

    </section>
  )
}

export default FeaturedRewards