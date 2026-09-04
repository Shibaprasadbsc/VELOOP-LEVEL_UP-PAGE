import { Trophy, X } from 'lucide-react'

function LevelUpModal({ isOpen, onClose, newLevel, reward }) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="level-up-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1050,
      }}
    >
      <div
        className="level-up-modal__content card shadow-lg"
        style={{
          width: '90%',
          maxWidth: '420px',
        }}
      >
        <div className="card-body text-center position-relative p-4">

          {/* Close Button */}
          <button
            type="button"
            className="btn btn-sm position-absolute top-0 end-0 m-3"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Trophy */}
          <Trophy
            className="level-up-modal__trophy"
            size={60}
          />

          {/* Title */}
          <h2 className="mt-3 mb-2">
            Level Up!
          </h2>

          {/* Message */}
          <p className="text-secondary mb-3">
            Congratulations! You have reached a new level.
          </p>

          {/* New Level */}
          <h3>
            Level {newLevel}
          </h3>

          {/* Reward */}
          {reward && (
            <p className="mt-3 mb-0">
              Reward: <strong>{reward}</strong>
            </p>
          )}

          {/* Continue */}
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={onClose}
          >
            Continue
          </button>

        </div>
      </div>
    </div>
  )
}

export default LevelUpModal