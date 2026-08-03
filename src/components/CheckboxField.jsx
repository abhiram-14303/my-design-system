import Checkbox from './Checkbox'
import './CheckboxField.css'

/**
 * CheckboxField — a text input with a leading 40×40 checkbox zone.
 * Uses the shared Checkbox component from the Selection set.
 * Displayed in "Default grey bg" style only (no separate hover/focus states).
 */
function CheckboxField({ label = 'Label', placeholder = 'Enter' }) {
  return (
    <div className="cbf-wrapper">
      {label && <span className="cbf-label">{label}</span>}
      <div className="cbf-field">
        <div className="cbf-check-box">
          <Checkbox />
        </div>
        <div className="cbf-input-area">
          <input className="cbf-input" placeholder={placeholder} />
        </div>
      </div>
    </div>
  )
}

export default CheckboxField
