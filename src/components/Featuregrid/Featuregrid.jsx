import upiImage from '../../assets/features/upi.png'
import secureImage from '../../assets/features/secure.png'
import referImage from '../../assets/features/refer and earn.png'
import withdrawImage from '../../assets/features/fastwithdraw.png'
import streakImage from '../../assets/features/dailystreak.png'
import mineImage from '../../assets/features/mine and earn.png'
import stakeImage from '../../assets/features/stake and earn.png'
import tapImage from '../../assets/features/tap and earn.png'
import promoImage from '../../assets/features/promocode.png'
import luckySpinImage from '../../assets/features/luckyspin.png'
import dailyBonusImage from '../../assets/features/dailybonus.png'

const features = [
  {
    image: upiImage,
    title: 'UPI',
    description: 'Seamless UPI redemptions',
  },
  {
    image: secureImage,
    title: 'Secure',
    description: '100% Secure & Trusted',
  },
  {
    image: referImage,
    title: 'Refer & Earn',
    description: 'Refer friends & earn exciting rewards',
  },
  {
    image: withdrawImage,
    title: 'Fast Withdraw',
    description: 'Quick withdrawals in minutes',
  },
  {
    image: streakImage,
    title: 'Daily Streak',
    description: 'Maintain streaks & earn bonus VEs',
  },
  {
    image: mineImage,
    title: 'Mine & Earn',
    description: 'Mine crystals & earn VEs',
  },
  {
    image: stakeImage,
    title: 'Stake & Earn',
    description: 'Stake VEs & earn more rewards',
  },
  {
    image: tapImage,
    title: 'Tap & Earn',
    description: 'Tap, collect & earn VEs',
  },
  {
    image: promoImage,
    title: 'Promo Code',
    description: 'Use promo codes & get extra rewards',
  },
  {
    image: luckySpinImage,
    title: 'Lucky Spin',
    description: 'Spin daily & win exciting prizes',
  },
  {
    image: dailyBonusImage,
    title: 'Daily Bonus',
    description: 'Claim your daily bonus rewards',
  },
]

function FeatureGrid() {
  return (
    <div className="feature-grid">
      {features.map((feature) => (
        <button
          type="button"
          className="feature-card"
          key={feature.title}
          aria-label={feature.title}
        >
          <div className="feature-icon">
            <img
              src={feature.image}
              alt=""
              className="feature-image"
            />
          </div>

          <h3>{feature.title}</h3>

          <p>{feature.description}</p>
        </button>
      ))}
    </div>
  )
}

export default FeatureGrid