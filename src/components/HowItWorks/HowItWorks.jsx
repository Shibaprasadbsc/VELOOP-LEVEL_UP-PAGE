import { ArrowRight } from 'lucide-react'

import completeTasksImage from '../../assets/howveloopworks/complete_tasks.png'
import earnVesImage from '../../assets/howveloopworks/earn_ves.png'
import levelUpImage from '../../assets/howveloopworks/level_up.png'
import unlockRewardsImage from '../../assets/howveloopworks/unlock_rewards.png'
import redeemEnjoyImage from '../../assets/howveloopworks/redeem_enjoy.png'

const steps = [
  {
    number: 1,
    image: completeTasksImage,
    title: 'Complete Tasks',
    description: 'Complete simple tasks and activities',
  },
  {
    number: 2,
    image: earnVesImage,
    title: 'Earn VEs',
    description: 'Earn VEs by completing tasks and challenges',
  },
  {
    number: 3,
    image: levelUpImage,
    title: 'Level Up',
    description: 'Gain XP and level up to unlock more rewards',
  },
  {
    number: 4,
    image: unlockRewardsImage,
    title: 'Unlock Rewards',
    description: 'Unlock exciting rewards at every level',
  },
  {
    number: 5,
    image: redeemEnjoyImage,
    title: 'Redeem & Enjoy',
    description: 'Redeem rewards via UPI, PayPal & more',
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="workflow-section"
    >

      {/* SECTION TITLE */}

      <div className="section-title">
        <span />
        <h2>HOW VELOOP REWARDS WORKS</h2>
        <span />
      </div>


      {/* WORKFLOW */}

      <div className="workflow">

        {steps.map((step, index) => (
          <div
            className="workflow-step"
            key={step.number}
          >

            {/* STEP IMAGE */}

            <div className="workflow-icon">

              <img
                src={step.image}
                alt={step.title}
                className="workflow-image"
              />

              {/* STEP NUMBER */}

              <span className="workflow-number">
                {step.number}
              </span>

            </div>


            {/* TITLE */}

            <h3>
              {step.title}
            </h3>


            {/* DESCRIPTION */}

            <p>
              {step.description}
            </p>


            {/* ARROW */}

            {index !== steps.length - 1 && (
              <ArrowRight
                className="workflow-arrow"
                size={30}
                aria-hidden="true"
              />
            )}

          </div>
        ))}

      </div>

    </section>
  )
}

export default HowItWorks