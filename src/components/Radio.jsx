import './Radio.css'

function Radio({
  checked       = false,
  disabled      = false,
  list          = false,
  forceHover    = false,
  strikethrough = false,
  label,
  name,
  onChange,
}) {
  const wrapCls = [
    'radio',
    disabled                        ? 'radio--disabled' : '',
    forceHover && !disabled         ? 'radio--hovered'  : '',
  ].filter(Boolean).join(' ')

  const ringCls = [
    'radio-ring',
    list     ? 'radio-ring--list'     : '',
    checked  ? 'radio-ring--checked'  : '',
    disabled ? 'radio-ring--disabled' : '',
  ].filter(Boolean).join(' ')

  const handleClick = () => {
    if (!disabled && onChange) onChange()
  }

  return (
    <label className={wrapCls} onClick={handleClick}>
      <div className={ringCls}>
        {checked && <div className="radio-dot" />}
      </div>
      {label && (
        <span className={`radio-label${strikethrough ? ' radio-label--strike' : ''}`}>
          {label}
        </span>
      )}
    </label>
  )
}

export default Radio
