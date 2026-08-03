import React, { useState } from 'react'
import Button from '../components/Button'
import InputField from '../components/InputField'
import Dropdown from '../components/Dropdown'
import PanelHeader from '../components/PanelHeader'
import Footer, { FooterIconAction, FooterTextInfo, FooterLink, FooterBadge } from '../components/Footer'
import Checkbox from '../components/Checkbox'
import Radio    from '../components/Radio'
import Toggle   from '../components/Toggle'
import Search, { SearchGlobal } from '../components/Search'
import RightModal from '../components/RightModal'
import SideMenu from '../components/SideMenu'
import PageSources from '../components/PageSources'
import QuickPreview, { PREVIEWS } from '../components/QuickPreview'

const menuItems = ['Button', 'Input Field', 'Tabs', 'Dropdown', 'Header', 'Footer', 'Selection', 'Search', 'Right Modal', 'Side Menu', 'Page Sources', 'Quick Previews']

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

const dropdownItems = [
  { id: 'opt1', label: 'Option 1' },
  { id: 'opt2', label: 'Option 2' },
  { id: 'opt3', label: 'Option 3' },
  { id: 'opt4', label: 'Option 4' },
]

function FieldSection() {
  const [activeSize, setActiveSize] = useState('large')
  const [addons, setAddons] = useState({ dropdown: false, lookup: false, clear: false, newBadge: false })
  const [openDropdown, setOpenDropdown] = useState(null)
  const [dropdownVal, setDropdownVal] = useState(null)

  const toggle = (key) => setAddons(prev => ({ ...prev, [key]: !prev[key] }))

  const checkboxStyle = (active) => ({
    display: 'flex', alignItems: 'center', gap: '6px',
    fontSize: '13px', color: active ? '#00A879' : '#717179', userSelect: 'none', cursor: 'pointer'
  })

  // close dropdown on outside click
  React.useEffect(() => {
    const close = () => setOpenDropdown(null)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  // top offset = field height + 2px gap
  const fieldHeight = activeSize === 'large' ? 40 : activeSize === 'medium' ? 34 : 28
  const dropdownTop = fieldHeight + 2

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
          <div
            key={state}
            style={{ position: 'relative' }}
            onClick={addons.dropdown ? (e) => { e.stopPropagation(); setOpenDropdown(openDropdown === state ? null : state) } : undefined}
          >
            <InputField
              size={activeSize} state={state} label={label} value={value || ''}
              showDropdown={addons.dropdown}
              showLookup={addons.lookup}
              showClear={addons.clear}
              showNew={addons.newBadge}
            />
            {addons.dropdown && openDropdown === state && (
              <div
                style={{ position: 'absolute', top: dropdownTop, left: 140, zIndex: 100 }}
                onClick={e => e.stopPropagation()}
              >
                <Dropdown items={dropdownItems} value={dropdownVal} onChange={setDropdownVal} />
              </div>
            )}
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

const sampleItems = [
  { id: 'default',  label: 'Set as Default' },
  { id: 'rename',   label: 'Rename'         },
  { id: 'reorder',  label: 'Reorder'        },
  { id: 'visibility', label: 'Visibility'   },
  { id: 'fullscreen', label: 'Full Screen'  },
  { id: 'delete',   label: 'Delete', destructive: true },
]

const DdEditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7.23 2.7C7.58 4.79 9.15 6.54 11.25 6.72M12.13 1.75c1.75 1.6 1.22 2.83 0 4.07L5.67 12.37c-.17.18-.7.53-1.05.53l-2.44.35H1.66c-.53 0-1.05-.71-.88-1.42l.35-2.48c0-.35.17-.7.53-1.05L8.11 1.76c1.22-1.06 2.44-1.6 4.02-.01Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const DdTrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 3.5h10M5.5 3.5V2a1 1 0 011-1h1a1 1 0 011 1v1.5M3 3.5l.6 8.4A1.5 1.5 0 005.1 13.3h3.8a1.5 1.5 0 001.5-1.4l.6-8.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const actionItems = [
  { id: 'default',    label: 'Set as Default',      icon: <DdEditIcon /> },
  { id: 'rename',     label: 'Rename',               icon: <DdEditIcon /> },
  { id: 'reorder',    label: 'Reorder Components',   icon: <DdEditIcon /> },
  { id: 'visibility', label: 'Visibility (Only Me)', icon: <DdEditIcon /> },
  { id: 'fullscreen', label: 'View in Full Screen',  icon: <DdEditIcon /> },
  { id: 'delete',     label: 'Delete', icon: <DdTrashIcon />, destructive: true },
]

const userRows = [
  { id: 'u1', name: 'Jackson Navi', subtitle: 'jackson.navi@example.com', avatarColor: '#6E8BE8' },
  { id: 'u2', name: 'Dia Swaroop',  subtitle: 'dia.swaroop@example.com',  avatarColor: '#E0A15C' },
  { id: 'u3', name: 'Ken Suhael',   subtitle: 'ken.suhael@example.com',   avatarColor: '#E27C9C' },
  { id: 'u4', name: 'Lara Ethan',   subtitle: 'lara.ethan@example.com',   avatarColor: '#5FB98A' },
]

const viewSections = [
  { title: 'Created by Me', rows: [
    { id: 'v1', label: 'My Team Deals' },
    { id: 'v2', label: 'Revenue this year' },
    { id: 'v3', label: 'Product Release' },
  ]},
  { title: 'Public Views', rows: [
    { id: 'v4', label: 'All Deals' },
    { id: 'v5', label: 'Closing Next Month' },
    { id: 'v6', label: 'My Deals' },
  ]},
]

const DdPipelineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5.6.75H3.3A2.5 2.5 0 00.8 3.25v10A2 2 0 002.8 15.25h.8a2 2 0 002-2V.75Zm0 0h4.8M5.6 12.25h2.3a2.5 2.5 0 002.5-2.5V.75m0 0h2.3a2.5 2.5 0 012.5 2.5v3a2.5 2.5 0 01-2.5 2.5h-2.3" stroke="currentColor" strokeWidth="1.4"/>
  </svg>
)

const switchModules = [
  { id: 'pipelines', label: 'Pipelines', icon: <DdPipelineIcon /> },
]

const switchWorkspaces = [
  { id: 'w1', name: 'Zylker Solutions', initials: 'ZS', avatarColor: '#6E8BE8', isNew: true },
  { id: 'w2', name: 'Zylker Solutions', initials: 'ZS', avatarColor: '#E0A15C', isNew: true },
]

function DropdownDemo({ title, description, children }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#212129', marginBottom: '8px' }}>{title}</h2>
      <p style={{ fontSize: '13px', color: '#717179', marginBottom: '20px' }}>{description}</p>
      {children}
    </div>
  )
}

function DropdownSection() {
  const [selected, setSelected]   = useState('default')
  const [userSel, setUserSel]     = useState('u1')
  const [viewSel, setViewSel]     = useState('v4')
  const [moduleSel, setModuleSel] = useState('pipelines')

  return (
    <div>
      <DropdownDemo title="Simple" description="Plain selectable list. Supports an optional icon, trailing icon, and a destructive (red) row style.">
        <Dropdown items={sampleItems} value={selected} onChange={setSelected} />
      </DropdownDemo>

      <DropdownDemo title="Action Menu" description="Icon + label action list (Set as Default, Rename, Delete...) — not a selectable list, just triggers an action per row.">
        <Dropdown variant="action" items={actionItems} onChange={(id) => console.log('action:', id)} />
      </DropdownDemo>

      <DropdownDemo title="Users / Contacts Picker" description="Header + search + avatar/name/email rows — e.g. 'Select Contacts'.">
        <Dropdown variant="users" header="Select Contacts" search rows={userRows} value={userSel} onChange={setUserSel} />
      </DropdownDemo>

      <DropdownDemo title="Views" description="Tabs (All Views / Favorites) + search + grouped sections + a 'Create View' link footer.">
        <Dropdown variant="views" sections={viewSections} value={viewSel} onChange={setViewSel} onCreate={() => console.log('create view')} />
      </DropdownDemo>

      <DropdownDemo title="Module Switcher" description="Colored icon + label module rows, plus a workspace-switch list (avatar, name, Switch link, New badge, download icon).">
        <Dropdown
          variant="moduleSwitch"
          items={switchModules}
          value={moduleSel}
          onChange={setModuleSel}
          workspaces={switchWorkspaces}
          onSwitch={(id) => console.log('switch:', id)}
        />
      </DropdownDemo>
    </div>
  )
}

// ── Footer icons (currentColor inherits hover tint; Checkbox stays brand-green) ──

const IconPreview = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
    <path d="M10.5 7.00389C10.5 8.38658 9.38267 9.50391 7.99998 9.50391C6.61729 9.50391 5.5 8.38658 5.5 7.00389C5.5 5.6212 6.61729 4.50391 7.99998 4.50391C9.38267 4.50391 10.5 5.6212 10.5 7.00389Z" fill="currentColor"/>
    <path d="M8.00001 13.25C10.6155 13.25 13.0531 11.679 14.7499 8.95998C15.4167 7.89503 15.4167 6.105 14.7499 5.04002C13.0531 2.32099 10.6155 0.75 8.00001 0.75C5.38453 0.75 2.94685 2.32099 1.25013 5.04002C0.58329 6.105 0.58329 7.89502 1.25013 8.95998C2.94686 11.679 5.38451 13.25 8.00001 13.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconAttach = () => (
  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
    <path d="M14.3652 11.1967H6.15449C3.14045 11.1967 0.75 8.80628 0.75 6.0001C0.75 3.19392 3.24438 0.803467 6.15449 0.803467H15.4045C17.4831 0.803467 19.25 2.46639 19.25 4.44111C19.25 6.41583 17.4831 8.07875 15.4045 8.07875H6.15449C4.9073 8.07875 3.97191 7.14336 3.97191 6.0001C3.97191 4.85684 4.9073 3.92144 6.15449 3.92144H14.3652" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7.22908 2.69828C7.57848 4.79459 9.15062 6.54149 11.2469 6.71614M12.129 1.75479C13.8743 3.34646 13.3507 4.5844 12.129 5.8224L5.67126 12.366C5.49677 12.5428 4.97319 12.8965 4.62411 12.8965L2.18062 13.2502H1.65704C1.13346 13.2502 0.609888 12.5428 0.784378 11.8354L1.13347 9.35951C1.13347 9.00578 1.30795 8.65212 1.65704 8.29839L8.11476 1.7548C9.3364 0.693671 10.5581 0.163123 12.129 1.75479Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconEmailSchedule = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
    <path d="M1.40358 2.04657L4.32358 4.88657C6.08358 6.59657 8.92358 6.59657 10.6836 4.88657L13.6036 2.04657M6.74999 12.5H4C2.20507 12.5 0.75 11.0449 0.75 9.25V4C0.75 2.20507 2.20507 0.75 4 0.75H11C12.7949 0.75 14.25 2.20507 14.25 4V5.99994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.8103 10.1897V11.0897C11.8103 11.421 12.079 11.6897 12.4103 11.6897H13.3103M15.25 11.25C15.25 12.9068 13.9068 14.25 12.25 14.25C10.5932 14.25 9.25 12.9068 9.25 11.25C9.25 9.59315 10.5932 8.25 12.25 8.25C13.9068 8.25 15.25 9.59315 15.25 11.25Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Brand-green checkbox — keeps its color, doesn't inherit hover tint
const IconCheckbox = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M0 3.5C0 1.567 1.567 0 3.5 0H12.5C14.433 0 16 1.567 16 3.5V12.5C16 14.433 14.433 16 12.5 16H3.5C1.567 16 0 14.433 0 12.5V3.5Z" fill="#17BB8D"/>
    <path d="M12 5L6.12 10.68L4 8.35999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function FooterSection() {
  const groupTitle = (text) => (
    <p style={{
      fontSize: '11px', fontWeight: '600', color: '#717179',
      letterSpacing: '0.08em', textTransform: 'uppercase',
      marginTop: '32px', marginBottom: '12px'
    }}>{text}</p>
  )

  const row = (label, el) => (
    <div style={{ marginBottom: '4px' }}>
      <p style={{ fontSize: '12px', color: '#A0A0A8', marginBottom: '4px' }}>{label}</p>
      {el}
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      {/* ── Frame 1: Standard ───────────────────────────────────────────── */}
      {groupTitle('Standard')}

      {row('Save only',
        <Footer actions={[{ label: 'Save', variant: 'primary' }]} />
      )}

      {row('Cancel + Save',
        <Footer actions={[
          { label: 'Cancel', variant: 'neutral' },
          { label: 'Save',   variant: 'primary'  },
        ]} />
      )}

      {row('Cancel + Create',
        <Footer actions={[
          { label: 'Cancel', variant: 'neutral' },
          { label: 'Create', variant: 'primary'  },
        ]} />
      )}

      {row('Icon + Cancel + Save',
        <Footer
          leftSlot={<FooterIconAction icon={<IconPreview />} label="Preview" />}
          actions={[
            { label: 'Cancel', variant: 'neutral' },
            { label: 'Save',   variant: 'primary'  },
          ]}
        />
      )}

      {row('Icon + Cancel + Danger action',
        <Footer
          leftSlot={<FooterIconAction icon={<IconCheckbox />} />}
          actions={[
            { label: 'Cancel',      variant: 'neutral'  },
            { label: 'Sign as Hire', variant: 'failure' },
          ]}
        />
      )}

      {row('Count text + Cancel + Save',
        <Footer
          leftSlot={<FooterTextInfo>27 Completed</FooterTextInfo>}
          actions={[
            { label: 'Cancel', variant: 'neutral' },
            { label: 'Save',   variant: 'primary'  },
          ]}
        />
      )}

      {row('Link + Cancel + Save',
        <Footer
          leftSlot={<FooterLink>Customize Fields</FooterLink>}
          actions={[
            { label: 'Cancel', variant: 'neutral' },
            { label: 'Save',   variant: 'primary'  },
          ]}
        />
      )}

      {row('Cancel + Add to Proposal + Save',
        <Footer
          actions={[
            { label: 'Cancel',          variant: 'neutral'         },
            { label: 'Add to Proposal', variant: 'primary-outline' },
            { label: 'Save',            variant: 'primary'         },
          ]}
        />
      )}

      {row('Icon + Cancel + Save as Draft + Send for Approval',
        <Footer
          leftSlot={<FooterIconAction icon={<IconPreview />} label="Preview" />}
          actions={[
            { label: 'Cancel',            variant: 'neutral' },
            { label: 'Save as Draft',     variant: 'neutral' },
            { label: 'Send for Approval', variant: 'primary' },
          ]}
        />
      )}

      {row('File info + Cancel + Approve',
        <Footer
          leftSlot={<FooterTextInfo>Attachment will fail if file size exceeds 45.0 MB as of 155.6 MB</FooterTextInfo>}
          actions={[
            { label: 'Cancel',  variant: 'neutral' },
            { label: 'Approve', variant: 'primary' },
          ]}
        />
      )}

      {row('Schedule icon + Cancel + Save',
        <Footer
          leftSlot={<FooterIconAction icon={<IconEmailSchedule />} label="Schedule" />}
          actions={[
            { label: 'Cancel', variant: 'neutral' },
            { label: 'Save',   variant: 'primary'  },
          ]}
        />
      )}

      {row('Counter icon + Cancel + Save',
        <Footer
          leftSlot={<FooterIconAction label="51 Backlogs in 23, (43.5k) 456" />}
          actions={[
            { label: 'Cancel', variant: 'neutral' },
            { label: 'Save',   variant: 'primary'  },
          ]}
        />
      )}

      {/* ── Frame 2: Approval / Actions ─────────────────────────────────── */}
      {groupTitle('Approval / Actions')}

      {row('Delete + Approve',
        <Footer actions={[
          { label: 'Delete',  variant: 'failure' },
          { label: 'Approve', variant: 'primary' },
        ]} />
      )}

      {row('Delete + Merge + Approve',
        <Footer actions={[
          { label: 'Delete',  variant: 'failure'  },
          { label: 'Merge',   variant: 'neutral'  },
          { label: 'Approve', variant: 'primary'  },
        ]} />
      )}

      {row('Amend + Approve + Status of Amendment + Chat',
        <Footer actions={[
          { label: 'Amend',               variant: 'primary-outline' },
          { label: 'Approve',             variant: 'primary'         },
          { label: 'Status of Amendment', variant: 'neutral'         },
          { label: 'Chat',                variant: 'neutral'         },
        ]} />
      )}

      {row('Info text + Approve',
        <Footer
          leftSlot={<FooterTextInfo>Medicine (Related to):</FooterTextInfo>}
          actions={[{ label: 'Approve', variant: 'primary' }]}
        />
      )}

      {row('Discard + Restore + Done',
        <Footer
          leftSlot={
            <>
              <FooterIconAction label="Discard" />
              <FooterIconAction label="Restore" />
            </>
          }
          actions={[{ label: 'Done', variant: 'primary' }]}
        />
      )}

      {row('Cancel + Deactivate',
        <Footer actions={[
          { label: 'Cancel',     variant: 'neutral'  },
          { label: 'Deactivate', variant: 'failure'  },
        ]} />
      )}

      {/* ── Frame 3: With Attachment Actions ────────────────────────────── */}
      {groupTitle('With Attachment Actions')}

      {row('Attach File + Save Draft + Schedule + Schedule',
        <Footer
          leftSlot={<FooterIconAction icon={<IconAttach />} label="Attach File" />}
          actions={[
            { label: 'Save Draft', variant: 'neutral'  },
            { label: 'Schedule',   variant: 'neutral'  },
            { label: 'Schedule',   variant: 'primary'  },
          ]}
        />
      )}

      {row('Add Jira Write + Attach File + Save Draft + Schedule + Schedule',
        <Footer
          leftSlot={
            <>
              <FooterIconAction icon={<IconEdit />}   label="Add Jira Write" />
              <FooterIconAction icon={<IconAttach />} label="Attach File" />
            </>
          }
          actions={[
            { label: 'Save Draft', variant: 'neutral'  },
            { label: 'Schedule',   variant: 'neutral'  },
            { label: 'Schedule',   variant: 'primary'  },
          ]}
        />
      )}

      {/* ── Frame 4: Special ────────────────────────────────────────────── */}
      {groupTitle('Special')}

      {row('Pro Plan badge + Cancel',
        <Footer
          leftSlot={<FooterBadge>✦ Pro Plan</FooterBadge>}
          actions={[{ label: 'Cancel', variant: 'neutral' }]}
        />
      )}

      {row('Add + Cancel',
        <Footer actions={[
          { label: 'Add',    variant: 'primary-outline' },
          { label: 'Cancel', variant: 'neutral'         },
        ]} />
      )}

    </div>
  )
}

function PanelHeaderSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#212129', marginBottom: '16px' }}>Without Description</h2>
        <PanelHeader title="Create Deal" />
      </div>
      <div>
        <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#212129', marginBottom: '16px' }}>With Close</h2>
        <PanelHeader title="Message Preview" showClose />
      </div>
      <div>
        <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#212129', marginBottom: '16px' }}>With Description</h2>
        <PanelHeader title="Payment Gateways" description="Connect any of the below listed payment gateway to collect the amount from your customers." />
      </div>
      <div>
        <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#212129', marginBottom: '16px' }}>With Description + Close</h2>
        <PanelHeader title="Payment Gateways" description="Connect any of the below listed payment gateway to collect the amount from your customers." showClose />
      </div>
    </div>
  )
}

function SelectionSection() {
  const [cbChecked,    setCbChecked]    = React.useState(false)
  const [radioChecked, setRadioChecked] = React.useState(false)
  const [toggleOn,     setToggleOn]     = React.useState(false)

  const border = '1px solid #F0F7FB'

  const lbl = (text, note) => (
    <div style={{ fontSize: '13px', color: '#717179', display: 'flex', alignItems: 'center', gap: '6px', padding: '14px 16px 14px 0', borderBottom: border }}>
      {text}
      {note && <span style={{ fontSize: '11px', color: '#A0A8B8', fontStyle: 'italic' }}>({note})</span>}
    </div>
  )

  // interactive=true → real hover+click work; false → pointer-events off (static display)
  const c = (el, interactive = false) => (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '14px 0', borderBottom: border,
      pointerEvents: interactive ? 'auto' : 'none',
    }}>
      {el ?? <span style={{ color: '#DEE9F0' }}>—</span>}
    </div>
  )

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '150px repeat(3, 1fr)', gap: '0' }}>

      {/* Column headers */}
      <div />
      {['Checkbox', 'Radio', 'Toggle'].map(h => (
        <div key={h} style={{ fontSize: '12px', fontWeight: '600', color: '#A0A8B8', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center', paddingBottom: '12px' }}>
          {h}
        </div>
      ))}
      <div style={{ gridColumn: '1 / -1', borderTop: border }} />

      {/* Default — interactive */}
      {lbl('Default', 'interactive')}
      {c(<Checkbox checked={cbChecked} onChange={() => setCbChecked(v => !v)} />, true)}
      {c(<Radio    checked={radioChecked} onChange={() => setRadioChecked(v => !v)} />, true)}
      {c(<Toggle   checked={toggleOn}    onChange={() => setToggleOn(v => !v)} />, true)}

      {/* Default (List) */}
      {lbl('Default (List)')}
      {c(<Checkbox variant="list" />)}
      {c(null)}
      {c(null)}

      {/* Hover */}
      {lbl('Hover')}
      {c(<Checkbox forceHover />)}
      {c(null)}
      {c(null)}

      {/* Selected */}
      {lbl('Selected')}
      {c(<Checkbox checked />)}
      {c(<Radio checked />)}
      {c(<Toggle checked />)}

      {/* Selected Hover */}
      {lbl('Selected Hover')}
      {c(<Checkbox checked forceHover />)}
      {c(null)}
      {c(null)}

      {/* Indeterminate */}
      {lbl('Indeterminate')}
      {c(<Checkbox indeterminate />)}
      {c(null)}
      {c(null)}

      {/* Disabled — pointer-events on so cursor: not-allowed shows */}
      {lbl('Disabled')}
      {c(<Checkbox disabled />, true)}
      {c(<Radio disabled />, true)}
      {c(<Toggle disabled />, true)}

      {/* Selected Disabled */}
      {lbl('Sel. Disabled')}
      {c(<Checkbox checked disabled />, true)}
      {c(<Radio checked disabled />, true)}
      {c(<Toggle checked disabled />, true)}


    </div>
  )
}

function SearchSection() {
  const [vals, setVals] = React.useState({})
  const set = (key, v) => setVals(prev => ({ ...prev, [key]: v }))

  // Matches style used by Header / Footer sections
  const sectionTitle = (text) => (
    <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#212129', marginBottom: '16px' }}>{text}</h2>
  )

  // Wraps one state: label 10px above component
  const stateBlock = (labelText, component) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <p style={{ fontSize: '12px', color: '#A0A0A8', margin: 0 }}>{labelText}</p>
      {component}
    </div>
  )

  // Wrap dark-theme variants in a dark panel
  const dark = (children) => (
    <div style={{ background: '#0D2233', borderRadius: '8px', padding: '12px 16px', display: 'inline-block' }}>
      {children}
    </div>
  )

  // Render one variant section with all 6 states
  const variantSection = ({ title, variant, showClose, isDark, stateKey }) => {
    const wrap = (el) => isDark ? dark(el) : el
    return (
      <div>
        {sectionTitle(title)}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

          {stateBlock('Default', wrap(
            <Search variant={variant} showClose={showClose}
              value={vals[stateKey] || ''} onChange={v => set(stateKey, v)}
              onClear={() => set(stateKey, '')} onClose={() => set(stateKey, '')} />
          ))}

          {stateBlock('Hover', wrap(
            <Search variant={variant} showClose={showClose} forceState="hover" />
          ))}

          {stateBlock('On Click', wrap(
            <Search variant={variant} showClose={showClose} forceState="focused" />
          ))}

          {stateBlock('Typing', wrap(
            <Search variant={variant} showClose={showClose} value="jdklr" forceState="focused" />
          ))}

          {stateBlock('After Typed', wrap(
            <Search variant={variant} showClose={showClose} value="jdklr" />
          ))}

          {stateBlock('Disabled', wrap(
            <Search variant={variant} showClose={showClose} disabled />
          ))}

        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

      {variantSection({ title: 'Rounded',              variant: 'rounded',  showClose: false, isDark: false, stateKey: 'r'  })}
      {variantSection({ title: 'Cornered',             variant: 'cornered', showClose: false, isDark: false, stateKey: 'c'  })}
      {variantSection({ title: 'Cornered + Close',     variant: 'cornered', showClose: true,  isDark: false, stateKey: 'cc' })}
      {variantSection({ title: 'Dard Cornered',        variant: 'dard',     showClose: false, isDark: true,  stateKey: 'd'  })}
      {variantSection({ title: 'Dard Cornered + Close',variant: 'dard',     showClose: true,  isDark: true,  stateKey: 'dc' })}

      {/* Search Global */}
      <div>
        {sectionTitle('Search Global')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {stateBlock('Default',
            dark(<SearchGlobal value={vals.sg || ''} onChange={v => set('sg', v)} onClear={() => set('sg', '')} />)
          )}
          {stateBlock('Typing / After Typed',
            dark(<SearchGlobal value="jdklr" />)
          )}
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
      {(() => {
        const fullBleed = active === 'Page Sources'
        return (
          <div style={{ flex: 1, padding: fullBleed ? 0 : '25px 20px', overflow: fullBleed ? 'hidden' : 'auto' }}>
            {!fullBleed && active !== 'Right Modal' && <h1 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '32px' }}>{active}</h1>}
            {active === 'Button'       && <ButtonSection      />}
            {active === 'Input Field'  && <FieldSection       />}
            {active === 'Tabs'         && <TabsSection        />}
            {active === 'Dropdown'     && <DropdownSection    />}
            {active === 'Header'       && <PanelHeaderSection />}
            {active === 'Footer'       && <FooterSection      />}
            {active === 'Selection'    && <SelectionSection   />}
            {active === 'Search'       && <SearchSection      />}
            {active === 'Right Modal'  && <RightModal />}
            {active === 'Side Menu'    && <SideMenu />}
            {active === 'Page Sources' && <PageSources />}
            {active === 'Quick Previews' && (
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {PREVIEWS.map((p, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#717179' }}>{p.caption}</span>
                    <QuickPreview data={p} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })()}

    </div>
  )
}

export default ComponentLibrary
