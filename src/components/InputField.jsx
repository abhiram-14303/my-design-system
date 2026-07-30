import { useState } from 'react'
import './InputField.css'

function InputField({ label = 'Label Name', placeholder = 'Enter', state, errorMessage = 'It cannot be empty', value: defaultValue = '' }) {
  const [val, setVal]       = useState(defaultValue)
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Static display mode (used in modal)
  if (state) {
    return (
      <div className="field-wrapper">
        <span className="field-label">{label}</span>
        <div className="field-input-container">
          <input
            className={`field-input field-${state}`}
            placeholder={placeholder}
            disabled={state === 'disabled'}
            readOnly={state === 'readonly'}
            defaultValue={defaultValue}
          />
          {state === 'error' && <span className="field-error-msg">{errorMessage}</span>}
        </div>
      </div>
    )
  }

  // Interactive mode (used on main page)
  const getClass = () => {
    if (focused && val) return 'filled-focused'
    if (focused)        return 'focus'
    if (hovered)        return 'hover'
    if (val)            return 'filled-unfocused'
    return 'default'
  }

  return (
    <div className="field-wrapper">
      <span className="field-label">{label}</span>
      <div className="field-input-container">
        <input
          className={`field-input field-${getClass()}`}
          placeholder={placeholder}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>
    </div>
  )
}

export default InputField