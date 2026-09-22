import discordImage from '../../assets/footer/discord.png'
import instagramImage from '../../assets/footer/instagram.png'
import telegramImage from '../../assets/footer/telegram.png'
import youtubeImage from '../../assets/footer/youtube.png'

function Footer() {
  return (
    <footer className="veloop-footer">

      {/* BRAND */}
      <div className="footer-brand">

        <strong>
          VE<span>loop</span>
        </strong>

        <small>
          REWARDS
        </small>

        <p>
          © 2024 Veloop Rewards.
          <br />
          All rights reserved.
        </p>

      </div>


      {/* FOOTER LINKS */}
      <div className="footer-links">

        <a href="#privacy">
          Privacy Policy
        </a>

        <span>|</span>

        <a href="#terms">
          Terms & Conditions
        </a>

        <span>|</span>

        <a href="#support">
          Support
        </a>

      </div>


      {/* SOCIAL LINKS */}
      <div className="social-links">

        <span>
          Follow Us
        </span>

        <a
          href="#discord"
          aria-label="Discord"
        >
          <img
            src={discordImage}
            alt="Discord"
          />
        </a>

        <a
          href="#telegram"
          aria-label="Telegram"
        >
          <img
            src={telegramImage}
            alt="Telegram"
          />
        </a>

        <a
          href="#instagram"
          aria-label="Instagram"
        >
          <img
            src={instagramImage}
            alt="Instagram"
          />
        </a>

        <a
          href="#youtube"
          aria-label="YouTube"
        >
          <img
            src={youtubeImage}
            alt="YouTube"
          />
        </a>

      </div>

    </footer>
  )
}

export default Footer