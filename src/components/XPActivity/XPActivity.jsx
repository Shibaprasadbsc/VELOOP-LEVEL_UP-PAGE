import { CheckCircle, Play, Target, Users } from 'lucide-react'

function XPActivity() {
  const activities = [
    {
      icon: CheckCircle,
      title: 'Daily Login',
      description: 'Logged in today',
      xp: '+20 XP',
    },
    {
      icon: Play,
      title: 'Watch & Earn',
      description: 'Completed a video',
      xp: '+50 XP',
    },
    {
      icon: Target,
      title: 'Daily Challenge',
      description: 'Completed a challenge',
      xp: '+100 XP',
    },
    {
      icon: Users,
      title: 'Referral Bonus',
      description: 'Friend joined VELOOP',
      xp: '+100 XP',
    },
  ]

  return (
    <section className="card shadow-sm mb-4">
      <div className="card-body">
        <h3 className="mb-1">XP Activity</h3>

        <p className="text-secondary mb-4">
          Your recent XP earning activity.
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
                  <Icon size={24} />

                  <div>
                    <h5 className="mb-1">{activity.title}</h5>

                    <p className="text-secondary mb-0">
                      {activity.description}
                    </p>
                  </div>
                </div>

                <span className="fw-semibold">
                  {activity.xp}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default XPActivity