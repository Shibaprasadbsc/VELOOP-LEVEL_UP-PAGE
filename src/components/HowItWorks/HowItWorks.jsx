import {
  ArrowRight,
  CalendarCheck,
  Coins,
  Gift,
  Trophy,
  Wallet,
} from 'lucide-react'

function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: CalendarCheck,
      title: 'Complete Tasks',
      description: 'Complete simple tasks and activities',
    },
    {
      number: 2,
      icon: Coins,
      title: 'Earn VEs',
      description: 'Earn VEs by completing tasks and challenges',
    },
    {
      number: 3,
      icon: Trophy,
      title: 'Level Up',
      description: 'Gain XP and level up to unlock more rewards',
    },
    {
      number: 4,
      icon: Gift,
      title: 'Unlock Rewards',
      description: 'Unlock exciting rewards at every level',
    },
    {
      number: 5,
      icon: Wallet,
      title: 'Redeem & Enjoy',
      description: 'Redeem rewards via UPI, PayPal & more',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="workflow-section"
    >

      <div className="section-title">
        <span />
        <h2>HOW VELOOP REWARDS WORKS</h2>
        <span />
      </div>

      <div className="workflow">

        {steps.map((step, index) => {
          const Icon = step.icon

          return (
            <div
              className="workflow-step"
              key={step.number}
            >

              <div className="workflow-icon">

                <Icon size={35} />

                <span>
                  {step.number}
                </span>

              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index !== steps.length - 1 && (
                <ArrowRight
                  className="workflow-arrow"
                  size={30}
                />
              )}

            </div>
          )
        })}

      </div>

    </section>
  )
}

export default HowItWorks