import { useState } from 'react'
import './SideMenu.css'

/* ═══════════════════════════════════════════════════════════════════════════
   Icons — all use stroke/fill="currentColor" so row state drives the color
   ═══════════════════════════════════════════════════════════════════════════ */

const BiginLogo = () => (
  <img src="/img/bigin-icon.png" alt="Bigin" className="sm-brand-logo" width="22" height="24" />
)

const CollapseIcon = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
    <rect x="0.75" y="0.75" width="14.5" height="12.5" rx="2.25" stroke="#98A0AE" strokeWidth="1.5"/>
    <path d="M5.5 0.75V13.25" stroke="#98A0AE" strokeWidth="1.5"/>
  </svg>
)

const ArrowMini = () => (
  <svg className="sm-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="6" fill="white" fillOpacity="0.5"/>
    <path d="M7.5 12L10.5 9L7.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Module icons ────────────────────────────────────────────────────────────

const PipelinesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5.60078 0.75H3.30078C1.92007 0.75 0.800781 1.86929 0.800781 3.25V13.25C0.800781 14.3546 1.69621 15.25 2.80078 15.25H3.60078C4.70535 15.25 5.60078 14.3546 5.60078 13.25V0.75ZM5.60078 0.75H10.4008M5.6008 12.25H7.9008C9.28151 12.25 10.4008 11.1307 10.4008 9.75V0.75M10.4008 0.75H12.7008C14.0815 0.75 15.2008 1.86929 15.2008 3.25V6.25C15.2008 7.63071 14.0815 8.75 12.7008 8.75H10.4008" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const ContactsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3.2858 14.9677C3.9658 13.0277 5.8258 11.6477 7.9958 11.6477C10.1658 11.6477 12.0258 13.0277 12.7058 14.9677M7.99456 4.65556C6.61385 4.65556 5.49456 5.77485 5.49456 7.15556C5.49456 8.53627 6.61385 9.65556 7.99456 9.65556C9.37527 9.65556 10.4946 8.53627 10.4946 7.15556C10.4946 5.77485 9.37527 4.65556 7.99456 4.65556ZM11.25 15.25H4.75C2.54086 15.25 0.75 13.4591 0.75 11.25V4.75C0.75 2.54086 2.54086 0.75 4.75 0.75H11.25C13.4591 0.75 15.25 2.54086 15.25 4.75V11.25C15.25 13.4591 13.4591 15.25 11.25 15.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CompaniesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.24996 15.25H13.25C14.3545 15.25 15.25 14.3546 15.25 13.25V3.25C15.25 1.86929 14.1307 0.75 12.75 0.75H8.74996C7.36925 0.75 6.24996 1.86929 6.24996 3.25V15.25ZM6.24996 15.25H3.25C1.86929 15.25 0.75 14.1307 0.75 12.75V10.5231C0.75 9.72322 1.13271 8.97166 1.77957 8.50122L6.25 5.50003M9.74996 7.25003H11.75M9.74996 4.25003H11.75M12.25 15.25H9.24996V13.25C9.24996 12.6977 9.69768 12.25 10.25 12.25H11.25C11.8022 12.25 12.25 12.6977 12.25 13.25V15.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ProductsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2.28716 2.15H12.8423C14.3795 2.15 15.5067 3.45 15.1993 4.95L14.2769 9.75C14.072 10.85 13.0472 11.75 11.92 11.75H6.0788C4.84907 11.75 3.92681 10.95 3.72185 9.75L2.28716 2.15ZM2.28716 2.15C2.08219 1.25001 1.15993 0.84999 0.75 0.75M6.5912 6.05H14.9879" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.64961 14.5001C7.64961 14.9972 7.24667 15.4001 6.74961 15.4001C6.25255 15.4001 5.84961 14.9972 5.84961 14.5001C5.84961 14.003 6.25255 13.6001 6.74961 13.6001C7.24667 13.6001 7.64961 14.003 7.64961 14.5001ZM10.7496 13.6001C10.2525 13.6001 9.84961 14.003 9.84961 14.5001C9.84961 14.9972 10.2525 15.4001 10.7496 15.4001C11.2467 15.4001 11.6496 14.9972 11.6496 14.5001C11.6496 14.003 11.2467 13.6001 10.7496 13.6001Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const ActivitiesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4.75 0.75V3.25M11.25 0.75V3.25M10.75 7.075L7.01 10.925L5.25 8.9768M11.25 15.25H4.75C2.54086 15.25 0.75 13.4591 0.75 11.25V5.5C0.75 3.567 2.317 2 4.25 2H11.75C13.683 2 15.25 3.567 15.25 5.5V11.25C15.25 13.4591 13.4591 15.25 11.25 15.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MessagesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.25 13H10.8134C10.4527 13 10.1067 13.1433 9.85159 13.3984L8.35355 15.1036C8.15829 15.2988 7.8417 15.2988 7.64644 15.1036L6.1484 13.3984C5.8933 13.1433 5.54731 13 5.18655 13H4.75C2.54086 13 0.75 11.2091 0.75 9V4.75C0.75 2.54086 2.54086 0.75 4.75 0.75H11.25C13.4591 0.75 15.25 2.54086 15.25 4.75V9C15.25 11.2091 13.4591 13 11.25 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.10039 6.87197C9.10039 7.47948 8.6079 7.97197 8.00039 7.97197C7.39288 7.97197 6.90039 7.47948 6.90039 6.87197C6.90039 6.26446 7.39288 5.77197 8.00039 5.77197C8.6079 5.77197 9.10039 6.26446 9.10039 6.87197ZM12.4754 6.87197C12.4754 7.47948 11.9829 7.97197 11.3754 7.97197C10.7679 7.97197 10.2754 7.47948 10.2754 6.87197C10.2754 6.26446 10.7679 5.77197 11.3754 5.77197C11.9829 5.77197 12.4754 6.26446 12.4754 6.87197ZM5.72539 6.87197C5.72539 7.47948 5.2329 7.97197 4.62539 7.97197C4.01788 7.97197 3.52539 7.47948 3.52539 6.87197C3.52539 6.26446 4.01788 5.77197 4.62539 5.77197C5.2329 5.77197 5.72539 6.26446 5.72539 6.87197Z" fill="currentColor"/>
  </svg>
)

const RouteIQIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 8.5C8.9665 8.5 9.75 7.7165 9.75 6.75C9.75 5.7835 8.9665 5 8 5C7.0335 5 6.25 5.7835 6.25 6.75C6.25 7.7165 7.0335 8.5 8 8.5Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 14.75C9.5 12.5 13.25 10.4632 13.25 6.75C13.25 3.85051 10.8995 1.5 8 1.5C5.10051 1.5 2.75 3.85051 2.75 6.75C2.75 10.4632 6.5 12.5 8 14.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Tool icons ──────────────────────────────────────────────────────────────

const LeadGenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
    <path d="M4.70623 4.00785H1.21485M13.7838 4.00785H10.2925M13.7838 1.68103V7.70402C13.7838 11.1463 11.1294 14.1463 7.68865 14.2472C4.12936 14.3516 1.21484 11.5012 1.21484 7.96552V1.68104C1.21484 1.16684 1.63168 0.75 2.14588 0.75H3.77519C4.28939 0.75 4.70623 1.16684 4.70623 1.68104V7.85348C4.70623 9.20086 5.61076 10.4403 6.93241 10.7024C8.71357 11.0556 10.2924 9.6977 10.2924 7.96553V1.68104C10.2924 1.16684 10.7093 0.75 11.2235 0.75H12.8528C13.367 0.75 13.7838 1.16684 13.7838 1.68103Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
  </svg>
)

const AIIcon = () => (
  <svg width="16" height="16" viewBox="0 0 17 17" fill="none">
    <path d="M5.89885 5.38119C5.19112 8.5853 4.23514 9.54125 1.03109 10.2489C0.866684 10.2851 0.75 10.4317 0.75 10.6001C0.75 10.7685 0.866684 10.9151 1.03109 10.9513C4.23514 11.6589 5.19112 12.6149 5.89885 15.819C5.93506 15.9834 6.08162 16.1001 6.25 16.1001C6.41838 16.1001 6.56494 15.9834 6.60115 15.819C7.30888 12.6149 8.26486 11.6589 11.4689 10.9513C11.6332 10.9151 11.75 10.7685 11.75 10.6001C11.75 10.4317 11.6332 10.2851 11.4689 10.2489C8.26486 9.54125 7.30888 8.5853 6.60115 5.38119C6.56494 5.21678 6.41838 5.1001 6.25 5.1001C6.08162 5.1001 5.93506 5.21678 5.89885 5.38119Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12.5265 0.778975C12.0762 2.81796 11.4678 3.42629 9.42888 3.87659C9.32425 3.89964 9.25 3.99292 9.25 4.1001C9.25 4.20727 9.32425 4.30056 9.42888 4.3236C11.4678 4.77391 12.0762 5.38224 12.5265 7.42122C12.5496 7.52584 12.6428 7.6001 12.75 7.6001C12.8572 7.6001 12.9504 7.52584 12.9735 7.42122C13.4238 5.38224 14.0322 4.77391 16.0711 4.3236C16.1757 4.30056 16.25 4.20727 16.25 4.1001C16.25 3.99292 16.1757 3.89964 16.0711 3.87659C14.0322 3.42629 13.4238 2.81796 12.9735 0.778975C12.9504 0.674351 12.8572 0.600098 12.75 0.600098C12.6428 0.600098 12.5496 0.674351 12.5265 0.778975Z" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
)

const AutomationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 17 16" fill="none">
    <path d="M1.03608 10.0185C0.845944 9.37894 0.755882 8.6994 0.755882 7.99989C0.745876 3.99265 3.98811 0.754883 8.00087 0.754883C9.72205 0.754883 11.3031 1.35447 12.544 2.35378M11.2031 3.00333H13.2044V1.00471M3.45774 13.656C4.6986 14.6553 6.27968 15.2549 8.00087 15.2549C12.0136 15.2549 15.2559 12.0171 15.2559 8.00988C15.2559 7.32035 15.1658 6.65082 14.9857 6.02125M4.80867 13.0064H2.80729V15.0051M8.00087 12.0071V10.2583M8.00087 5.76143V4.01264M9.95221 6.89065L11.4733 6.01126M4.53849 10.0085L6.04953 9.1391M9.95221 9.12911L11.4733 10.0085M4.53849 6.01126L6.04953 6.88066M8.00087 5.75144C6.76001 5.75144 5.74932 6.76074 5.74932 7.99989C5.74932 9.23903 6.76001 10.2483 8.00087 10.2483C9.24172 10.2483 10.2524 9.23903 10.2524 7.99989C10.2524 6.76074 9.24172 5.75144 8.00087 5.75144Z" stroke="currentColor" strokeWidth="1.51" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CommunicationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1.41692 2.64572L6.21228 6.45715C6.68871 6.78858 7.26871 6.96465 7.86942 6.96465C8.47013 6.96465 9.06049 6.78858 9.53692 6.45715L14.5601 2.59394M0.75 4.89286C0.75 2.60482 2.60482 0.75 4.89286 0.75H11.1072C13.3952 0.75 15.25 2.60482 15.25 4.89286V14.2143C15.25 14.7863 14.7863 15.25 14.2143 15.25H4.89286C2.60482 15.25 0.75 13.3951 0.75 11.1071V4.89286ZM10.2499 12.75C10.2499 11.3693 11.3693 10.2499 12.75 10.2499C14.1307 10.2499 15.2499 11.3693 15.2499 12.75V14.2499C15.2499 14.8023 14.8023 15.2499 14.2499 15.2499H12.75C11.3693 15.2499 10.2499 14.1307 10.2499 12.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ToppingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M12.5312 9.90605V15.1565M9.90633 12.5312H15.1562M4.98749 6.18749H1.95C1.28726 6.18749 0.75 5.65023 0.75 4.98749V1.95C0.75 1.28726 1.28726 0.75 1.95 0.75H4.98749C5.65023 0.75 6.18749 1.28726 6.18749 1.95V4.98749C6.18749 5.65023 5.65023 6.18749 4.98749 6.18749ZM4.98749 15.25H1.95C1.28726 15.25 0.75 14.7127 0.75 14.05V11.0125C0.75 10.3498 1.28726 9.81251 1.95 9.81251H4.98749C5.65023 9.81251 6.18749 10.3498 6.18749 11.0125V14.05C6.18749 14.7127 5.65023 15.25 4.98749 15.25ZM14.05 6.18749H11.0125C10.3498 6.18749 9.81251 5.65023 9.81251 4.98749V1.95C9.81251 1.28726 10.3498 0.75 11.0125 0.75H14.05C14.7127 0.75 15.25 1.28726 15.25 1.95V4.98749C15.25 5.65023 14.7127 6.18749 14.05 6.18749Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4.5 12.25V11M8 12.25V10M11.5 12.25V8.5M4.5 8.75C7.16193 8.03573 9.62673 5.99491 11.5 3.75M11.5 6V3.75H9.25M11.25 15.25H4.75C2.54086 15.25 0.75 13.4591 0.75 11.25V4.75C0.75 2.54086 2.54086 0.75 4.75 0.75H11.25C13.4591 0.75 15.25 2.54086 15.25 4.75V11.25C15.25 13.4591 13.4591 15.25 11.25 15.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ═══════════════════════════════════════════════════════════════════════════
   Menu data
   ═══════════════════════════════════════════════════════════════════════════ */

const MODULES = [
  { id: 'pipelines',  label: 'Pipelines',  icon: <PipelinesIcon />,  expandable: true  },
  { id: 'contacts',   label: 'Contacts',   icon: <ContactsIcon />                        },
  { id: 'companies',  label: 'Companies',  icon: <CompaniesIcon />                       },
  { id: 'products',   label: 'Products',   icon: <ProductsIcon />                        },
  { id: 'activities', label: 'Activities', icon: <ActivitiesIcon />                      },
  { id: 'messages',   label: 'Messages',   icon: <MessagesIcon />                        },
  { id: 'routeiq',    label: 'RouteIQ',    icon: <RouteIQIcon />                         },
]

const TOOLS = [
  { id: 'leadgen',      label: 'LeadGen',                 icon: <LeadGenIcon />,       expandable: true },
  { id: 'ai',           label: 'AI',                      icon: <AIIcon />                              },
  { id: 'automation',   label: 'Automation',              icon: <AutomationIcon />,    expandable: true },
  { id: 'communication',label: 'Communication',           icon: <CommunicationIcon />, expandable: true },
  { id: 'toppings',     label: 'Integrations & Toppings', icon: <ToppingsIcon />                        },
  { id: 'dashboards',   label: 'Dashboards',              icon: <DashboardIcon />                       },
]

/* ═══════════════════════════════════════════════════════════════════════════
   Item + Section
   ═══════════════════════════════════════════════════════════════════════════ */

function MenuItem({ item, selected, onSelect }) {
  return (
    <button
      className={`sm-item${selected ? ' sm-item--selected' : ''}`}
      onClick={() => onSelect(item.id)}
    >
      <span className="sm-icon">{item.icon}</span>
      <span className="sm-label">{item.label}</span>
      {item.expandable && <ArrowMini />}
    </button>
  )
}

function Section({ title, items, selected, onSelect }) {
  return (
    <div className="sm-section">
      <div className="sm-section-label">{title}</div>
      <div className="sm-items">
        {items.map(it => (
          <MenuItem key={it.id} item={it} selected={selected === it.id} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SideMenu
   ═══════════════════════════════════════════════════════════════════════════ */

function SideMenu() {
  const [selected, setSelected] = useState('pipelines')

  return (
    <div className="side-menu">
      {/* Header */}
      <div className="sm-header">
        <div className="sm-brand">
          <BiginLogo />
          <span className="sm-brand-name">Bigin</span>
        </div>
        <button className="sm-collapse"><CollapseIcon /></button>
      </div>

      {/* Nav */}
      <nav className="sm-nav">
        <Section title="MODULES" items={MODULES} selected={selected} onSelect={setSelected} />
        <Section title="TOOLS"   items={TOOLS}   selected={selected} onSelect={setSelected} />
      </nav>
    </div>
  )
}

export default SideMenu
