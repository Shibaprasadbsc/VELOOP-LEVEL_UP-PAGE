import {
  Bell,
  ChevronDown,
  Gift,
  Home,
  Trophy,
  User,
  WalletCards,
} from 'lucide-react'

import LevelDashboard from './pages/LevelDashboard/LevelDashboard.jsx'

function App() {
  return (
    <main className="veloop-app">
      <div className="veloop-shell">

        {/* ================= HEADER ================= */}
        <header className="veloop-header">

          <a href="#dashboard" className="veloop-logo">
            <span className="veloop-logo-main">VE</span>
            <span className="veloop-logo-loop">loop</span>

            <span className="veloop-logo-sub">
              REWARDS
            </span>
          </a>

          <nav className="veloop-nav">

            <a href="#home" className="active">
              <Home size={15} />
              Home
            </a>

            <a href="#earn">
              Earn
            </a>

            <a href="#rewards">
              Rewards
            </a>

            <a href="#leaderboard">
              Leaderboard
            </a>

            <a href="#giveaway">
              Giveaway
            </a>

            <a href="#how-it-works">
              How it Works
            </a>

          </nav>

          <div className="veloop-header-actions">

            <button className="language-selector">
              <span className="india-flag">🇮🇳</span>
              <span>IN</span>
              <ChevronDown size={14} />
            </button>

            <button className="icon-button" aria-label="Notifications">
              <Bell size={21} />
            </button>

            <button className="profile-icon" aria-label="Profile">
              <WalletCards size={19} />
            </button>

          </div>

        </header>

        {/* ================= DASHBOARD ================= */}
        <section
          id="dashboard"
          className="veloop-content"
          aria-label="VELOOP Level Dashboard"
        >
          <LevelDashboard />
        </section>

      </div>
    </main>
  )
}

export default App