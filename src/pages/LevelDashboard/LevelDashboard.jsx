import LevelHero from '../../components/LevelHero/levelhero.jsx'
import CurrentLevel from '../../components/CurrentLevel/CurrentLevel.jsx'
import FeatureGrid from '../../components/Featuregrid/Featuregrid.jsx'
import GiveawayLeaderboard from '../../components/GiveawayLeaderboard/GiveawayLeaderboard.jsx'
import HowItWorks from '../../components/HowItWorks/HowItWorks.jsx'
import FeaturedRewards from '../../components/FeaturedRewards/FeaturedRewards.jsx'
import CTAStats from '../../components/CTAStats/CTAStats.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import CoinCatcher from '../../components/CoinCatcher/CoinCatcher.jsx'


function LevelDashboard() {
  return (
    <div className="level-dashboard">

    <section className="dashboard-hero">
      <LevelHero />
      <CurrentLevel />
    </section>
      <section className="dashboard-main-grid">

        <FeatureGrid />

        <GiveawayLeaderboard />

      </section>


      {/* ==================================================
          MINI GAME
      ================================================== */}

      <CoinCatcher />


      {/* ==================================================
          HOW VELOOP REWARDS WORK
      ================================================== */}

      <HowItWorks />


      {/* ==================================================
          FEATURED REWARDS
      ================================================== */}

      <FeaturedRewards />


      {/* ==================================================
          CTA + STATS
      ================================================== */}

      <CTAStats />


      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />

    </div>
  )
}


export default LevelDashboard