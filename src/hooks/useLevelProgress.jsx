import { useMemo } from 'react'
import levelData from '../data/LevelData.jsx'

function useLevelProgress() {
  const progress = useMemo(() => {
    const { currentXP, nextLevelXP, currentLevel } = levelData

    const remainingXP = Math.max(nextLevelXP - currentXP, 0)

    const progressPercentage =
      nextLevelXP > 0
        ? Math.min((currentXP / nextLevelXP) * 100, 100)
        : 0

    const isLevelUp = currentXP >= nextLevelXP

    return {
      currentLevel,
      currentXP,
      nextLevelXP,
      remainingXP,
      progressPercentage,
      isLevelUp,
    }
  }, [])

  return progress
}

export default useLevelProgress