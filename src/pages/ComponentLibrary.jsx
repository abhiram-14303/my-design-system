import React, { useState } from 'react'
import Button from '../components/Button'
import InputField from '../components/InputField'

const menuItems = ['Button', 'Input Field', 'Tabs']

const buttonVariants = [
  { variant: 'primary',         label: 'Primary'         },
  { variant: 'primary-outline', label: 'Primary Outline' },
  { variant: 'failure',         label: 'Failure'         },
  { variant: 'failure-outline', label: 'Failure Outline' },
  { variant: 'neutral',         label: 'Neutral'         },
]

const sizes = [
  { key: 'large',  label: 'Large (40px)'  },
  { key: 'medium', label: 'Medium (32px)' },
  { key: 'small',  label: 'Small (28px)'  },
]

const states = ['default', 'hover', 'active', 'disabled']

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

function ButtonSection() {
  return (
    <div>
      {buttonVariants.map(({ variant, label }) => (
        <div key={variant} style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '20px', color: '#212129' }}>{label}</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(4, 1fr)', gap: '0' }}>
            <div />
            {states.map(state => (
              <div key={state} style={{ fontSize: '13px', color: '#717179', textTransform: 'capitalize', paddingBottom: '12px', textAlign: 'center' }}>
                {state}
              </div>
            ))}

            {sizes.map(({ key, label: sizeLabel }) => (
              <React.Fragment key={key}>
                <div style={{ fontSize: '13px', color: '#717179', display: 'flex', alignItems: 'center', paddingRight: '16px' }}>
                  {sizeLabel}
                </div>
                {states.map(state => (
                  <div key={`${key}-${state}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0' }}>
                    <Button variant={variant} size={key} state={state}>{label}</Button>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const fieldSizes = [
  { id: 'large',  label: 'Large (40px)'  },
  { id: 'medium', label: 'Medium (34px)' },
  { id: 'small',  label: 'Small (28px)'  },
]

function FieldSection() {
  const [activeSize, setActiveSize] = useState('large')
  const [addons, setAddons] = useState({ dropdown: false, lookup: false, clear: false, newBadge: false })

  const toggle = (key) => setAddons(prev => ({ ...prev, [key]: !prev[key] }))

  const checkboxStyle = (active) => ({
    display: 'flex', alignItems: 'center', gap: '6px',
    fontSize: '13px', color: active ? '#00A879' : '#717179', userSelect: 'none', cursor: 'pointer'
  })

  return (
    <div>
      {/* Size pills */}
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        background: '#fff', border: '1px solid #DEE9F0',
        borderRadius: '999px', height: '34px', padding: '3px', gap: '5px',
        marginBottom: '24px'
      }}>
        {fieldSizes.map((size) => (
          <div
            key={size.id}
            onClick={() => setActiveSize(size.id)}
            style={{
              height: '28px', display: 'flex', alignItems: 'center',
              padding: '0 14px', borderRadius: '999px', cursor: 'pointer',
              fontSize: '13px', whiteSpace: 'nowrap', fontWeight: '500',
              background: activeSize === size.id ? '#D7EFFF' : 'transparent',
              color: activeSize === size.id ? '#212129' : '#515159',
              transition: 'all 0.15s'
            }}>
            {size.label}
          </div>
        ))}
      </div>

      {/* Add-on checkboxes */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', alignItems: 'center' }}>
        {[
          { key: 'dropdown', label: 'Dropdown' },
          { key: 'lookup',   label: 'Lookup'   },
          { key: 'clear',    label: 'Clear'     },
          { key: 'newBadge', label: 'New Badge' },
        ].map(({ key, label }) => (
          <label key={key} style={checkboxStyle(addons[key])}>
            <input type="checkbox" checked={addons[key]} onChange={() => toggle(key)}
              style={{ accentColor: '#00A879', width: '14px', height: '14px', cursor: 'pointer' }} />
            {label}
          </label>
        ))}
      </div>

      {/* Fields for selected size */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {fieldStates.map(({ state, label, value }) => (
          <div key={state} style={{ position: 'relative' }}>
            <InputField
              size={activeSize} state={state} label={label} value={value || ''}
              showDropdown={addons.dropdown}
              showLookup={addons.lookup}
              showClear={addons.clear}
              showNew={addons.newBadge}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function PillOption({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: '28px', display: 'flex', alignItems: 'center',
        padding: '0 12px', borderRadius: '999px', cursor: 'pointer',
        fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap',
        background: isActive ? '#D7EFFF' : hovered ? '#F6F9FB' : 'transparent',
        color: isActive ? '#212129' : hovered ? '#0783DA' : '#515159',
        transition: 'all 0.15s'
      }}>
      {label}
    </div>
  )
}

function PrimaryTabOption({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', height: '44px',
        display: 'flex', alignItems: 'center',
        cursor: 'pointer', flexShrink: 0
      }}>
      <span style={{
        fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap',
        color: isActive ? '#212129' : hovered ? '#0783DA' : '#515159',
        transition: 'color 0.15s'
      }}>
        {label}
      </span>
      {isActive && (
        <div style={{
          position: 'absolute', bottom: '-1px',
          left: '-5px', right: '-5px',
          height: '2px', background: '#16B387',
          borderRadius: '999px'
        }} />
      )}
    </div>
  )
}

function TabsSection() {
  const [primaryTab, setPrimaryTab] = useState('import')
  const [pillTab,    setPillTab]    = useState('zylker')
  const [footerTab,  setFooterTab]  = useState('standard')
  const [mainTab,    setMainTab]    = useState('contacts')

  const primaryTabs = [
    { id: 'import',  label: 'Import'      },
    { id: 'export',  label: 'Export'      },
    { id: 'backup',  label: 'Data Backup' },
    { id: 'recycle', label: 'Recycle Bin' },
    { id: 'audit',   label: 'Audit Log'   },
    { id: 'storage', label: 'Storage'     },
  ]

  const pillTabs = [
    { id: 'zylker', label: 'Zylker Solutions'  },
    { id: 'zakya',  label: 'Zakya Technologies' },
    { id: 'pvk',    label: 'PVK Industries'     },
    { id: 'tom',    label: 'Tom Chip Industries' },
    { id: 'jawa',   label: 'Jawa Corporation'   },
  ]

  const footerTabs = [
    { id: 'standard', label: 'Standard'          },
    { id: 'sales',    label: 'New Sales Process'  },
    { id: 'quarter',  label: 'For Quarter - 1'   },
  ]

  const mainTabs = [
    { id: 'contacts',  label: 'All Contacts'     },
    { id: 'prospects', label: 'New Prospects'    },
    { id: 'week',      label: 'This Week'        },
    { id: 'closed',    label: 'Recently Closed'  },
    { id: 'new',       label: 'New Contacts'     },
  ]

  const sectionTitle = (text) => (
    <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#212129', marginBottom: '20px' }}>{text}</h2>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

      {/* Primary Tab */}
      <div>
        {sectionTitle('Primary Tab')}
        <div style={{
          borderBottom: '1px solid #F0F7FB', display: 'flex',
          background: '#FAFDFF', paddingLeft: '20px', gap: '25px'
        }}>
          {primaryTabs.map(tab => (
            <PrimaryTabOption
              key={tab.id}
              label={tab.label}
              isActive={primaryTab === tab.id}
              onClick={() => setPrimaryTab(tab.id)}
            />
          ))}
        </div>
      </div>

      {/* Secondary / Pills Tab */}
      <div>
        {sectionTitle('Secondary Tab / Pills Tab')}
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: '#fff', border: '1px solid #DEE9F0',
          borderRadius: '999px', height: '34px', padding: '3px', gap: '5px'
        }}>
          {pillTabs.map((tab) => (
            <PillOption
              key={tab.id}
              label={tab.label}
              isActive={pillTab === tab.id}
              onClick={() => setPillTab(tab.id)}
            />
          ))}
        </div>
      </div>

      {/* Footer Tab */}
      <div>
        {sectionTitle('Footer Tab')}
        <div style={{ display: 'flex', borderTop: '1px solid #E8EEF3' }}>
          {footerTabs.map(tab => (
            <div key={tab.id} onClick={() => setFooterTab(tab.id)}
              style={{
                padding: '10px 24px', cursor: 'pointer', fontSize: '14px',
                fontWeight: footerTab === tab.id ? '600' : '400',
                color: footerTab === tab.id ? '#212129' : '#717179',
                borderTop: footerTab === tab.id ? '2px solid #17BB8D' : '2px solid transparent',
                marginTop: '-1px', background: footerTab === tab.id ? '#fff' : 'transparent',
                transition: 'all 0.15s', whiteSpace: 'nowrap'
              }}>
              {tab.label}
            </div>
          ))}
          <div style={{
            padding: '10px 16px', cursor: 'pointer', fontSize: '18px',
            color: '#717179', display: 'flex', alignItems: 'center'
          }}>+</div>
        </div>
      </div>

      {/* Main View Tab */}
      <div>
        {sectionTitle('Main View Tab')}
        <div style={{ borderBottom: '1px solid #E8EEF3', display: 'flex', alignItems: 'center' }}>
          {mainTabs.map(tab => (
            <div key={tab.id} onClick={() => setMainTab(tab.id)}
              style={{
                padding: '10px 16px', cursor: 'pointer', fontSize: '14px', whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: '6px',
                fontWeight: mainTab === tab.id ? '600' : '400',
                color: mainTab === tab.id ? '#17BB8D' : '#717179',
                borderBottom: mainTab === tab.id ? '2px solid #17BB8D' : '2px solid transparent',
                marginBottom: '-1px', transition: 'all 0.15s'
              }}>
              {tab.id === 'contacts' && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M1 6.5L8 1L15 6.5V14C15 14.55 14.55 15 14 15H10V10H6V15H2C1.45 15 1 14.55 1 14V6.5Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              )}
              {tab.id === 'prospects' && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 1H12L13 6L8 9L3 6L4 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M8 9V15" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              )}
              {tab.label}
            </div>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 8px' }}>
            <div style={{ fontSize: '13px', color: '#717179', cursor: 'pointer' }}>•••</div>
            <div style={{ fontSize: '13px', color: '#717179', cursor: 'pointer' }}>∧</div>
          </div>
        </div>
      </div>

    </div>
  )
}

function ComponentLibrary() {
  const [active,  setActive]  = useState('Button')
  const [menuHov, setMenuHov] = useState(null)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'white' }}>

      {/* Left Panel */}
      <div style={{ width: '230px', borderRight: '1px solid #E8EEF3', padding: '0', flexShrink: 0, height: '100vh', overflowY: 'auto' }}>
        <div style={{ paddingLeft: '8px', paddingRight: '8px', marginBottom: '15px', paddingTop: '10px' }}>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#212129', paddingLeft: '12px', paddingTop: '15px', paddingBottom: '12px' }}>Bigin Components</p>
        </div>
        <div style={{ paddingLeft: '8px', paddingRight: '8px' }}>
          <p style={{ fontSize: '11px', fontWeight: '600', color: '#717179', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px', paddingLeft: '12px' }}>Components</p>
          {menuItems.map(item => (
            <div
              key={item}
              onClick={() => setActive(item)}
              onMouseEnter={() => setMenuHov(item)}
              onMouseLeave={() => setMenuHov(null)}
              style={{
                padding: '12px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: active === item ? '500' : '400',
                color: active === item ? '#00A879' : menuHov === item ? '#00A879' : '#515159',
                background: active === item ? '#E7F6F2' : menuHov === item ? '#F6F9FB' : 'transparent',
                marginBottom: '4px',
                transition: 'background 0.15s, color 0.15s'
              }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Main Area */}
      <div style={{ flex: 1, padding: '25px 20px', overflowY: 'auto' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '32px' }}>{active}</h1>
        {active === 'Button'      && <ButtonSection />}
        {active === 'Input Field' && <FieldSection  />}
        {active === 'Tabs'        && <TabsSection   />}
      </div>

    </div>
  )
}

export default ComponentLibrary
