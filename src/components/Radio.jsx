import './Radio.css'

/**
 * Radio
 * @param {boolean} checked
 * @param {boolean} disabled
 * @param {boolean} strikethrough – label shown with line-through
 * @param {string}  label
 * @param {string}  name         – radio group name
 * @param {function} onChange
 */
function Radio({
  checked       = false,
  disabled      = false,
  strikethrough = false,
  label,
  name,
  onChange,
}) {
  const ringCls = [
    'radio-ring',
    checked  ? 'radio-ring--checked'  : '',
    disabled ? 'radio-ring--disabled' : '',
  ].filter(Boolean).join(' ')

  return (
    <label
      className={`radio${disabled ? ' radio--disabled' : ''}`}
      onClick={!disabled ? onChange : undefined}
    >
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
