import { useState } from 'react'
import { OUTLINE_ICONS } from './outline'

/* ── small clipboard icon, reused for every card's copy button ── */
const CopySvg = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M9 5V2.5C9 1.94772 8.55228 1.5 8 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V8C1.5 8.55228 1.94772 9 2.5 9H5" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
)

/**
 * IconCard — one mini card in an icon grid: icon preview, name, copy button.
 * Copies `ds:icon-<id>` — resolved in ICONS.md at the repo root (see the
 * "ID REFERENCES" section of COMPONENTS.md for how that token gets used).
 */
export function IconCard({ id, name, Icon }) {
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

/**
 * OutlineIconsSection — the full card grid for the outline icon set, plus a
 * short explainer of the copy-ID convention (mirrors the wording used for
 * component copy buttons in COMPONENTS.md).
 */
export function OutlineIconsSection() {
  return (
    <div>
      <p style={{ fontSize: '13px', color: '#717179', marginBottom: '24px' }}>
        Click the copy icon on any card, then paste it into your prompt — it copies a
        compact <code>ds:icon-&lt;id&gt;</code> token, not the whole SVG. See "ID REFERENCES" in COMPONENTS.md
        (icon ids resolve in <code>ICONS.md</code>).
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {OUTLINE_ICONS.map(icon => <IconCard key={icon.id} {...icon} />)}
      </div>
    </div>
  )
}
