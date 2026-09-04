import { Info, TrendingUp, Gift } from 'lucide-react'

function LevelInfo() {
  return (
    <section className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center gap-2 mb-3">
          <Info size={24} />
          <h3 className="mb-0">Level Info</h3>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div>
              <TrendingUp size={22} />
              <h5 className="mt-2">Level Up</h5>
              <p className="text-secondary">
                Earn XP by completing activities and challenges.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div>
              <Gift size={22} />
              <h5 className="mt-2">Rewards</h5>
              <p className="text-secondary">
                Unlock rewards as you progress through levels.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div>
              <Info size={22} />
              <h5 className="mt-2">Progress</h5>
              <p className="text-secondary">
                Keep earning XP to reach the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LevelInfo