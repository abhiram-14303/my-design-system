import './Toggle.css'

/**
 * Toggle (switch)
 * @param {boolean} checked      – on/off
 * @param {boolean} disabled
 * @param {boolean} strikethrough
 * @param {boolean} showOnOff    – show "On" / "Off" text label beside the track
 * @param {string}  label        – optional descriptive label (shown after On/Off)
 * @param {function} onChange
 */
function Toggle({
  checked       = false,
  disabled      = false,
  strikethrough = false,
  showOnOff     = false,
  label,
  onChange,
}) {
  const trackCls = [
    'toggle-track',
    checked  ? 'toggle-track--on'       : '',
    disabled ? 'toggle-track--disabled' : '',
  ].filter(Boolean).join(' ')

  return (
    <label
      className={`toggle${disabled ? ' toggle--disabled' : ''}`}
      onClick={!disabled ? onChange : undefined}
    >
      {/* The pill track + sliding thumb */}
      <div className={trackCls}>
        <div className="toggle-thumb" />
      </div>

      {/* On / Off state text */}
      {showOnOff && (
        <span className="toggle-state-text">
          {checked ? 'On' : 'Off'}
        </span>
      )}

      {/* Descriptive label */}
      {label && (
        <span className={`toggle-label${strikethrough ? ' toggle-label--strike' : ''}`}>
          {label}
        </span>
      )}
    </label>
  )
}

export default Toggle
