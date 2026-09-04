import useLevelProgress from '../../hooks/useLevelProgress.jsx'
import LevelHero from '../../components/LevelHero/levelhero.jsx'
import CurrentLevel from '../../components/CurrentLevel/currentlevel.jsx'
import XPProgress from '../../components/XPProgress/XPProgress.jsx'
import NextLevelReward from '../../components/NextLevelReward/NextLevelReward.jsx'
import LevelRoadmap from '../../components/LevelRoadmap/LevelRoadmap.jsx'
import LevelRewardCard from '../../components/LevelRewardCard/LevelRewardCard.jsx'
import PlayAndEarn from '../../components/PlayAndEarn/PlayAndEarn.jsx'
import EarnMoreXP from '../../components/EarnMoreXP/EarnMoreXP.jsx'
import XPActivity from '../../components/XPActivity/XPActivity.jsx'
import LevelInfo from '../../components/LevelInfo/LevelInfo.jsx'
import LevelUpModal from '../../components/LevelUpModal/LevelUpModal.jsx'

function LevelDashboard() {
  const {
    currentLevel,
    currentXP,
    nextLevelXP,
    remainingXP,
    progressPercentage,
    isLevelUp,
  } = useLevelProgress()

  return (
    <div className="level-dashboard">

      <LevelHero
        currentLevel={currentLevel}
        currentXP={currentXP}
        nextLevelXP={nextLevelXP}
      />

      <div className="level-dashboard__progress-group">
        <CurrentLevel level={currentLevel} />

        <XPProgress
          currentXP={currentXP}
          nextLevelXP={nextLevelXP}
          remainingXP={remainingXP}
          progressPercentage={progressPercentage}
        />
      </div>

      <NextLevelReward
        nextLevel={currentLevel + 1}
        remainingXP={remainingXP}
      />

      <LevelRoadmap
        currentLevel={currentLevel}
      />

      <LevelRewardCard
        level={currentLevel}
        reward="Current Level Reward"
        unlocked={true}
      />

      <PlayAndEarn />

      <EarnMoreXP />

      <XPActivity />

      <LevelInfo />

      <LevelUpModal
        isOpen={isLevelUp}
        onClose={() => {}}
        newLevel={currentLevel + 1}
        reward="+100 XP"
      />

    </div>
  )
}

export default LevelDashboard