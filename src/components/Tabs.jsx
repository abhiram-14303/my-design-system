import { useState } from 'react'
import './Tabs.css'

/**
 * PrimaryTabOption — a single tab in a PrimaryTabs bar.
 * @param {string}  label
 * @param {string}  count      — optional count badge text (e.g. "99+")
 * @param {boolean} showCount  — when true, renders the count badge
 * @param {boolean} isActive
 * @param {boolean} boldActive
 */
export function PrimaryTabOption({ label, count, showCount = false, isActive, onClick, boldActive = false }) {
  const [hovered, setHovered] = useState(false)
  const textColor = isActive ? '#212129' : hovered ? '#0783DA' : '#515159'

  return (
    <div
      className="ptab-option"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="ptab-label"
        style={{ color: textColor, fontWeight: isActive && boldActive ? 600 : 500 }}
      >
        {label}
      </span>

      {showCount && count && (
        <div className="ptab-count">
          <span style={{ color: '#212129' }}>{count}</span>
        </div>
      )}

      {isActive && <div className="ptab-underline" />}
    </div>
  )
}

/**
 * PrimaryTabs — the underlined primary tab bar (green 2px active indicator).
 *
 * @param {Array<{id, label, count}>} tabs
 * @param {string}   value
 * @param {function} onChange
 * @param {boolean}  showCount  — pass true to show count badges on all tabs
 * @param {boolean}  compact
 * @param {boolean}  boldActive
 */
function PrimaryTabs({ tabs = [], value, onChange, showCount = false, compact = false, boldActive = false }) {
  return (
    <div className={`ptab-bar${compact ? ' ptab-bar--compact' : ''}`}>
      {tabs.map(tab => (
        <PrimaryTabOption
          key={tab.id}
          label={tab.label}
          count={tab.count}
          showCount={showCount}
          isActive={value === tab.id}
          onClick={() => onChange && onChange(tab.id)}
          boldActive={boldActive}
        />
      ))}
    </div>
  )
}

export default PrimaryTabs
