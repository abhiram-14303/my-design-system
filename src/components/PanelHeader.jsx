import './PanelHeader.css'

const CloseIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M0.75 0.75L9.25 9.25M9.25 0.75L0.75 9.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function PanelHeader({ title, description, showClose = false, onClose }) {
  if (description) {
    return (
      <div className="panel-header-desc-wrap">
        <div className="panel-header-desc-content">
          <span className="panel-header-title panel-header-title--ellipsis">{title}</span>
          <span className="panel-header-desc">{description}</span>
        </div>
        {showClose && (
          <button className="panel-header-close" onClick={onClose}>
            <CloseIcon />
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="panel-header">
      <span className="panel-header-title">{title}</span>
      {showClose && (
        <button className="panel-header-close" onClick={onClose}>
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

export default PanelHeader
