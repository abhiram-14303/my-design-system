import { useState } from 'react'
import { Link } from 'react-router-dom'
import { OUTLINE_ICONS } from '../components/icons/outline'

// Left-nav categories for the icon library. Add a new key here (and a
// matching `{iconSetItems === 'Outline Icons' && ...}` render below, or swap
// to a lookup table) whenever a new icon set — Filled Icons, Colored Icons,
// etc. — gets added later.
const iconSetItems = ['Outline Icons']

/* ── small clipboard icon, reused for every card's copy button ── */
const CopySvg = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M9 5V2.5C9 1.94772 8.55228 1.5 8 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V8C1.5 8.55228 1.94772 9 2.5 9H5" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
)

/**
 * IconCard — one mini card in the grid: icon preview, name, copy button.
 * Copies `ds:icon-<id>` — resolved in ICONS.md at the repo root (see the
 * "ID REFERENCES" section of COMPONENTS.md for how that token gets used).
 */
function IconCard({ id, name, Icon }) {
  const [copied, setCopied] = useState(false)

  const onCopy = (e) => {
    e.stopPropagation()
    const text = `ds:icon-${id}`
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {})
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: '10px',
        width: '104px', height: '96px',
        border: '1px solid #E8EEF3', borderRadius: '10px',
        background: '#fff',
      }}
    >
      <button
        onClick={onCopy}
        title={`Copy ID (ds:icon-${id})`}
        style={{
          position: 'absolute', top: '6px', right: '6px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: 'none', background: 'transparent', cursor: 'pointer',
          padding: '3px', borderRadius: '5px',
          color: copied ? '#0783DA' : '#C3CCDA',
          transition: 'color 0.15s',
        }}
        onMouseEnter={(e) => { if (!copied) e.currentTarget.style.color = '#0783DA' }}
        onMouseLeave={(e) => { if (!copied) e.currentTarget.style.color = '#C3CCDA' }}
      >
        <CopySvg />
      </button>

      <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#606A81' }}>
        <Icon />
      </div>

      <span style={{ fontSize: '12px', color: copied ? '#0783DA' : '#515159', textAlign: 'center' }}>
        {copied ? 'Copied!' : name}
      </span>
    </div>
  )
}

function OutlineIconsSection() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {OUTLINE_ICONS.map(icon => <IconCard key={icon.id} {...icon} />)}
    </div>
  )
}

function IconLibrary() {
  const [active, setActive] = useState('Outline Icons')
  const [menuHov, setMenuHov] = useState(null)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'white' }}>

      {/* Left Panel */}
      <div style={{ width: '230px', borderRight: '1px solid #E8EEF3', padding: '0', flexShrink: 0, height: '100vh', overflowY: 'auto' }}>
        <div style={{ paddingLeft: '8px', paddingRight: '8px', marginBottom: '15px', paddingTop: '10px' }}>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#212129', paddingLeft: '12px', paddingTop: '15px', paddingBottom: '4px' }}>Bigin Icons</p>
          <div style={{ display: 'flex', gap: '6px', paddingLeft: '12px', paddingBottom: '10px' }}>
            <Link to="/" style={{ fontSize: '12px', color: '#717179', textDecoration: 'none' }}>Components</Link>
            <span style={{ fontSize: '12px', color: '#C3CCDA' }}>/</span>
            <span style={{ fontSize: '12px', color: '#00A879', fontWeight: 600 }}>Icons</span>
          </div>
        </div>
        <div style={{ paddingLeft: '8px', paddingRight: '8px' }}>
          <p style={{ fontSize: '11px', fontWeight: '600', color: '#717179', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px', paddingLeft: '12px' }}>Icon Sets</p>
          {iconSetItems.map(item => (
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
      <div style={{ flex: 1, padding: '25px 20px', overflow: 'auto' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{active}</h1>
        <p style={{ fontSize: '13px', color: '#717179', marginBottom: '24px' }}>
          Click the copy icon on any card, then paste it into your prompt — it copies a
          compact <code>ds:icon-&lt;id&gt;</code> token, not the whole SVG. See "ID REFERENCES" in COMPONENTS.md.
        </p>
        {active === 'Outline Icons' && <OutlineIconsSection />}
      </div>
    </div>
  )
}

export default IconLibrary
