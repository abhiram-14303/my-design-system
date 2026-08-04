import './Toggle.css'

function Toggle({
  checked       = false,
  disabled      = false,
  forceHover    = false,
  strikethrough = false,
  showOnOff     = false,
  label,
  onChange,
}) {
  const wrapCls = [
    'toggle',
    disabled                ? 'toggle--disabled' : '',
    forceHover && !disabled ? 'toggle--hovered'  : '',
  ].filter(Boolean).join(' ')

  const trackCls = [
    'toggle-track',
    checked  ? 'toggle-track--on'       : '',
    disabled ? 'toggle-track--disabled' : '',
  ].filter(Boolean).join(' ')

  return (
    <label className={wrapCls} onClick={!disabled ? onChange : undefined}>
      <div className={trackCls}>
        <div className="toggle-thumb" />
      </div>

      {showOnOff && (
        <span className="toggle-state-text">{checked ? 'On' : 'Off'}</span>
      )}

      {label && (
        <span className={`toggle-label${strikethrough ? ' toggle-label--strike' : ''}`}>
          {label}
        </span>
      )}
    </label>
  )
}

export default Toggle
