import { useState } from 'react'
import './Dropdown.css'

/* ═══════════════════════════════════════════════════════════════════════════
   Icons
   ═══════════════════════════════════════════════════════════════════════════ */

const DdIcon = {
  search: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M13.6 13.55c-.6.6-1.35.6-1.8 0L8.93 10.28a5.2 5.2 0 001.36-1.36l3.31 2.86c.6.59.45 1.33 0 1.77Z" fill="#98A0AE"/>
      <path d="M5.96.75A5.2 5.2 0 00.75 5.96a5.2 5.2 0 005.21 5.2 5.2 5.2 0 005.2-5.2A5.2 5.2 0 005.97.75Z" stroke="#98A0AE" strokeWidth="1.5"/>
    </svg>
  ),
  star: () => (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
      <path d="M7 0.5l1.9 3.85 4.25.62-3.07 3 .72 4.23L7 10.2l-3.8 2 .72-4.23-3.07-3 4.25-.62L7 .5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
  plus: () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v10M1 6h10" stroke="#0783DA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  warning: () => (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
      <path d="M7 1.2 13 12H1L7 1.2Z" stroke="#F5A623" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M7 5v3M7 9.6v.1" stroke="#F5A623" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  download: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5v7m0 0L4.5 6M7 8.5 9.5 6M2 10.5v1A1.5 1.5 0 003.5 13h7a1.5 1.5 0 001.5-1.5v-1" stroke="#606A81" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

const Avatar = ({ initials, color = '#9AA7BC', size = 32, src }) => (
  <span className="dd-avatar" style={{ width: size, height: size, background: color, fontSize: size >= 30 ? 12 : 10 }}>
    {src ? <img src={src} alt="" /> : initials}
  </span>
)

/* ═══════════════════════════════════════════════════════════════════════════
   simple — plain selectable list (default / backward-compatible)
   items: [{ id, label, icon?, trailingIcon?, destructive? }]
   ═══════════════════════════════════════════════════════════════════════════ */

function SimpleList({ items, value, onChange }) {
  return (
    <div className="dd-container">
      {items.map(item => (
        <div
          key={item.id}
          className={[
            'dd-item',
            value === item.id ? 'dd-item-selected' : '',
            item.destructive ? 'dd-item-destructive' : '',
          ].filter(Boolean).join(' ')}
          onClick={() => onChange && onChange(item.id)}
        >
          {item.icon && <span className="dd-item-icon">{item.icon}</span>}
          <span className="dd-item-label">{item.label}</span>
          {item.trailingIcon && <span className="dd-item-trailing">{item.trailingIcon}</span>}
        </div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   action — icon + label action menu (Set as Default / Rename / Delete ...)
   items: [{ id, label, icon, destructive? }]
   ═══════════════════════════════════════════════════════════════════════════ */

function ActionMenu({ items, onSelect }) {
  return (
    <div className="dd-action-container">
      {items.map(item => (
        <div
          key={item.id}
          className={`dd-action-item${item.destructive ? ' dd-action-item--destructive' : ''}`}
          onClick={() => onSelect && onSelect(item.id)}
        >
          <span className="dd-action-icon">{item.icon}</span>
          <span className="dd-action-label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   users — header + search + avatar/name/subtitle rows (Select Contacts style)
   rows: [{ id, name, subtitle, avatarColor, avatarSrc }]
   ═══════════════════════════════════════════════════════════════════════════ */

function UsersList({ header, search, placeholder, rows, value, onChange }) {
  const [q, setQ] = useState('')
  const filtered = q ? rows.filter(r => r.name.toLowerCase().includes(q.toLowerCase())) : rows

  return (
    <div className="dd-users-container">
      {header && <div className="dd-header">{header}</div>}
      {search && (
        <div className="dd-search-wrap">
          <div className="dd-search">
            {DdIcon.search()}
            <input placeholder={placeholder || 'Search'} value={q} onChange={e => setQ(e.target.value)} />
          </div>
        </div>
      )}
      <div className="dd-users-list">
        {filtered.map(r => (
          <div
            key={r.id}
            className={`dd-user-row${value === r.id ? ' dd-user-row--selected' : ''}`}
            onClick={() => onChange && onChange(r.id)}
          >
            <Avatar initials={r.name.split(' ').map(w => w[0]).join('').slice(0, 2)} color={r.avatarColor} src={r.avatarSrc} />
            <div className="dd-user-info">
              <span className="dd-user-name">{r.name}</span>
              <span className="dd-user-sub">{r.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   views — tabs + search + grouped sections + selectable rows + create link
   sections: [{ title, rows: [{ id, label }] }]
   ═══════════════════════════════════════════════════════════════════════════ */

function ViewsList({ tabs = ['All Views', 'Favorites'], sections, value, onChange, onCreate }) {
  const [tab, setTab] = useState(0)

  return (
    <div className="dd-views-container">
      <div className="dd-views-tabs">
        {tabs.map((t, i) => (
          <button key={t} className={`dd-views-tab${tab === i ? ' dd-views-tab--active' : ''}`} onClick={() => setTab(i)}>
            {t}
          </button>
        ))}
      </div>
      <div className="dd-views-body">
        <div className="dd-search-wrap">
          <div className="dd-search">
            {DdIcon.search()}
            <input placeholder="Search" />
          </div>
        </div>
        {sections.map(sec => (
          <div className="dd-views-section" key={sec.title}>
            <div className="dd-header">{sec.title}</div>
            {sec.rows.map(r => (
              <div
                key={r.id}
                className={`dd-views-row${value === r.id ? ' dd-views-row--selected' : ''}`}
                onClick={() => onChange && onChange(r.id)}
              >
                <span className="dd-views-star">{DdIcon.star()}</span>
                <span className="dd-views-label">{r.label}</span>
              </div>
            ))}
          </div>
        ))}
        <button className="dd-create-link" onClick={onCreate}>
          {DdIcon.plus()} Create View
        </button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   moduleSwitch — icon+label module rows + workspace switch rows
   items: [{ id, label, icon }]
   workspaces: [{ id, name, initials, avatarColor, isNew? }]
   ═══════════════════════════════════════════════════════════════════════════ */

function ModuleSwitch({ items, value, onChange, workspaces, onSwitch }) {
  return (
    <div className="dd-switch-container">
      {items && (
        <div className="dd-switch-modules">
          {items.map(item => (
            <div
              key={item.id}
              className={`dd-switch-item${value === item.id ? ' dd-switch-item--selected' : ''}`}
              onClick={() => onChange && onChange(item.id)}
            >
              <span className="dd-switch-icon">{item.icon}</span>
              <span className="dd-switch-label">{item.label}</span>
            </div>
          ))}
        </div>
      )}
      {workspaces && (
        <div className="dd-switch-workspaces">
          {workspaces.map(w => (
            <div className="dd-workspace-row" key={w.id}>
              <Avatar initials={w.initials} color={w.avatarColor} size={24} />
              <span className="dd-workspace-name">{w.name}</span>
              <button className="dd-workspace-switch" onClick={() => onSwitch && onSwitch(w.id)}>Switch</button>
              {w.isNew && <span className="dd-workspace-badge">New</span>}
              <span className="dd-workspace-download">{DdIcon.download()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   Dropdown — dispatches to the variant renderer
   ═══════════════════════════════════════════════════════════════════════════ */

/**
 * Dropdown — floating list panel (no trigger button; pair with SelectField
 * or your own open/close state).
 *
 * @param {'simple'|'action'|'users'|'views'|'moduleSwitch'} variant
 *
 * variant="simple" (default, backward-compatible):
 *   items: [{ id, label, icon?, trailingIcon?, destructive? }], value, onChange
 *
 * variant="action":
 *   items: [{ id, label, icon, destructive? }], onSelect
 *
 * variant="users":
 *   header?, search?, placeholder?, rows: [{ id, name, subtitle, avatarColor?, avatarSrc? }], value, onChange
 *
 * variant="views":
 *   tabs?, sections: [{ title, rows: [{ id, label }] }], value, onChange, onCreate
 *
 * variant="moduleSwitch":
 *   items?: [{ id, label, icon }], workspaces?: [{ id, name, initials, avatarColor?, isNew? }], value, onChange, onSwitch
 */
function Dropdown({ variant = 'simple', items = [], value, onChange, ...rest }) {
  switch (variant) {
    case 'action':
      return <ActionMenu items={items} onSelect={onChange} />
    case 'users':
      return <UsersList rows={rest.rows || items} value={value} onChange={onChange} header={rest.header} search={rest.search} placeholder={rest.placeholder} />
    case 'views':
      return <ViewsList tabs={rest.tabs} sections={rest.sections || []} value={value} onChange={onChange} onCreate={rest.onCreate} />
    case 'moduleSwitch':
      return <ModuleSwitch items={items} value={value} onChange={onChange} workspaces={rest.workspaces} onSwitch={rest.onSwitch} />
    default:
      return <SimpleList items={items} value={value} onChange={onChange} />
  }
}

export default Dropdown
