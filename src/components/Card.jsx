import './Card.css'
import Button from './Button'
import SummarizerIcon from '../assets/Summarizer.svg'
import PlayIcon from '../assets/Play.svg'

/**
 * Card component
 *
 * @param {string}   title       - Card heading
 * @param {string}   description - Body text
 * @param {string}   icon        - Path to icon SVG (defaults to Summarizer)
 * @param {function} onManage    - Called when Manage is clicked
 * @param {function} onPlay      - Called when Play is clicked
 */
function Card({
  title = 'Summarizer',
  description = 'Auto-generate concise summaries for deals, contacts, and activities.',
  icon = SummarizerIcon,
  onManage,
  onPlay,
}) {
  return (
    <div className="card">
      <div className="card-icon-wrap">
        <img src={icon} alt={title} width={24} height={24} />
      </div>

      <p className="card-title">{title}</p>
      <p className="card-desc">{description}</p>

      <div className="card-footer">
        <Button variant="ai" size="medium" state="default" onClick={onManage}>
          Manage
        </Button>

        <div className="card-divider" />

        <button className="card-play" onClick={onPlay} aria-label="Play">
          <img src={PlayIcon} alt="Play" width={18} height={18} />
        </button>
      </div>
    </div>
  )
}

export default Card
