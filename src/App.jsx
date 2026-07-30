import { useState } from 'react'
import Button from './components/Button'
import InputField from './components/InputField'

const fieldStates = [
  { state: 'default',          label: 'Default'           },
  { state: 'secondary',        label: 'Secondary Default'  },
  { state: 'hover',            label: 'Hover'             },
  { state: 'focus',            label: 'Focus'             },
  { state: 'filled-focused',   label: 'Filled Focused',   value: 'Enter' },
  { state: 'filled-unfocused', label: 'Filled Unfocused', value: 'Enter' },
  { state: 'readonly',         label: 'Read Only',        value: 'Enter' },
  { state: 'disabled',         label: 'Disabled'          },
  { state: 'error',            label: 'Error'             },
]

function App() {
  const [hovered,      setHovered]      = useState(null)
  const [fieldHovered, setFieldHovered] = useState(false)
  const [modal,        setModal]        = useState(null)

  const sizes = ['large', 'medium', 'small']

  return (
    <div style={{ padding: '40px' }}>

      {/* ── Buttons ── */}
      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>Buttons</h1>

      {/* Primary Row */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
        {sizes.map(size => {
          const id    = `primary-${size}`
          const label = `${size.charAt(0).toUpperCase() + size.slice(1)} Primary`
          return (
            <div
              key={id}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Button variant="primary" size={size} state="default">{label}</Button>
              <span
                onClick={() => setModal({ type: 'button', variant: 'primary', size, label })}
                style={{
                  fontSize: '12px', color: '#1B6EE4', cursor: 'pointer', userSelect: 'none',
                  visibility: hovered === id ? 'visible' : 'hidden'
                }}
              >
                Show all states
              </span>
            </div>
          )
        })}
      </div>

      {/* Failure Row */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '60px' }}>
        {sizes.map(size => {
          const id    = `failure-${size}`
          const label = `${size.charAt(0).toUpperCase() + size.slice(1)} Failure`
          return (
            <div
              key={id}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Button variant="failure" size={size} state="default">{label}</Button>
              <span
                onClick={() => setModal({ type: 'button', variant: 'failure', size, label })}
                style={{
                  fontSize: '12px', color: '#1B6EE4', cursor: 'pointer', userSelect: 'none',
                  visibility: hovered === id ? 'visible' : 'hidden'
                }}
              >
                Show all states
              </span>
            </div>
          )
        })}
      </div>

      {/* ── Input Field ── */}
      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>Input Field</h1>

      <div
        style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
        onMouseEnter={() => setFieldHovered(true)}
        onMouseLeave={() => setFieldHovered(false)}
      >
        <InputField label="Field" />
        <span
          onClick={() => setModal({ type: 'field' })}
          style={{
            fontSize: '12px', color: '#1B6EE4', cursor: 'pointer',
            whiteSpace: 'nowrap', userSelect: 'none',
            visibility: fieldHovered ? 'visible' : 'hidden'
          }}
        >
          Show all states
        </span>
      </div>

      {/* ── Right Modal ── */}
      {modal && (
        <>
          <div
            onClick={() => setModal(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.15)', zIndex: 998 }}
          />
          <div style={{
            position: 'fixed', top: 0, right: 0, bottom: 0,
            width: '460px', background: 'white',
            zIndex: 999, padding: '32px', overflowY: 'auto',
            boxShadow: '-4px 0 24px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600' }}>
                {modal.type === 'button' ? modal.label : 'Input Field'}
              </h2>
              <span onClick={() => setModal(null)} style={{ cursor: 'pointer', fontSize: '18px', color: '#717179' }}>✕</span>
            </div>

            {modal.type === 'button' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {['default', 'hover', 'active', 'disabled'].map(state => (
                  <div key={state} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '13px', color: '#717179', width: '65px', textTransform: 'capitalize' }}>{state}</span>
                    <Button variant={modal.variant} size={modal.size} state={state}>{modal.label}</Button>
                  </div>
                ))}
              </div>
            )}

            {modal.type === 'field' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {fieldStates.map(({ state, label, value }) => (
                  <InputField key={state} state={state} label={label} value={value || ''} />
                ))}
              </div>
            )}
          </div>
        </>
      )}

    </div>
  )
}

export default App