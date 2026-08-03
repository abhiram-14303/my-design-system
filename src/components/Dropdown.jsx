import { useState } from 'react'
import Search from './Search'
import PrimaryTabs from './Tabs'
import './Dropdown.css'

/* ═══════════════════════════════════════════════════════════════════════════
   Icons
   ═══════════════════════════════════════════════════════════════════════════ */

const DdIcon = {
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
   ListPanel — shared renderer for the header/search + row-list variants:
   withIconsAndTitle, withIconsAndSearch, withSearch
   ═══════════════════════════════════════════════════════════════════════════ */

function ListPanel({ header, useSearch, searchPlaceholder, items, value, onChange }) {
  const [q, setQ] = useState('')
  const filtered = q ? items.filter(i => i.label.toLowerCase().includes(q.toLowerCase())) : items

  return (
    <div className="dd-panel-container">
      {header && <div className="dd-header">{header}</div>}
      {useSearch && (
        <div className="dd-search-wrap">
          <Search variant="cornered" placeholder={searchPlaceholder || 'Search'} value={q} onChange={setQ} />
        </div>
      )}
      <div className="dd-panel-list">
        {filtered.map(item => (
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
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   users — header + search + avatar/name/subtitle rows (Select Contacts style)
   rows: [{ id, name, subtitle, avatarColor?, avatarSrc? }]
   ═══════════════════════════════════════════════════════════════════════════ */

function UsersList({ header, search, placeholder, rows, value, onChange }) {
  const [q, setQ] = useState('')
  const filtered = q ? rows.filter(r => r.name.toLowerCase().includes(q.toLowerCase())) : rows

  return (
    <div className="dd-users-container">
      {header && <div className="dd-header">{header}</div>}
      {search && (
        <div className="dd-search-wrap">
          <Search variant="cornered" placeholder={placeholder || 'Search'} value={q} onChange={setQ} />
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
   views — PrimaryTabs + search + grouped sections + selectable rows + create link
   sections: [{ title, rows: [{ id, label }] }]
   ═══════════════════════════════════════════════════════════════════════════ */

function ViewsList({ tabs = ['All Views', 'Favorites'], sections, value, onChange, onCreate }) {
  const [tab, setTab] = useState(0)
  const tabItems = tabs.map((t, i) => ({ id: String(i), label: t }))

  return (
    <div className="dd-views-container">
      <PrimaryTabs
        compact
        tabs={tabItems}
        value={String(tab)}
        onChange={(id) => setTab(Number(id))}
      />
      <div className="dd-views-body">
        <div className="dd-search-wrap">
          <Search variant="cornered" placeholder="Search" />
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
          {DdIcon.plus()}
          <span className="dd-create-label">Create View</span>
        </button>
      </div>
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
 * @param {'simple'|'withIcons'|'withIconsAndTitle'|'withIconsAndSearch'|'withSearch'|'users'|'views'} variant
 *
 * variant="simple" (default, backward-compatible):
 *   items: [{ id, label, icon?, trailingIcon?, destructive? }], value, onChange
 *
 * variant="withIcons":
 *   same as "simple" — a plain list where every item carries an `icon`.
 *
 * variant="withIconsAndTitle":
 *   header: string, items: [{ id, label, icon, destructive? }], value, onChange
 *
 * variant="withIconsAndSearch":
 *   items: [{ id, label, icon }], value, onChange, searchPlaceholder?
 *
 * variant="withSearch" (no icons):
 *   items: [{ id, label }], value, onChange, searchPlaceholder?
 *
 * variant="users":
 *   header?, search?, placeholder?, rows: [{ id, name, subtitle, avatarColor?, avatarSrc? }], value, onChange
 *
 * variant="views":
 *   tabs?, sections: [{ title, rows: [{ id, label }] }], value, onChange, onCreate
 */
function Dropdown({ variant = 'simple', items = [], value, onChange, ...rest }) {
  switch (variant) {
    case 'withIcons':
      return <SimpleList items={items} value={value} onChange={onChange} />
    case 'withIconsAndTitle':
      return <ListPanel header={rest.header} items={items} value={value} onChange={onChange} />
    case 'withIconsAndSearch':
      return <ListPanel useSearch searchPlaceholder={rest.searchPlaceholder} items={items} value={value} onChange={onChange} />
    case 'withSearch':
      return <ListPanel useSearch searchPlaceholder={rest.searchPlaceholder} items={items} value={value} onChange={onChange} />
    case 'users':
      return <UsersList rows={rest.rows || items} value={value} onChange={onChange} header={rest.header} search={rest.search} placeholder={rest.placeholder} />
    case 'views':
      return <ViewsList tabs={rest.tabs} sections={rest.sections || []} value={value} onChange={onChange} onCreate={rest.onCreate} />
    default:
      return <SimpleList items={items} value={value} onChange={onChange} />
  }
}

export default Dropdown
