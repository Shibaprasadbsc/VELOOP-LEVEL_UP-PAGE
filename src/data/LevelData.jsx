const levelData = {
  currentLevel: 12,
  currentXP: 850,
  nextLevelXP: 1000,

  rewards: {
    current: {
      level: 12,
      title: 'Current Level Reward',
      unlocked: true,
    },

    next: {
      level: 13,
      title: 'Next Level Reward',
      unlocked: false,
    },
  },

  xpActivities: [
    {
      id: 1,
      activity: 'Complete a challenge',
      xp: 50,
    },
    {
      id: 2,
      activity: 'Play & Earn',
      xp: 100,
    },
    {
      id: 3,
      activity: 'Refer a friend',
      xp: 200,
    },
  ],
}

export default levelData