import { useState } from 'react'
import './QuickPreview.css'

/* ═══════════════════════════════════════════════════════════════════════════
   Icons
   ═══════════════════════════════════════════════════════════════════════════ */

const Ic = {
  mail: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  mailWhite: () => (
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
      <rect x="0.75" y="0.75" width="13.5" height="11.5" rx="2.25" stroke="white" strokeWidth="1.3"/>
      <path d="M1.5 2l6 4 6-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  mobile: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="4.25" y="1" width="7.5" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M7 12.5h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  call: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5.5 2.5l1.2 2.4-1.2 1.2a7 7 0 003 3l1.2-1.2 2.4 1.2v2.2c0 .7-.6 1.3-1.3 1.2C6.9 14.2 1.8 9.1 1.3 3.2 1.2 2.5 1.8 2 2.5 2h2.2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  location: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 14.5c1.5-2.2 5-4.3 5-8A5 5 0 003 6.5c0 3.7 3.5 5.8 5 8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="8" cy="6.5" r="1.75" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  ),
  globe: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.75" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1.5 8h13M8 1.25c1.8 1.8 2.8 4.2 2.8 6.75S9.8 12.95 8 14.75C6.2 12.95 5.2 10.55 5.2 8S6.2 3.05 8 1.25Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  contact: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.75" y="1.75" width="12.5" height="12.5" rx="3" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="8" cy="6.5" r="1.9" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M4.6 12.4a3.6 3.6 0 016.8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  company: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6.25 14.5h6.5A1.75 1.75 0 0014.5 12.75V3.5A1.75 1.75 0 0012.75 1.75H8A1.75 1.75 0 006.25 3.5V14.5Zm0 0H3.25A1.75 1.75 0 011.5 12.75v-2.1c0-.6.3-1.15.8-1.5L6.25 6M9.75 6.5h1.75M9.75 4h1.75" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pipeline: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5.6.75H3.3A2.5 2.5 0 00.8 3.25v10A2 2 0 002.8 15.25h.8a2 2 0 002-2V.75Zm0 0h4.8M5.6 12.25h2.3a2.5 2.5 0 002.5-2.5V.75m0 0h2.3a2.5 2.5 0 012.5 2.5v3a2.5 2.5 0 01-2.5 2.5h-2.3" stroke="#17BB8D" strokeWidth="1.4"/>
    </svg>
  ),
  calendar: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.75" width="13" height="11.75" rx="2" stroke="#4B8DF0" strokeWidth="1.3"/>
      <path d="M1.5 6h13M5 1.5v2.5M11 1.5v2.5" stroke="#4B8DF0" strokeWidth="1.3" strokeLinecap="round"/>
      <rect x="4" y="8" width="3" height="3" rx="0.5" fill="#4B8DF0"/>
    </svg>
  ),
  crown: () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 3.2l1.7 1.4L6 1.5l3.3 3.1L11 3.2l-.9 6.3H1.9L1 3.2Z" fill="#F5B84A"/>
    </svg>
  ),
  more: () => (
    <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
      <g fill="#606A81"><circle cx="2" cy="2" r="1.6"/><circle cx="8" cy="2" r="1.6"/><circle cx="14" cy="2" r="1.6"/></g>
    </svg>
  ),
  newTab: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M7 1.5h4.5V6M11 1.9L5.5 7.4M9.5 7.7v2.8A1.5 1.5 0 018 12H2.5A1.5 1.5 0 011 10.5V5A1.5 1.5 0 012.5 3.5h2.8" stroke="#606A81" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  close: () => (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
      <path d="M1 1l7 7M8 1l-7 7" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  back: () => (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
      <path d="M6.5 1L1 7l5.5 6M1 7h14" stroke="#212129" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chevRight: () => (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  plus: () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v10M1 6h10" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  checkGreen: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 8.5l3.5 3.5L13.5 4.5" stroke="#17BB8D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  tickCircleGreen: () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.75" stroke="#17BB8D" strokeWidth="1.4"/>
      <path d="M5.25 8l1.9 1.9L10.75 6" stroke="#17BB8D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  tickWhite: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.75" stroke="white" strokeWidth="1.4"/>
      <path d="M5.25 8l1.9 1.9L10.75 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  caretDownWhite: () => (
    <svg width="8" height="4" viewBox="0 0 8 4" fill="none"><path d="M8 0L4 4 0 0h8Z" fill="white"/></svg>
  ),
  caretDown: () => (
    <svg width="8" height="4" viewBox="0 0 8 4" fill="none"><path d="M8 0L4 4 0 0h8Z" fill="#606A81"/></svg>
  ),
  person: () => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="10" r="4" fill="#9AA7BC"/>
      <path d="M5 22a8 8 0 0116 0z" fill="#9AA7BC"/>
    </svg>
  ),
}

/* ═══════════════════════════════════════════════════════════════════════════
   Building blocks
   ═══════════════════════════════════════════════════════════════════════════ */

const Avatar = ({ initials, color, size = 50, src, node }) => (
  <span className="qp-avatar" style={{ width: size, height: size, background: color, fontSize: size >= 40 ? 16 : 10 }}>
    {node || (src ? <img src={src} alt="" /> : initials)}
  </span>
)

const BrandLogo = ({ size = 50 }) => (
  <span className="qp-logo" style={{ width: size, height: size }}>
    <span className="qp-logo-z">Z</span>
  </span>
)

const CircleBtn = ({ children }) => <button className="qp-circle-btn">{children}</button>

const SectionLabel = ({ children }) => <div className="qp-section-label">{children}</div>

const InlineIconField = ({ icon, value }) => (
  <div className="qp-inline-field">
    <span className="qp-inline-ico">{icon}</span>
    <span className="qp-inline-val">{value}</span>
  </div>
)

const LabelValueRow = ({ label, value, valueColor, valueIcon, labelWidth, divided }) => (
  <div className={`qp-lv-row${divided ? ' qp-lv-row--divided' : ''}`}>
    <span className="qp-lv-label" style={{ flexBasis: labelWidth }}>{label}</span>
    <span className="qp-lv-value" style={valueColor ? { color: valueColor } : undefined}>
      {valueIcon && <span className="qp-lv-ico">{valueIcon}</span>}
      {value}
    </span>
  </div>
)

const TagPill = ({ children, color }) => <span className={`qp-tag qp-tag--${color}`}>{children}</span>

const ContactRow = ({ name, email, color }) => (
  <div className="qp-contact-row">
    <Avatar initials={name.split(' ').map(w => w[0]).join('')} color={color} size={32} />
    <div className="qp-contact-info">
      <span className="qp-contact-name">{name}</span>
      <span className="qp-contact-email">{email}</span>
    </div>
  </div>
)

function Collapsible({ title, count, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="qp-collapsible">
      <button className="qp-collapse-head" onClick={() => setOpen(o => !o)}>
        <span className={`qp-collapse-chev${open ? ' qp-collapse-chev--open' : ''}`}>{Ic.chevRight()}</span>
        <span className="qp-collapse-title">{title}</span>
        {count != null && <span className="qp-count">{count}</span>}
      </button>
      {open && <div className="qp-collapse-body">{children}</div>}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   Header
   ═══════════════════════════════════════════════════════════════════════════ */

const HeaderActions = () => (
  <div className="qp-head-actions">
    <CircleBtn>{Ic.more()}</CircleBtn>
    <CircleBtn>{Ic.newTab()}</CircleBtn>
    <CircleBtn>{Ic.close()}</CircleBtn>
  </div>
)

const OwnerLine = ({ owner }) => (
  <div className="qp-owner">
    <span className="qp-owner-ico">{Ic.crown()}</span>
    <span className="qp-owner-name">{owner}</span>
  </div>
)

const ActionButton = ({ action }) => {
  if (!action) return null
  if (action.kind === 'split') {
    return (
      <div className="qp-split-btn">
        <button className="qp-split-main">{action.label}</button>
        <button className="qp-split-caret">{Ic.caretDownWhite()}</button>
      </div>
    )
  }
  return (
    <button className="qp-btn-primary">
      {action.icon === 'mail' && Ic.mailWhite()}
      {action.label}
    </button>
  )
}

function Header({ h }) {
  const avatarNode =
    h.avatar === 'logo'   ? <BrandLogo size={50} /> :
    h.avatar === 'person' ? <Avatar size={50} color="#DCE3EC" node={Ic.person()} /> :
    h.avatar === 'photo'  ? <Avatar size={50} initials={h.initials} color={h.avatarColor} /> :
    null

  return (
    <>
      {h.backBar && (
        <div className="qp-backbar">
          <span className="qp-backbar-ico">{Ic.back()}</span>
          Back to Pipeline Records
        </div>
      )}

      <div className="qp-head">
        <HeaderActions />

        {avatarNode ? (
          <div className="qp-head-top">
            {avatarNode}
            <div className="qp-head-meta">
              <div className="qp-title-row">
                <span className="qp-title">{h.title}</span>
                {h.titleIcon && <span className="qp-title-ico">{h.titleIcon}</span>}
              </div>
              {(h.role || h.company) && (
                <div className="qp-subrow">
                  {h.role && <span className="qp-role">{h.role}</span>}
                  {h.role && h.company && <span className="qp-dot" />}
                  {h.company && <span className="qp-company">{h.company}</span>}
                </div>
              )}
              <OwnerLine owner={h.owner} />
            </div>
          </div>
        ) : (
          <div className="qp-head-meta">
            <div className="qp-title-row">
              <span className="qp-title">{h.title}</span>
              {h.amount && <span className="qp-dot" />}
              {h.amount && <span className="qp-amount">{h.amount}</span>}
              {h.titleIcon && <span className="qp-title-ico">{h.titleIcon}</span>}
            </div>
            <OwnerLine owner={h.owner} />
            {h.detailRows && (
              <div className="qp-deal-details">
                {h.detailRows.map(d => (
                  <div className="qp-deal-detail" key={d.label}>
                    <span className="qp-dd-label">{d.label}</span>
                    <span className="qp-dd-value">: {d.value}{d.caret && <span className="qp-dd-caret">{Ic.caretDown()}</span>}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <ActionButton action={h.action} />

        {h.stage && (
          <button className="qp-stage-btn">
            {Ic.tickWhite()}<span>{h.stage}</span>{Ic.caretDownWhite()}
          </button>
        )}
      </div>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   Section renderer
   ═══════════════════════════════════════════════════════════════════════════ */

function Section({ s }) {
  switch (s.type) {
    case 'iconFields':
      return (
        <div className="qp-section">
          <SectionLabel>{s.label}</SectionLabel>
          {s.fields.map((f, i) => <InlineIconField key={i} icon={f.icon} value={f.value} />)}
        </div>
      )
    case 'labelValues':
      return (
        <div className="qp-section">
          <SectionLabel>{s.label}</SectionLabel>
          {s.rows.map((r, i) => (
            <LabelValueRow key={i} label={r.label} value={r.value} valueColor={r.color} valueIcon={r.icon} labelWidth={s.labelWidth || '150px'} />
          ))}
        </div>
      )
    case 'secondaryContacts':
      return (
        <div className="qp-section">
          <Collapsible title={s.label} count={s.rows.length}>
            {s.rows.map(c => <ContactRow key={c.name} {...c} />)}
          </Collapsible>
        </div>
      )
    case 'tag':
      return (
        <div className="qp-section">
          <SectionLabel>Tag</SectionLabel>
          {s.mode === 'link' ? (
            <button className="qp-tags-link">{Ic.plus()} Tags</button>
          ) : (
            <div className="qp-tags-row">
              {s.tags.map(t => <TagPill key={t.t} color={t.c}>{t.t}</TagPill>)}
              <button className="qp-tag-add">{Ic.plus()}</button>
            </div>
          )}
        </div>
      )
    case 'description':
      return (
        <div className="qp-section">
          <SectionLabel>Description</SectionLabel>
          <div className={`qp-desc${s.long ? ' qp-desc--long' : ''}`}>{s.text}</div>
        </div>
      )
    case 'otherInfo':
      return (
        <div className="qp-section">
          <Collapsible title="Other Info" defaultOpen={s.open ?? true}>
            {s.rows.map(l => <LabelValueRow key={l} label={l} value="--" labelWidth="45%" divided />)}
          </Collapsible>
        </div>
      )
    default:
      return null
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   QuickPreview
   ═══════════════════════════════════════════════════════════════════════════ */

function QuickPreview({ data }) {
  const [tab, setTab] = useState('info')
  const tabs = data.header.tabs || ['Information', 'Notes']

  return (
    <div className="qp">
      <Header h={data.header} />

      <div className="qp-tabs">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`qp-tab${(i === 0 ? tab === 'info' : tab === 'notes') ? ' qp-tab--active' : ''}`}
            onClick={() => setTab(i === 0 ? 'info' : 'notes')}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="qp-body">
        {data.sections.map((s, i) => <Section key={i} s={s} />)}
      </div>

      <div className="qp-footer">
        <Avatar initials="LE" color="#5FB98A" size={24} />
        <span className="qp-foot-label">Last Modified on</span>
        <span className="qp-foot-date">{data.modified}</span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   10 preset variants
   ═══════════════════════════════════════════════════════════════════════════ */

const OTHER_10 = ['Email Opt Out', 'Secondary Email', 'Lead Source', 'Department', 'Date of Birth', 'Assistant', 'Fax', 'X Profile', 'Other Phone', 'Account ID']
const OTHER_11 = [...OTHER_10, 'Account Type']
const OTHER_4  = ['Email Opt Out', 'Other Phone', 'Account ID', 'Account Type']
const MOD = '2025-06-23 04:50AM'.replace('2025-06-23', 'Jun 23, 2025')

const contactSections = [
  { type: 'iconFields', label: 'Basic Info', fields: [
    { icon: <Ic.mail />, value: 'jackson.nm' }, { icon: <Ic.mobile />, value: '+91 9988776655' },
    { icon: <Ic.call />, value: '--' }, { icon: <Ic.location />, value: '--' },
  ]},
  { type: 'tag', mode: 'pills', tags: [{ t: 'Hot Leads', c: 'red' }, { t: 'Important', c: 'orange' }] },
  { type: 'description', text: '--' },
  { type: 'otherInfo', rows: OTHER_10 },
]

const contactHeader = (backBar) => ({
  avatar: 'photo', initials: 'JN', avatarColor: '#6E8BE8', title: 'Jackson Navi',
  role: 'Manager Director', company: 'Zylker Solutions', owner: 'Lara Ethan',
  action: { label: 'Send Mail', kind: 'green', icon: 'mail' }, backBar, tabs: ['Information', 'Notes'],
})

const companySections = [
  { type: 'iconFields', label: 'Basic Info', fields: [
    { icon: <Ic.globe />, value: 'www.zylkersolutions.com' }, { icon: <Ic.call />, value: '--' }, { icon: <Ic.location />, value: '--' },
  ]},
  { type: 'tag', mode: 'pills', tags: [{ t: 'Hot Leads', c: 'red' }, { t: 'Important', c: 'orange' }] },
  { type: 'description', long: true, text: 'Zylker Solutions is an Indian multinational technology company that makes computer software and web-based business tools. It is best known for the online office suite offering Zylker Office Suite.' },
  { type: 'otherInfo', rows: OTHER_11 },
]

const companyHeader = (backBar) => ({
  avatar: 'logo', title: 'Zylker Solutions Private Limited', owner: 'Lara Ethan', backBar, tabs: ['Information', 'Notes'],
})

const dealPreview = {
  caption: 'Deal',
  header: {
    avatar: null, title: 'Annual Subscription Plans', amount: '$ 236.00', owner: 'Lara Ethan',
    detailRows: [
      { label: 'Closing Date', value: 'Jun 23, 2025', caret: true },
      { label: 'Team Pipeline', value: 'Sales Pipeline' },
      { label: 'Sub-Pipeline', value: 'Standard' },
    ],
    stage: 'Qualification', tabs: ['Information', 'Notes'],
  },
  sections: [
    { type: 'iconFields', label: 'Related To', fields: [
      { icon: <Ic.contact />, value: 'jackson.nm' }, { icon: <Ic.company />, value: 'jackson.nm' },
    ]},
    { type: 'secondaryContacts', label: 'Secondary Contacts', rows: [
      { name: 'Jackson Navi', email: 'jackson.navi@tomchip.com', color: '#6E8BE8' },
      { name: 'Dia Swaroop', email: 'dia.swaroop@tomchip.com', color: '#E0A15C' },
      { name: 'Lara Ethan', email: 'lara.ethan@tomchip.com', color: '#5FB98A' },
      { name: 'Ken Suhael', email: 'ken.suhael@tomchip.com', color: '#E27C9C' },
    ]},
    { type: 'tag', mode: 'link' },
    { type: 'description', text: '--' },
    { type: 'otherInfo', rows: ['Email Opt Out', 'Secondary Email'] },
  ],
  modified: MOD,
}

const productPreview = {
  caption: 'Product',
  header: { avatar: 'person', title: 'CRM - SAAS Product', owner: 'Lara Ethan', tabs: ['Information'] },
  sections: [
    { type: 'labelValues', label: 'Basic Info', labelWidth: '150px', rows: [
      { label: 'Product Code', value: 'www.zylkersolutions.com' },
      { label: 'Product Category', value: '--' },
      { label: 'Product Active', value: '', icon: <Ic.checkGreen /> },
    ]},
    { type: 'tag', mode: 'pills', tags: [{ t: 'Hot Leads', c: 'red' }, { t: 'Important', c: 'orange' }] },
    { type: 'description', text: '--' },
    { type: 'otherInfo', rows: OTHER_11, open: true },
  ],
  modified: MOD,
}

const taskPreview = {
  caption: 'Task',
  header: {
    avatar: null, title: 'Task to User', owner: 'Lara Ethan',
    action: { label: 'Mark as Completed', kind: 'green' }, tabs: ['Information', 'Notes'],
  },
  sections: [
    { type: 'labelValues', label: 'Task Details', labelWidth: '150px', rows: [
      { label: 'Due Date', value: 'Jun 23, 2025' },
      { label: 'Priority', value: 'Normal' },
      { label: 'Status', value: 'In Progress', icon: <Ic.tickCircleGreen /> },
      { label: 'Reminder', value: '--' },
      { label: 'Description', value: '--' },
      { label: 'Related To', value: 'Annual Subscription Plan for 50 Users', icon: <Ic.pipeline /> },
      { label: 'Last Modified', value: 'Jawahar on May 26, 06:30 AM' },
    ]},
    { type: 'tag', mode: 'pills', tags: [{ t: 'Hot Leads', c: 'red' }, { t: 'Important', c: 'orange' }] },
    { type: 'otherInfo', rows: OTHER_4 },
  ],
  modified: MOD,
}

const eventPreview = {
  caption: 'Event',
  header: { avatar: null, title: 'Online Yoga Event', titleIcon: <Ic.calendar />, owner: 'Lara Ethan', tabs: ['Information', 'Notes'] },
  sections: [
    { type: 'labelValues', label: 'Event Details', labelWidth: '150px', rows: [
      { label: 'Date & Time', value: 'Jun 23, 2025 10:00 AM to 12:00AM' },
      { label: 'Reminder', value: '--' },
      { label: 'Location', value: '--' },
      { label: 'Description', value: '--' },
      { label: 'Related To', value: 'Annual Subscription Plan for 50 Users', icon: <Ic.pipeline /> },
      { label: 'Last Modified', value: 'Jawahar on May 26, 06:30 AM' },
    ]},
    { type: 'tag', mode: 'pills', tags: [{ t: 'Hot Leads', c: 'red' }, { t: 'Important', c: 'orange' }] },
    { type: 'otherInfo', rows: OTHER_4 },
  ],
  modified: MOD,
}

const callPreview = {
  caption: 'Call',
  header: {
    avatar: null, title: 'Online Yoga Event', owner: 'Lara Ethan',
    action: { label: 'Mark as Completed', kind: 'split' }, tabs: ['Information', 'Notes'],
  },
  sections: [
    { type: 'labelValues', label: 'Call Details', labelWidth: '165px', rows: [
      { label: 'Call Start Time', value: 'Yesterday 10:00 AM', color: '#EF5A5A' },
      { label: 'Call Type', value: 'Outbound' },
      { label: 'Reminder', value: 'No reminder' },
      { label: 'Outgoing Call Status', value: 'Overdue' },
      { label: 'Related To', value: 'Annual Subscription Plan for 50 Users', icon: <Ic.pipeline /> },
      { label: 'Last Modified', value: 'Jawahar on May 26, 06:30 AM' },
    ]},
    { type: 'labelValues', label: 'Purpose of Outgoing Call', labelWidth: '150px', rows: [
      { label: 'Call Purpose', value: '--' },
      { label: 'Call Agenda', value: '--' },
    ]},
    { type: 'tag', mode: 'pills', tags: [{ t: 'Hot Leads', c: 'red' }, { t: 'Important', c: 'orange' }] },
  ],
  modified: MOD,
}

const PREVIEWS = [
  { caption: 'Contact', header: contactHeader(false), sections: contactSections, modified: MOD },
  { caption: 'Contact — Back bar', header: contactHeader(true), sections: contactSections, modified: MOD },
  { caption: 'Company', header: companyHeader(false), sections: companySections, modified: MOD },
  { caption: 'Company — Back bar', header: companyHeader(true), sections: companySections, modified: MOD },
  dealPreview,
  productPreview,
  taskPreview,
  eventPreview,
  callPreview,
  { caption: 'Contact (reference)', header: contactHeader(false), sections: contactSections, modified: MOD },
]

const CONTACT = PREVIEWS[0]
const DEAL = dealPreview

export { CONTACT, DEAL, PREVIEWS }
export default QuickPreview
