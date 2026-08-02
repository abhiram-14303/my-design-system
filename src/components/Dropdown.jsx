import './Dropdown.css'

function Dropdown({ items = [], value, onChange }) {
  return (
    <div className="dd-container">
      {items.map(item => (
        <div
          key={item.id}
          className={`dd-item ${value === item.id ? 'dd-item-selected' : ''}`}
          onClick={() => onChange && onChange(item.id)}
        >
          {item.icon && <span className="dd-item-icon">{item.icon}</span>}
          <span className="dd-item-label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Dropdown
