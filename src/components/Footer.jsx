import Button from './Button'
import './Footer.css'

// ── Left-slot building blocks ─────────────────────────────────────────────────

/** Icon (or gray placeholder) + optional label */
export const FooterIconAction = ({ icon, label }) => (
  <span className="footer-icon-action">
    {icon !== undefined
      ? <span className="footer-icon-svg">{icon}</span>
      : <span className="footer-icon-placeholder" />
    }
    {label && <span className="footer-icon-action-label">{label}</span>}
  </span>
)

/** Muted info text */
export const FooterTextInfo = ({ children }) => (
  <span className="footer-text-info">{children}</span>
)

/** Blue text link */
export const FooterLink = ({ children, onClick }) => (
  <button className="footer-link" onClick={onClick}>{children}</button>
)

/** Highlighted badge pill (e.g. "Pro Plan") */
export const FooterBadge = ({ children }) => (
  <span className="footer-badge">{children}</span>
)

// ── Footer ────────────────────────────────────────────────────────────────────

/**
 * Footer component
 *
 * @param {Array}     actions    Right-side buttons: [{label, variant, size, onClick}]
 * @param {ReactNode} leftSlot   Optional left content (use FooterIconAction / FooterTextInfo / etc.)
 * @param {boolean}   centered   Center the action buttons
 */
function Footer({
  actions = [
    { label: 'Cancel', variant: 'neutral' },
    { label: 'Save',   variant: 'primary' },
  ],
  leftSlot = null,
  centered = false,
}) {
  const cls = [
    'footer',
    leftSlot !== null ? 'footer--has-left' : '',
    centered         ? 'footer--centered'  : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={cls}>
      {leftSlot !== null && (
        <div className="footer-left">{leftSlot}</div>
      )}
      <div className="footer-actions">
        {actions.map((action, i) => (
          <Button
            key={i}
            variant={action.variant || 'primary'}
            size={action.size || 'large'}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Footer
