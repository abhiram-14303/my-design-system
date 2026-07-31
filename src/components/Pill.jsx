import { useState } from 'react'
import './Pill.css'

function Pill({ options = [], value, onChange }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="pill-container">
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => onChange && onChange(option.id)}
          onMouseEnter={() => setHovered(option.id)}
          onMouseLeave={() => setHovered(null)}
          className={`pill-option ${value === option.id ? 'pill-option-active' : ''} ${hovered === option.id && value !== option.id ? 'pill-option-hover' : ''}`}>
          {option.label}
        </div>
      ))}
    </div>
  )
}

export default Pill