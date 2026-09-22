import { ChevronRight } from 'lucide-react'

import giftBoxImage from '../../assets/giveawayleaderboard/giveaway_gift_box.png'
import starSparkleImage from '../../assets/giveawayleaderboard/giveaway_star_sparkle.png'

import rank1Image from '../../assets/giveawayleaderboard/leaderboard_rank_1.png'
import rank2Image from '../../assets/giveawayleaderboard/leaderboard_rank_2.png'
import rank3Image from '../../assets/giveawayleaderboard/leaderboard_rank_3.png'

import coinImage from '../../assets/decorative/coin.png'

const leaderboard = [
  {
    rank: 1,
    name: '@RockyVE',
    xp: '12,540',
    image: rank1Image,
  },
  {
    rank: 2,
    name: '@Hunter7',
    xp: '9,870',
    image: rank2Image,
  },
  {
    rank: 3,
    name: '@LootLord',
    xp: '7,230',
    image: rank3Image,
  },
  {
    rank: 4,
    name: '@Tapzy',
    xp: '6,420',
  },
  {
    rank: 5,
    name: '@ShadowVE',
    xp: '5,910',
  },
  {
    rank: 6,
    name: '@Veloking',
    xp: '4,870',
  },
  {
    rank: 7,
    name: '@VE_Master',
    xp: '4,230',
  },
  {
    rank: 8,
    name: '@BunnyX',
    xp: '3,890',
  },
]

function GiveawayLeaderboard() {
  const handleViewLeaderboard = () => {
    console.log('Opening full leaderboard')
  }

  return (
    <aside
      id="giveaway"
      className="giveaway-card"
    >

      {/* HEADER */}

      <div className="giveaway-heading">

        <img
          src={giftBoxImage}
          alt=""
          className="giveaway-heading-image giveaway-heading-image--gift"
        />

        <h2>GIVEAWAY LEADERBOARD</h2>

        <img
          src={starSparkleImage}
          alt=""
          className="giveaway-heading-image giveaway-heading-image--sparkle"
        />

      </div>


      {/* COUNTDOWN */}

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


      {/* TOP THREE */}

      <div className="top-three">

        {leaderboard
          .slice(0, 3)
          .map((person) => (
            <div
              key={person.rank}
              className={`top-user rank-${person.rank}`}
            >

              <div className="avatar">

                <img
                  src={person.image}
                  alt={`${person.name} rank ${person.rank}`}
                  className="leaderboard-rank-image"
                />

              </div>

              <span className="rank">
                {person.rank}
              </span>

              <strong>
                {person.name}
              </strong>

              <small>

                <img
                  src={coinImage}
                  alt=""
                  className="leaderboard-coin-image"
                />

                {person.xp}

              </small>

            </div>
          ))}

      </div>


      {/* LEADERBOARD LIST */}

      <div className="leaderboard-list">

        {leaderboard
          .slice(3)
          .map((person) => (
            <div
              className="leaderboard-row"
              key={person.rank}
            >

              <span>
                {person.rank}
              </span>

              <div className="mini-avatar">
                <span>
                  {person.name.charAt(1).toUpperCase()}
                </span>
              </div>

              <strong>
                {person.name}
              </strong>

              <span className="leaderboard-xp">

                <img
                  src={coinImage}
                  alt=""
                  className="leaderboard-coin-image"
                />

                {person.xp}

              </span>

            </div>
          ))}

      </div>


      {/* BUTTON */}

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