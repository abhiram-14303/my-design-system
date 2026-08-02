import { useState } from 'react'
import './Search.css'

// ── Icons ─────────────────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M13.6005 13.5528C13.0043 14.1491 12.2471 14.1491 11.8023 13.5528L8.92523 10.2782C9.46453 9.90909 9.91892 9.45481 10.288 8.91534L13.6005 11.7736C14.2061 12.3698 14.0548 13.108 13.6005 13.5528Z" fill="currentColor"/>
    <path d="M5.95591 0.75C3.11662 0.75 0.750549 3.02143 0.750549 5.95536C0.750549 8.88929 3.02198 11.1607 5.95591 11.1607C8.88984 11.1607 11.1613 8.88929 11.1613 5.95536C11.1613 3.02143 8.7952 0.75 5.95591 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* Same X path as PanelHeader close icon, rendered at 8px */
const CloseIcon = () => (
  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
    <path d="M0.75 0.75L9.25 9.25M9.25 0.75L0.75 9.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Search Standard ───────────────────────────────────────────────────────────

/**
 * Search (Standard)
 *
 * @param {'rounded'|'cornered'|'dard'} variant
 * @param {boolean}                     showClose   external X button beside the field
 * @param {string}                      placeholder
 * @param {boolean}                     disabled
 * @param {string}                      value       controlled value (optional)
 * @param {'hover'|'focused'|null}      forceState  force a display state (library use)
 * @param {fn} onChange / onClear / onClose
 */
function Search({
  variant     = 'rounded',
  showClose   = false,
  placeholder = 'Search',
  disabled    = false,
  value: valueProp,
  forceState  = null,
  onChange,
  onClear,
  onClose,
}) {
  const [internal, setInternal] = useState('')
  const [focused,  setFocused]  = useState(false)

  const controlled = valueProp !== undefined
  const value      = controlled ? valueProp : internal
  const isDark     = variant === 'dard'
  const isFocused  = focused || forceState === 'focused'
  const isHovered  = forceState === 'hover'

  const handleChange = (e) => {
    if (!controlled) setInternal(e.target.value)
    onChange?.(e.target.value)
  }

  const handleClear = () => {
    if (!controlled) setInternal('')
    onClear?.()
  }

  // When value is present: show clear X, hide search icon (Typing / After Typed)
  const hasValue = Boolean(value)

  const fieldCls = [
    'search-field',
    `search-field--${variant}`,
    hasValue   ? 'search-field--has-value' : '',
    isFocused  ? 'search-field--focused'  : '',
    isHovered  ? 'search-field--hovered'  : '',
    disabled   ? 'search-field--disabled' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className="search-outer">
      <div className={fieldCls}>
        <input
          className="search-input"
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {/* Clear button — only when there is text and not disabled */}
        {hasValue && !disabled && (
          <button className="search-btn-clear" onClick={handleClear} tabIndex={-1}>
            <CloseIcon />
          </button>
        )}

        {/* Search icon — only when field is empty (or disabled) */}
        {(!hasValue || disabled) && (
          <span className="search-icon">
            <SearchIcon />
          </span>
        )}
      </div>

      {/* External close button (+Close variants) */}
      {showClose && (
        <button
          className="search-btn-close"
          onClick={onClose}
          disabled={disabled}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

// ── Search Global ─────────────────────────────────────────────────────────────

export function SearchGlobal({
  category        = 'All',
  placeholder     = 'Search (cmd+k)',
  value: valueProp,
  onChange,
  onClear,
  onCategoryClick,
}) {
  const [internal, setInternal] = useState('')
  const [leftHov,  setLeftHov]  = useState(false)
  const [rightHov, setRightHov] = useState(false)
  const [focused,  setFocused]  = useState(false)

  const controlled = valueProp !== undefined
  const value      = controlled ? valueProp : internal

  const handleChange = (e) => {
    if (!controlled) setInternal(e.target.value)
    onChange?.(e.target.value)
  }

  const handleClear = () => {
    if (!controlled) setInternal('')
    onClear?.()
  }

  return (
    <div className="sg-bar">
      <div
        className={`sg-left${leftHov ? ' sg-left--hover' : ''}`}
        onMouseEnter={() => setLeftHov(true)}
        onMouseLeave={() => setLeftHov(false)}
        onClick={onCategoryClick}
      >
        <span className="sg-category">{category}</span>
        <ChevronIcon />
      </div>

      <div className="sg-divider" />

      <div
        className={`sg-right${rightHov || focused ? ' sg-right--hover' : ''}`}
        onMouseEnter={() => setRightHov(true)}
        onMouseLeave={() => setRightHov(false)}
      >
        <input
          className="sg-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {value ? (
          <button className="search-btn-clear sg-clear" onClick={handleClear} tabIndex={-1}>
            <CloseIcon />
          </button>
        ) : (
          <span className="sg-icon"><SearchIcon /></span>
        )}
      </div>
    </div>
  )
}

export default Search
