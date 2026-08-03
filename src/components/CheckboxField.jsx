import './CheckboxField.css'

// White tick inside a checked checkbox
const TickSvg = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path d="M1.5 4L3.5 6.5L8.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function CheckboxBox({ checked }) {
  return (
    <div className={`cbf-checkbox${checked ? ' cbf-checkbox--checked' : ''}`}>
      {checked && <TickSvg />}
    </div>
  )
}

/**
 * CheckboxField — an InputField variant with a leading 40×40 checkbox section.
 *
 * Pass `state` to freeze a visual state for demos:
 *   'default-grey' | 'default' | 'hover-selection' | 'selected' |
 *   'hover-field'  | 'typing'  | 'readonly'        | 'error'
 */
function CheckboxField({
  label       = 'Label',
  placeholder = 'Enter',
  state,
  errorMessage = 'It cannot be empty',
}) {
  const isChecked = ['selected', 'hover-field', 'typing', 'readonly', 'error'].includes(state)
  const showText  = isChecked
  const isError   = state === 'error'

  return (
    <div className="cbf-wrapper">
      <span className="cbf-label">{label}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-start' }}>
        <div className={`cbf-field${state ? ` cbf-field--${state}` : ''}`}>

          {/* ── Left: 40×40 checkbox hit zone ── */}
          <div className="cbf-check-box">
            <CheckboxBox checked={isChecked} />
          </div>

          {/* ── Right: text input area ── */}
          <div className={`cbf-input-area${state ? ` cbf-input-area--${state}` : ''}`}>
            <input
              className={`cbf-input${isError ? ' cbf-input--error' : ''}`}
              placeholder={showText ? placeholder : ''}
              readOnly
            />
          </div>

        </div>
        {isError && (
          <span className="cbf-error-msg">{errorMessage}</span>
        )}
      </div>
    </div>
  )
}

export default CheckboxField
