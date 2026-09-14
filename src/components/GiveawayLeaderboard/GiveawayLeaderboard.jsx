import {
  ChevronRight,
  Gift,
  Sparkles,
} from 'lucide-react'

function GiveawayLeaderboard() {
  const leaderboard = [
    {
      rank: 1,
      name: '@RockyVE',
      xp: '12,540',
      avatar: '👑',
    },
    {
      rank: 2,
      name: '@Hunter7',
      xp: '9,870',
      avatar: '🐺',
    },
    {
      rank: 3,
      name: '@LootLord',
      xp: '7,230',
      avatar: '🐱',
    },
    {
      rank: 4,
      name: '@Tapzy',
      xp: '6,420',
      avatar: '👨🏻',
    },
    {
      rank: 5,
      name: '@ShadowVE',
      xp: '5,910',
      avatar: '👨🏻',
    },
    {
      rank: 6,
      name: '@Veloking',
      xp: '4,870',
      avatar: '👨🏻',
    },
    {
      rank: 7,
      name: '@VE_Master',
      xp: '4,230',
      avatar: '👨🏻',
    },
    {
      rank: 8,
      name: '@BunnyX',
      xp: '3,890',
      avatar: '👨🏻',
    },
  ]

  const handleViewLeaderboard = () => {
    console.log('Opening full leaderboard')
  }

  return (
    <aside
      id="giveaway"
      className="giveaway-card"
    >

      <div className="giveaway-heading">

        <Gift size={28} />

        <h2>GIVEAWAY LEADERBOARD</h2>

        <Sparkles size={17} />

      </div>

      <div className="giveaway-countdown">

        <p>Giveaway ends in</p>

        <div className="countdown">

          <div>
            <strong>02</strong>
            <span>Days</span>
          </div>

          <div>
            <strong>14</strong>
            <span>Hrs</span>
          </div>

          <div>
            <strong>36</strong>
            <span>Mins</span>
          </div>

          <div>
            <strong>48</strong>
            <span>Secs</span>
          </div>

        </div>

      </div>

      <div className="top-three">

        {leaderboard
          .slice(1, 4)
          .map((person) => (
            <div
              key={person.rank}
              className={`top-user rank-${person.rank}`}
            >
              <div className="avatar">
                {person.avatar}
              </div>

              <span className="rank">
                {person.rank}
              </span>

              <strong>{person.name}</strong>

              <small>
                🪙 {person.xp}
              </small>
            </div>
          ))}

      </div>

      <div className="leaderboard-list">

        {leaderboard
          .slice(3)
          .map((person) => (
            <div
              className="leaderboard-row"
              key={person.rank}
            >
              <span>{person.rank}</span>

              <div className="mini-avatar">
                {person.avatar}
              </div>

              <strong>{person.name}</strong>

              <span>
                🪙 {person.xp}
              </span>
            </div>
          ))}

      </div>

      <button
        type="button"
        className="leaderboard-button"
        onClick={handleViewLeaderboard}
      >
        View Full Leaderboard
        <ChevronRight size={20} />
      </button>

    </aside>
  )
}

export default GiveawayLeaderboard