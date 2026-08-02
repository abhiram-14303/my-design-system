import { useState, useRef, useEffect } from 'react'
import Dropdown from './Dropdown'
import './SelectField.css'

const ChevronDown = () => (
  <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
    <path d="M7.99998 0L3.99998 4L0 0H7.99998Z" fill="#606A81"/>
  </svg>
)

/**
 * SelectField — styled dropdown trigger that opens the Dropdown list panel
 *
 * @param {string}   placeholder  — grey hint text when nothing selected
 * @param {Array}    options       — array of { id, label, icon? }
 * @param {string}   value         — controlled selected id
 * @param {function} onChange      — called with selected id
 */
function SelectField({ placeholder = 'Select', options = [], value, onChange, mandatory = false }) {
  const [open, setOpen]   = useState(false)
  const [val,  setVal]    = useState(value ?? '')
  const ref               = useRef(null)

  // Sync if controlled value changes
  useEffect(() => { if (value !== undefined) setVal(value) }, [value])

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selected = options.find(o => o.id === val)

  const handleSelect = (id) => {
    setVal(id)
    onChange && onChange(id)
    setOpen(false)
  }

  return (
    <div ref={ref} className="sf-wrap">
      <button
        type="button"
        className={`sf-trigger${open ? ' sf-trigger--open' : ''}${mandatory ? ' sf-trigger--mandatory' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className={selected ? 'sf-val' : 'sf-placeholder'}>
          {selected ? selected.label : placeholder}
        </span>
        <span className={`sf-chevron${open ? ' sf-chevron--up' : ''}`}>
          <ChevronDown />
        </span>
      </button>

      {open && (
        <div className="sf-panel">
          <Dropdown items={options} value={val} onChange={handleSelect} />
        </div>
      )}
    </div>
  )
}

export default SelectField
