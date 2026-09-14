import {
  CalendarCheck,
  Coins,
  Hammer,
  Percent,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
  Gift,
} from 'lucide-react'

function FeatureGrid() {
  const features = [
    {
      icon: Wallet,
      title: 'UPI',
      description: 'Seamless UPI redemptions',
    },
    {
      icon: ShieldCheck,
      title: 'Secure',
      description: '100% Secure & Trusted',
    },
    {
      icon: Users,
      title: 'Refer & Earn',
      description: 'Refer friends & earn exciting rewards',
    },
    {
      icon: Zap,
      title: 'Fast Withdraw',
      description: 'Quick withdrawals in minutes',
    },
    {
      icon: CalendarCheck,
      title: 'Daily Streak',
      description: 'Maintain streaks & earn bonus VEs',
    },
    {
      icon: Hammer,
      title: 'Mine & Earn',
      description: 'Mine crystals & earn VEs',
    },
    {
      icon: Coins,
      title: 'Stake & Earn',
      description: 'Stake VEs & earn more rewards',
    },
    {
      icon: Coins,
      title: 'Tap & Earn',
      description: 'Tap, collect & earn VEs',
    },
    {
      icon: Percent,
      title: 'Promo Code',
      description: 'Use promo codes & get extra rewards',
    },
    {
      icon: Sparkles,
      title: 'Lucky Spin',
      description: 'Spin daily & win exciting prizes',
    },
    {
      icon: Gift,
      title: 'Daily Bonus',
      description: 'Claim your daily bonus rewards',
    },
  ]

  const handleFeatureClick = (title) => {
    console.log(`${title} selected`)
  }

  return (
    <div className="feature-grid">

      {features.map((feature) => {
        const Icon = feature.icon

        return (
          <button
            type="button"
            className="feature-card"
            key={feature.title}
            onClick={() => handleFeatureClick(feature.title)}
          >
            <div className="feature-icon">
              <Icon size={45} strokeWidth={1.7} />
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </button>
        )
      })}

    </div>
  )
}

export default FeatureGrid