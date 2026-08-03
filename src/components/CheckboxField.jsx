import { useState } from 'react'
import './CheckboxField.css'

// White tick inside a checked box
const TickSvg = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path d="M1.5 4L3.5 6.5L8.5 1.5" stroke="white" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function CheckboxBox({ checked }) {
  return (
    <div className={`cbf-checkbox${checked ? ' cbf-checkbox--checked' : ''}`}>
      {checked && <TickSvg />}
    </div>
  )
}

// ── Interactive mode (no `state` prop) ────────────────────────────────────
// The two halves are independent hover targets:
//   • Hover LEFT section  → hover-selection  (only the checkbox side lights up green)
//   • Hover RIGHT section → hover-field      (both sides turn green; field gets its own box)
//   • Click checkbox      → checked ↔ unchecked
//   • Focus input         → typing (green + shadow)

function CheckboxFieldInteractive({ label, placeholder = 'Enter', errorMessage = 'It cannot be empty' }) {
  const [checked,      setChecked]      = useState(false)
  const [checkHovered, setCheckHovered] = useState(false)
  const [fieldHovered, setFieldHovered] = useState(false)
  const [fieldFocused, setFieldFocused] = useState(false)
  const [val,          setVal]          = useState('')

  // Compute current visual state from independent section states
  const getVisualState = () => {
    if (fieldFocused)              return 'typing'
    if (fieldHovered && checked)   return 'hover-field'
    if (checkHovered && !checked)  return 'hover-selection'
    if (checked)                   return 'selected'
    return 'default'
  }

  const vs = getVisualState()

  return (
    <div className="cbf-wrapper">
      {label && <span className="cbf-label">{label}</span>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-start' }}>
        <div className={`cbf-field cbf-field--${vs}`}>

          {/* LEFT: checkbox — independent hover + click */}
          <div
            className="cbf-check-box"
            style={{ cursor: 'pointer' }}
            onClick={() => setChecked(c => !c)}
            onMouseEnter={() => setCheckHovered(true)}
            onMouseLeave={() => setCheckHovered(false)}
          >
            <CheckboxBox checked={checked} />
          </div>

          {/* RIGHT: text input — independent hover + focus */}
          <div
            className={`cbf-input-area cbf-input-area--${vs}`}
            onMouseEnter={() => setFieldHovered(true)}
            onMouseLeave={() => setFieldHovered(false)}
          >
            <input
              className="cbf-input"
              placeholder={placeholder}
              value={val}
              onChange={e => setVal(e.target.value)}
              onFocus={() => setFieldFocused(true)}
              onBlur={() => setFieldFocused(false)}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

// ── Static display mode (pass `state` prop for demos) ─────────────────────
function CheckboxFieldStatic({ label, placeholder = 'Enter', state, errorMessage = 'It cannot be empty' }) {
  const isChecked = ['selected', 'hover-field', 'typing', 'readonly', 'error'].includes(state)
  const showText  = isChecked
  const isError   = state === 'error'

  return (
    <div className="cbf-wrapper">
      <span className="cbf-label">{label}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-start' }}>
        <div className={`cbf-field cbf-field--${state}`}>
          <div className="cbf-check-box">
            <CheckboxBox checked={isChecked} />
          </div>
          <div className={`cbf-input-area cbf-input-area--${state}`}>
            <input
              className={`cbf-input${isError ? ' cbf-input--error' : ''}`}
              placeholder={showText ? placeholder : ''}
              readOnly
            />
          </div>
        </div>
        {isError && <span className="cbf-error-msg">{errorMessage}</span>}
      </div>
    </div>
  )
}

/**
 * CheckboxField — input field with a leading 40×40 checkbox section.
 *
 * No `state` prop  →  fully interactive (live prototype)
 * With `state` prop →  static demo display:
 *   'default-grey' | 'default' | 'hover-selection' | 'selected' |
 *   'hover-field'  | 'typing'  | 'readonly'        | 'error'
 */
function CheckboxField({ state, ...rest }) {
  if (state) return <CheckboxFieldStatic state={state} {...rest} />
  return <CheckboxFieldInteractive {...rest} />
}

export default CheckboxField
