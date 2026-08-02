import { useState } from 'react'
import SideMenu from './SideMenu'
import Checkbox from './Checkbox'
import './PageSources.css'

/* ═══════════════════════════════════════════════════════════════════════════
   Icons
   ═══════════════════════════════════════════════════════════════════════════ */

const I = {
  search: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M13.6 13.55c-.6.6-1.35.6-1.8 0L8.93 10.28a5.2 5.2 0 001.36-1.36l3.31 2.86c.6.59.45 1.33 0 1.77Z" fill="#98A0AE"/>
      <path d="M5.96.75A5.2 5.2 0 00.75 5.96a5.2 5.2 0 005.21 5.2 5.2 5.2 0 005.2-5.2A5.2 5.2 0 005.97.75Z" stroke="#98A0AE" strokeWidth="1.5"/>
    </svg>
  ),
  plusSquare: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="8" fill="#17BB8D"/>
      <path d="M14 9.5v9M9.5 14h9" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  checkSquare: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1.75" y="1.75" width="14.5" height="14.5" rx="4" stroke="#606A81" strokeWidth="1.5"/>
      <path d="M5.75 9l2.2 2.2L12.5 6.6" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bell: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2.25c-2.5 0-4 1.9-4 4.25 0 3.2-1 4.25-1.5 4.75h11c-.5-.5-1.5-1.55-1.5-4.75 0-2.35-1.5-4.25-4-4.25ZM7 14a2 2 0 004 0" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  gift: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2.75 6.25h12.5V9H2.75zM4 9h10v6.25H4zM9 6.25v9M9 6.25S8 2.75 5.75 2.75 4 6.25 9 6.25Zm0 0s1-3.5 3.25-3.5S14 6.25 9 6.25Z" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  appsGrid: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g fill="#606A81">
        <circle cx="2.5" cy="2.5" r="1.5"/><circle cx="8" cy="2.5" r="1.5"/><circle cx="13.5" cy="2.5" r="1.5"/>
        <circle cx="2.5" cy="8" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="13.5" cy="8" r="1.5"/>
        <circle cx="2.5" cy="13.5" r="1.5"/><circle cx="8" cy="13.5" r="1.5"/><circle cx="13.5" cy="13.5" r="1.5"/>
      </g>
    </svg>
  ),
  listView: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 3.5h12M2 8h12M2 12.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  gridView: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.75" y="1.75" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="9.25" y="1.75" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="1.75" y="9.25" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="9.25" y="9.25" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  plus: (c = 'white') => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v10M1 6h10" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  more: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g fill="currentColor"><circle cx="3" cy="8" r="1.4"/><circle cx="8" cy="8" r="1.4"/><circle cx="13" cy="8" r="1.4"/></g>
    </svg>
  ),
  download: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5v7m0 0L4.5 6M7 8.5 9.5 6M2 10.5v1A1.5 1.5 0 003.5 13h7a1.5 1.5 0 001.5-1.5v-1" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  filter: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 2.5h12L8.2 8v4l-2.4 1V8L1 2.5Z" stroke="#606A81" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  sort: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3.5 2.5v9m0 0L1.5 9.5M3.5 11.5 5.5 9.5M10.5 11.5v-9m0 0L8.5 4.5M10.5 2.5 12.5 4.5" stroke="#606A81" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  rowHeight: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5v11M7 1.5 5 3.5M7 1.5 9 3.5M7 12.5l-2-2M7 12.5l2-2M1 4.5h12M1 9.5h12" stroke="#606A81" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  groupBy: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1.5" width="5" height="5" rx="1" stroke="#606A81" strokeWidth="1.3"/>
      <path d="M9 3h4M9 6h4M9 9.5h4M1 12h12" stroke="#606A81" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  columns: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1.25" y="1.75" width="11.5" height="10.5" rx="1.5" stroke="#606A81" strokeWidth="1.3"/>
      <path d="M5.5 1.75v10.5M9 1.75v10.5" stroke="#606A81" strokeWidth="1.3"/>
    </svg>
  ),
  tag: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M6.5 1.25H2.5A1.25 1.25 0 001.25 2.5v4c0 .33.13.65.37.88l5 5a1.25 1.25 0 001.76 0l4-4a1.25 1.25 0 000-1.76l-5-5A1.25 1.25 0 006.5 1.25Z" stroke="#606A81" strokeWidth="1.3" strokeLinejoin="round"/>
      <circle cx="4.4" cy="4.4" r="1" fill="#606A81"/>
    </svg>
  ),
  caretDown: (c = '#606A81') => (
    <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
      <path d="M8 0 4 4 0 0h8Z" fill={c}/>
    </svg>
  ),
  chevL: () => (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path d="M6 1 1 6l5 5" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chevR: () => (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path d="M1 1l5 5-5 5" stroke="#606A81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sortArrow: () => (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
      <path d="M4 0 7 3.2H1L4 0ZM4 10 1 6.8h6L4 10Z" fill="#B4BEC8"/>
    </svg>
  ),
  greenCheckCircle: () => (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none">
      <circle cx="7.5" cy="8" r="6.75" stroke="#17BB8D" strokeWidth="1.4"/>
      <path d="M4.75 8l1.9 1.9L10.25 6" stroke="#17BB8D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  checkCircle: (c) => (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none">
      <circle cx="7.5" cy="8" r="6.75" stroke={c} strokeWidth="1.4"/>
      <path d="M4.75 8l1.9 1.9L10.25 6" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  doc: () => (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <path d="M2.75.75h5.5L13 5.25v9A1.5 1.5 0 0111.5 15.75h-9A1.5 1.5 0 011 14.25V2.25A1.5 1.5 0 012.5.75Z" stroke="#606A81" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M8 1v4h4" stroke="#606A81" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  info: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.75" stroke="#2AA7FF" strokeWidth="1.4"/>
      <path d="M8 7.2v4M8 4.9v.1" stroke="#2AA7FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  link: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6.5 9.5l3-3M6 5l.9-.9a2.9 2.9 0 014.1 4.1l-.9.9M10 11l-.9.9A2.9 2.9 0 015 7.8l.9-.9" stroke="#606A81" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  thumbUp: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4.5 7v6.5M2 7.5h2.5V14H2.5A.5.5 0 012 13.5V7.5Zm2.5 0L7 1.8a.4.4 0 01.75.15V4.5h4.4a1.3 1.3 0 011.28 1.56l-1 5A1.3 1.3 0 0111.15 12H4.5" stroke="#17BB8D" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  thumbDown: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11.5 9V2.5M14 8.5h-2.5V2h1.5a.5.5 0 01.5.5V8.5Zm-2.5 0L9 14.2a.4.4 0 01-.75-.15V11.5h-4.4a1.3 1.3 0 01-1.28-1.56l1-5A1.3 1.3 0 014.85 4H11.5" stroke="#F26B6B" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
}

/* ═══════════════════════════════════════════════════════════════════════════
   Small building blocks
   ═══════════════════════════════════════════════════════════════════════════ */

const CountPill = ({ children }) => <span className="ps-count">{children}</span>

const Avatar = ({ src, initials, color }) => (
  <span className="ps-avatar" style={{ background: color || '#C6CFDA' }}>
    {src ? <img src={src} alt="" /> : initials}
  </span>
)

const ToolbarBtn = ({ icon, label, caret }) => (
  <button className="ps-tool-btn">
    {icon}
    {label && <span>{label}</span>}
    {caret && I.caretDown()}
  </button>
)

const Tab = ({ icon, label, active, onClick }) => (
  <button className={`ps-tab${active ? ' ps-tab--active' : ''}`} onClick={onClick}>
    <span className="ps-tab-ico">{icon}</span>
    {label}
  </button>
)

/* ═══════════════════════════════════════════════════════════════════════════
   Table data
   ═══════════════════════════════════════════════════════════════════════════ */

const COLUMNS = ['Contact Name', 'Mobile', 'Account Name', 'Email', 'Phone', 'Contact Owner']

// Avatar palette (deterministic by initial)
const AV = ['#E39A5C', '#7C9CF2', '#59B98A', '#E27C9C', '#8E7CE2', '#5CB6E3', '#D98A5C', '#6FB07A', '#C97CB0']
const avColor = (s) => AV[(s.charCodeAt(0) + (s.charCodeAt(1) || 0)) % AV.length]
const initials = (n) => n.replace(/^(Dr\.|Col\.|Capt\.)\s*/, '').split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()

const ROWS = [
  { id: 1,  status: 'green', name: 'Kate Tarnner',        mobile: '+91-9595971774', account: 'Financial Planner',           email: 'vaishnavi.nandi@worldmail.com', phone: '+91-6334682687', owner: 'Angus MacGyver' },
  { id: 2,  status: 'green', name: 'Kate Tanner',         mobile: '+91-9595971774', account: 'Financial Planner',           email: 'vaishnavi.nandi@worldmail.com', phone: '+91-6334682687', owner: 'Angus MacGyver' },
  { id: 3,  status: 'green', name: 'Jonathan Higgins',    mobile: '+91-9726607579', account: 'Technical Lead',              email: 'prarthana.pagolu@live.com',     phone: '+91-9348483507', owner: 'Templeton Peck' },
  { id: 4,  status: 'red',   name: 'Kate Tanner',         mobile: '+91-6537139937', account: 'IT Project Manager',          email: 'saira.joshi@mac.com',          phone: '+91-9832857683', owner: 'Devon Miles' },
  { id: 5,  status: 'green', name: 'Rick Wright',         mobile: '+91-9581078621', account: 'Desktop Support',             email: 'anuvaraghavachari@aim.in',     phone: '+91-6861458443', owner: 'Mike Torello' },
  { id: 6,  status: 'green', name: 'Kate Tanner',         mobile: '+91-7050321504', account: 'Computer Network Specialist', email: 'binish.vaddadi@india.com',     phone: '+91-9605619250', owner: 'Angus MacGyver' },
  { id: 7,  status: 'green', name: 'Templeton Peck',      mobile: '+91-7017505139', account: 'Software Developer',          email: 'kisan.suraparaju@computer.com', phone: '+91-8433661034', owner: 'Rick Wright' },
  { id: 8,  status: 'green', name: 'Mike Torello',        mobile: '+91-6637992699', account: 'Computer Technician',         email: 'dyal.thanya@network.net',      phone: '+91-8636634345', owner: 'Mike Torello' },
  { id: 9,  status: 'red',   name: 'Lynn Tanner',         mobile: '+91-6390953453', account: 'IT Security Analyst',         email: 'ravuri.bhavi@bharat.org',      phone: '+91-6211433100', owner: 'Dr. Bonnie Barstow' },
  { id: 10, status: 'green', name: 'Angus MacGyver',      mobile: '+91-7729649706', account: 'React Developer',             email: 'siddharth.khinchi@market.com', phone: '+91-7645596112', owner: 'Murdock' },
  { id: 11, status: 'green', name: 'Robert James',        mobile: '+91-9483246805', account: 'Scrum Master',               email: 'tallapragada.jaithra@email.in', phone: '+91-6674193383', owner: 'Col. Roderick Decker' },
  { id: 12, status: 'red',   name: 'Rick Wright',         mobile: '+91-9543303625', account: 'Database Manager',            email: 'pranakashy@mail.com',          phone: '+91-7390233798', owner: 'Capt. Trunk' },
  { id: 13, status: 'green', name: 'Angela Bower',        mobile: '+91-6665823259', account: 'Database Manager',            email: 'ekani.jangir@workplace.org',   phone: '+91-7350745715', owner: 'Michael Knight' },
  { id: 14, status: 'red',   name: 'Theodore T.C. Calvin', mobile: '+91-7751596951', account: 'JavaScript Developer',       email: 'muccandi.warinder@mail.org',   phone: '+91-8087675671', owner: 'Mike Torello' },
  { id: 15, status: 'green', name: 'Mike Torello',        mobile: '+91-9806172049', account: 'Technical Specialist',        email: 'peri.ekta@mirvariable.com',    phone: '+91-8409068804', owner: 'Angela Bower' },
  { id: 16, status: 'red',   name: 'Dr. Bonnie Barstow',  mobile: '+91-9843110359', account: 'Front-End Developer',         email: 'pranav.kannur@email.in',       phone: '+91-9126691272', owner: 'Jonathan Higgins' },
  { id: 17, status: 'green', name: 'Willie Tanner',       mobile: '+91-7014333727', account: 'Iteration Manager',           email: 'balraj.murthy@me.org',         phone: '+91-8343816184', owner: 'Capt. Trunk' },
]

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

function PageSources() {
  const [tab, setTab] = useState('all')
  const [view, setView] = useState('list')
  const [checked, setChecked] = useState({})
  const toggle = (id) => setChecked(c => ({ ...c, [id]: !c[id] }))

  return (
    <div className="ps">
      <SideMenu />

      <div className="ps-main">

        {/* ── Global top bar ─────────────────────────────────────────── */}
        <header className="ps-topbar">
          <div className="ps-search">
            {I.search()}
            <input placeholder="Search (cmd+k)" />
          </div>
          <div className="ps-topbar-right">
            <a className="ps-upgrade">Upgrade Now</a>
            <span className="ps-topbar-divider" />
            <button className="ps-icon-btn">{I.plusSquare()}</button>
            <button className="ps-icon-btn">{I.checkSquare()}</button>
            <button className="ps-icon-btn">{I.bell()}</button>
            <button className="ps-icon-btn">{I.gift()}</button>
            <Avatar initials="A" color="#7C9CF2" />
            <button className="ps-icon-btn">{I.appsGrid()}</button>
          </div>
        </header>

        {/* ── Content ────────────────────────────────────────────────── */}
        <div className="ps-content">

          {/* Page header */}
          <div className="ps-page-head">
            <h1 className="ps-title">Contacts</h1>
            <div className="ps-head-actions">
              <div className="ps-view-toggle">
                <button className={`ps-vt${view === 'list' ? ' ps-vt--on' : ''}`} onClick={() => setView('list')}>{I.listView()}</button>
                <button className={`ps-vt${view === 'grid' ? ' ps-vt--on' : ''}`} onClick={() => setView('grid')}>{I.gridView()}</button>
              </div>
              <button className="ps-btn-primary">{I.plus()} Contact</button>
              <button className="ps-more-btn">{I.more()}</button>
            </div>
          </div>

          {/* Tabs + import/export */}
          <div className="ps-tabs-row">
            <div className="ps-tabs">
              <Tab icon={I.listView()} label="All Contacts"  active={tab === 'all'}  onClick={() => setTab('all')} />
              <span className="ps-tab-div" />
              <Tab icon={I.groupBy()}  label="New Prospects"  active={tab === 'np'}   onClick={() => setTab('np')} />
              <span className="ps-tab-div" />
              <Tab icon={I.rowHeight()} label="This Week"     active={tab === 'tw'}   onClick={() => setTab('tw')} />
              <span className="ps-tab-div" />
              <Tab icon={I.columns()}  label="Recently Closed" active={tab === 'rc'}  onClick={() => setTab('rc')} />
              <span className="ps-tab-div" />
              <Tab icon={I.tag()}      label="New Contacts"   active={tab === 'nc'}   onClick={() => setTab('nc')} />
              <span className="ps-tab-div" />
              <button className="ps-more-btn ps-more-btn--sm">{I.more()}</button>
              <button className="ps-tab-add">{I.plus('#606A81')}</button>
            </div>
            <button className="ps-import">{I.download()} Import / Export</button>
          </div>

          {/* Toolbar */}
          <div className="ps-toolbar">
            <div className="ps-toolbar-left">
              <ToolbarBtn icon={I.filter()}    label="Filter" />
              <span className="ps-tool-div" />
              <ToolbarBtn icon={I.sort()}      label="Sort by: Contact Name (Asc)" />
              <ToolbarBtn icon={I.rowHeight()} label="Row Height" />
              <ToolbarBtn icon={I.groupBy()}   label="Group By" />
              <ToolbarBtn icon={I.columns()}   label="Displayed Columns" />
              <ToolbarBtn icon={I.tag()}       label="Tags" />
            </div>
            <div className="ps-toolbar-right">
              <span className="ps-range">1 to 1100 of 300</span>
              <button className="ps-pagesize">50 {I.caretDown()}</button>
              <button className="ps-nav-btn">{I.chevL()}</button>
              <button className="ps-nav-btn">{I.chevR()}</button>
            </div>
          </div>

          {/* Table */}
          <div className="ps-table">
            {/* Header */}
            <div className="ps-thead">
              <div className="ps-th ps-th-check">
                <Checkbox variant="list" checked={false} onChange={() => {}} />
              </div>
              {COLUMNS.map((c, i) => (
                <div className={`ps-th ps-col-${i}`} key={c}>
                  <span>{c}</span>
                  {i === 0 && <span className="ps-sort-active">{I.caretDown('#4B556E')}</span>}
                </div>
              ))}
            </div>

            {/* Body */}
            <div className="ps-tbody">
              {ROWS.map(r => (
                <div className={`ps-row${r.hover ? ' ps-row--hover' : ''}`} key={r.id}>
                  <div className="ps-td ps-td-check">
                    <Checkbox variant="list" checked={!!checked[r.id]} onChange={() => toggle(r.id)} />
                    <span className="ps-row-ico">
                      {I.checkCircle(r.status === 'red' ? '#F26B8A' : '#17BB8D')}
                    </span>
                    <Avatar initials={initials(r.name)} color={avColor(r.name)} />
                  </div>

                  <div className="ps-td ps-col-0">
                    <span className="ps-dealname ps-dealname--bold">{r.name}</span>
                  </div>

                  <div className="ps-td ps-col-1"><span className="ps-cell">{r.mobile}</span></div>
                  <div className="ps-td ps-col-2"><span className="ps-cell">{r.account}</span></div>
                  <div className="ps-td ps-col-3"><span className="ps-cell">{r.email}</span></div>
                  <div className="ps-td ps-col-4"><span className="ps-cell">{r.phone}</span></div>

                  <div className="ps-td ps-col-5">
                    <Avatar initials={initials(r.owner)} color={avColor(r.owner)} />
                    <span className="ps-by">{r.owner}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="ps-tfoot">
              <span className="ps-foot-item">Total Contact <CountPill>250</CountPill></span>
              <span className="ps-foot-div" />
              <span className="ps-foot-item">Contacts with Open Deals <CountPill>35</CountPill></span>
              <span className="ps-foot-div" />
              <span className="ps-foot-item">Untouched Contacts <CountPill>34</CountPill></span>
              <span className="ps-foot-div" />
              <span className="ps-foot-item">Contacts with Open Deals <CountPill>75</CountPill></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PageSources
