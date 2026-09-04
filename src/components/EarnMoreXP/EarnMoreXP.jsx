import { Play, ClipboardList, Users, Gamepad2, Flame } from 'lucide-react'

function EarnMoreXP() {
  const activities = [
    {
      icon: Play,
      title: 'Watch & Earn',
      description: 'Watch videos and earn XP',
      reward: '+50 XP',
    },
    {
      icon: ClipboardList,
      title: 'Daily Tasks',
      description: 'Complete daily tasks',
      reward: '+50 XP',
    },
    {
      icon: Users,
      title: 'Refer & Earn',
      description: 'Invite friends and earn XP',
      reward: '+100 XP',
    },
    {
      icon: Gamepad2,
      title: 'Mini Games',
      description: 'Play games and earn XP',
      reward: '+75 XP',
    },
    {
      icon: Flame,
      title: 'Streak Bonus',
      description: 'Maintain your daily streak',
      reward: '+25 XP',
    },
  ]

  return (
    <section className="card shadow-sm mb-4">
      <div className="card-body">
        <h3 className="mb-1">Earn More XP</h3>

        <p className="text-secondary mb-4">
          Complete activities and earn extra rewards.
        </p>

        <div className="list-group">
          {activities.map((activity) => {
            const Icon = activity.icon

            return (
              <div
                key={activity.title}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center gap-3">
                  <Icon size={28} />

                  <div>
                    <h5 className="mb-1">{activity.title}</h5>

                    <p className="text-secondary mb-0">
                      {activity.description}
                    </p>
                  </div>
                </div>

                <span className="fw-semibold">
                  {activity.reward}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EarnMoreXP