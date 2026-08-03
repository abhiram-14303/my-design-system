import { useState } from 'react'
import './Tabs.css'

/**
 * PrimaryTabOption — a single tab in a PrimaryTabs bar.
 * Exported separately in case you need to lay tabs out yourself.
 */
export function PrimaryTabOption({ label, isActive, onClick, boldActive = false }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="ptab-option"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="ptab-label"
        style={{
          color: isActive ? '#212129' : hovered ? '#0783DA' : '#515159',
          fontWeight: isActive && boldActive ? 600 : 500,
        }}
      >
        {label}
      </span>
      {isActive && <div className="ptab-underline" />}
    </div>
  )
}

/**
 * PrimaryTabs — the underlined primary tab bar (green 2px active indicator).
 *
 * @param {Array<{id, label}>} tabs
 * @param {string}             value       active tab id
 * @param {function}           onChange
 * @param {boolean}             compact    tighter padding/gap for use inside panels (e.g. Dropdown)
 * @param {boolean}             boldActive render the active tab's label as semibold (600)
 */
function PrimaryTabs({ tabs = [], value, onChange, compact = false, boldActive = false }) {
  return (
    <div className={`ptab-bar${compact ? ' ptab-bar--compact' : ''}`}>
      {tabs.map(tab => (
        <PrimaryTabOption
          key={tab.id}
          label={tab.label}
          isActive={value === tab.id}
          onClick={() => onChange && onChange(tab.id)}
          boldActive={boldActive}
        />
      ))}
    </div>
  )
}

export default PrimaryTabs
