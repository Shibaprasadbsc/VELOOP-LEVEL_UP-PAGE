import { Trophy, LayoutDashboard, User, Target, Award } from 'lucide-react'
import LevelDashboard from './pages/LevelDashboard/LevelDashboard.jsx'

function App() {
  return (
    <main className="veloop-app">
      <div className="veloop-shell">

        {/* Header */}
        <header className="veloop-topbar">
          <a className="veloop-brand" href="#dashboard" aria-label="VELOOP dashboard">
            <span className="veloop-brand__mark" aria-hidden="true">
              <Trophy size={21} strokeWidth={2.25} />
            </span>
            <span>VELOOP</span>
          </a>

          <button type="button" className="btn veloop-profile-button">
            <User size={18} />
            Profile
          </button>
        </header>

        {/* Main Layout */}
        <div className="veloop-layout">

          {/* Sidebar */}
          <aside className="veloop-sidebar" aria-label="Primary navigation">
            <nav className="list-group">

              <button type="button" className="list-group-item list-group-item-action active" aria-current="page">
                <LayoutDashboard size={18} /> Dashboard
              </button>

              <button type="button" className="list-group-item list-group-item-action">
                <Target size={18} /> My Progress
              </button>

              <button type="button" className="list-group-item list-group-item-action">
                <Award size={18} /> Challenges
              </button>

              <button type="button" className="list-group-item list-group-item-action">
                <Trophy size={18} /> Leaderboard
              </button>

            </nav>
          </aside>

          {/* Dashboard Content */}
          <section id="dashboard" className="veloop-content" aria-labelledby="dashboard-title">
            <div className="veloop-page-heading">
              <div>
                <p className="veloop-eyebrow">REWARDS OVERVIEW</p>
                <h1 id="dashboard-title">Welcome back</h1>
              </div>

              <p>Track your progress, unlock rewards, and choose your next way to earn.</p>
            </div>

            <LevelDashboard />
          </section>
        </div>

      </div>
    </main>
  )
}

export default App
