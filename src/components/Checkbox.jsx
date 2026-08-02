import './Checkbox.css'

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path d="M8.75 0.75L2.87 6.42998L0.75 4.10999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DashIcon = () => (
  <svg width="8" height="2" viewBox="0 0 8 2" fill="none">
    <line x1="1" y1="1" x2="7" y2="1" stroke="#4B556E" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

function Checkbox({
  checked       = false,
  indeterminate = false,
  disabled      = false,
  blocked       = false,
  strikethrough = false,
  variant       = 'common',
  forceHover    = false,
  label,
  onChange,
}) {
  const isChecked = checked && !indeterminate

  const wrapCls = [
    'cb',
    disabled   ? 'cb--disabled' : '',
    blocked    ? 'cb--blocked'  : '',
    forceHover && !disabled && !blocked ? 'cb--hovered' : '',
  ].filter(Boolean).join(' ')

  const boxCls = [
    'cb-box',
    variant === 'list'  ? 'cb-box--list'         : '',
    isChecked           ? 'cb-box--checked'       : '',
    indeterminate       ? 'cb-box--indeterminate' : '',
    disabled            ? 'cb-box--disabled'      : '',
    blocked             ? 'cb-box--blocked'       : '',
  ].filter(Boolean).join(' ')

  const handleClick = () => {
    if (!disabled && !blocked && onChange) onChange()
  }

  return (
    <div className={wrapCls} onClick={handleClick}>
      <div className={boxCls}>
        {isChecked     && <CheckIcon />}
        {indeterminate && <DashIcon />}
      </div>
      {label && (
        <span className={`cb-label${strikethrough ? ' cb-label--strike' : ''}`}>
          {label}
        </span>
      )}
    </div>
  )
}

export default Checkbox
