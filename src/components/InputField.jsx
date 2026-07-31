import { useState } from 'react'
import './InputField.css'

const DropdownIcon = () => (
  <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99998 0L3.99998 4L0 0H7.99998Z" fill="#606A81"/>
  </svg>
)

const LookupIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.24996 15.25H13.25C14.3545 15.25 15.25 14.3546 15.25 13.25V3.25C15.25 1.86929 14.1307 0.75 12.75 0.75H8.74996C7.36925 0.75 6.24996 1.86929 6.24996 3.25V15.25ZM6.24996 15.25H3.25C1.86929 15.25 0.75 14.1307 0.75 12.75V10.5231C0.75 9.72322 1.13271 8.97166 1.77957 8.50122L6.25 5.50003M9.74996 7.25003H11.75M9.74996 4.25003H11.75M12.25 15.25H9.24996V13.25C9.24996 12.6977 9.69768 12.25 10.25 12.25H11.25C11.8022 12.25 12.25 12.6977 12.25 13.25V15.25Z" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ClearIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0.5C15.2467 0.5 19.5 4.7533 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.7533 19.5 0.5 15.2467 0.5 10C0.5 4.7533 4.7533 0.5 10 0.5Z" fill="#E7F1F7"/>
    <path d="M10 0.5C15.2467 0.5 19.5 4.7533 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.7533 19.5 0.5 15.2467 0.5 10C0.5 4.7533 4.7533 0.5 10 0.5Z" stroke="#E7F1F7"/>
    <path d="M6.75 6.75L13.25 13.25M13.25 6.75L6.75 13.25" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const NewBadge = () => (
  <span style={{
    background: '#59BBFF', color: 'white', fontSize: '13px', fontWeight: '500',
    padding: '2px 10px', borderRadius: '999px', fontFamily: 'ZohoPuvi, sans-serif',
    whiteSpace: 'nowrap'
  }}>New</span>
)

function FieldIcons({ showNew, showClear, showLookup, showDropdown }) {
  return (
    <div style={{
      position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
      display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'none'
    }}>
      {showNew      && <NewBadge />}
      {showClear    && <ClearIcon />}
      {showLookup   && <LookupIcon />}
      {showDropdown && <DropdownIcon />}
    </div>
  )
}

function getIconPadding(showNew, showClear, showLookup, showDropdown) {
  let width = 12
  if (showNew)      width += 58
  if (showClear)    width += 26
  if (showLookup)   width += 22
  if (showDropdown) width += 14
  return `${width}px`
}

function InputField({
  label = 'Label Name', placeholder = 'Enter', state,
  errorMessage = 'It cannot be empty', value: defaultValue = '',
  error, onChange, size = 'large',
  showDropdown = false, showLookup = false, showClear = false, showNew = false
}) {
  const [val,     setVal]     = useState(defaultValue)
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)

  const hasIcons   = showDropdown || showLookup || showClear || showNew
  const rightPad   = hasIcons ? getIconPadding(showNew, showClear, showLookup, showDropdown) : '12px'

  if (state) {
    return (
      <div className="field-wrapper">
        <span className="field-label">{label}</span>
        <div className="field-input-container">
          <input
            className={`field-input field-${size} field-${state}`}
            placeholder={placeholder}
            disabled={state === 'disabled'}
            readOnly={state === 'readonly'}
            defaultValue={defaultValue}
            style={{ paddingRight: rightPad }}
          />
          {hasIcons && <FieldIcons showNew={showNew} showClear={showClear} showLookup={showLookup} showDropdown={showDropdown} />}
          {state === 'error' && <span className="field-error-msg">{errorMessage}</span>}
        </div>
      </div>
    )
  }

  const getClass = () => {
    if (error)           return 'error'
    if (focused && val)  return 'filled-focused'
    if (focused)         return 'focus'
    if (hovered)         return 'hover'
    if (val)             return 'filled-unfocused'
    return 'default'
  }

  return (
    <div className="field-wrapper">
      <span className="field-label">{label}</span>
      <div className="field-input-container">
        <input
          className={`field-input field-${size} field-${getClass()}`}
          placeholder={placeholder}
          value={val}
          onChange={(e) => { setVal(e.target.value); onChange && onChange(e.target.value) }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ paddingRight: rightPad }}
        />
        {hasIcons && <FieldIcons showNew={showNew} showClear={showClear} showLookup={showLookup} showDropdown={showDropdown} />}
        {error && <span className="field-error-msg">{errorMessage}</span>}
      </div>
    </div>
  )
}

export default InputField