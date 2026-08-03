import { useState } from 'react'
import { OUTLINE_ICONS } from './outline'

// Raw GitHub URL to the real, standalone .svg file for a given icon id —
// fetching this URL returns the exact file bytes, no lookup/interpretation
// step required, which is the whole point (see ICONS.md).
const ICON_FILE_BASE = 'https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/icons/outline'
const iconFileUrl = (id) => `${ICON_FILE_BASE}/${id}.svg`

/* ── small clipboard icon, reused for every card's copy button ── */
const CopySvg = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M9 5V2.5C9 1.94772 8.55228 1.5 8 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V8C1.5 8.55228 1.94772 9 2.5 9H5" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
)

/**
 * IconCard — one mini card in an icon grid: icon preview, name, copy button.
 * Copies the short `ds:icon-<id>` token — easy to paste into a prompt
 * without cluttering it with a long URL. The id alone is enough: because the
 * file URL pattern is fixed (`iconFileUrl` above), ICONS.md instructs an
 * agent to deterministically construct and fetch that exact URL as soon as
 * it sees the token — the download happens automatically on that end, the
 * human just pastes a short id. See ICONS.md for the full instructions.
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
        padding: '0 8px', boxSizing: 'border-box',
        border: '1px solid #E8EEF3', borderRadius: '10px',
        background: '#fff',
      }}
    >
      <button
        onClick={onCopy}
        title={`Copy ID (ds:icon-${id} — fetches ${iconFileUrl(id)})`}
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

      <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#606A81', flexShrink: 0 }}>
        <Icon />
      </div>

      {/* Truncate with an ellipsis if the name is wider than the card's
          inner width (104px - 8px*2 padding); the native title attribute
          shows the full name in a tooltip on hover. */}
      <span
        title={name}
        style={{
          fontSize: '12px', color: copied ? '#0783DA' : '#515159', textAlign: 'center',
          maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}
      >
        {copied ? 'Copied!' : name}
      </span>
    </div>
  )
}

/**
 * OutlineIconsSection — the full card grid for the outline icon set, plus a
 * short explainer of the copy-ID convention (mirrors the wording used for
 * component copy buttons in COMPONENTS.md).
 *
 * @param {string} query  search text (rendered top-right of the page by the
 *                        parent — this component only filters/renders the grid)
 */
export function OutlineIconsSection({ query = '' }) {
  const filtered = query.trim()
    ? OUTLINE_ICONS.filter(icon => icon.name.toLowerCase().includes(query.trim().toLowerCase()))
    : OUTLINE_ICONS

  return (
    <div>
      <p style={{ fontSize: '13px', color: '#717179', marginBottom: '20px' }}>
        Click the copy icon on any card, then paste it into your prompt — it copies a
        short <code>ds:icon-&lt;id&gt;</code> token, not a long link. That id tells the
        AI exactly which real <code>.svg</code> file to download from this repo — see
        <code> ICONS.md</code> for how.
      </p>

      {filtered.length === 0 ? (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: '240px', color: '#98A0AE', fontSize: '13px',
        }}>
          No results found
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {filtered.map(icon => <IconCard key={icon.id} {...icon} />)}
        </div>
      )}
    </div>
  )
}
