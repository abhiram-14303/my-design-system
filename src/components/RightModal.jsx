import { useState } from 'react'
import PanelHeader from './PanelHeader'
import Footer, { FooterLink } from './Footer'
import InputField from './InputField'
import SelectField from './SelectField'
import CheckboxField from './CheckboxField'
import './RightModal.css'

// ── Inline SVG assets ──────────────────────────────────────────────────────

/** Same filled-triangle chevron used inside SelectField triggers */
const DropdownChevron = () => (
  <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
    <path d="M7.99998 0L3.99998 4L0 0H7.99998Z" fill="#606A81"/>
  </svg>
)

const USDIcon = () => (
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
    <path d="M0.75 11.1144C0.75 12.3601 2.13777 13.25 3.35206 13.25H6.47451C7.68881 13.25 8.90314 12.3602 8.90314 10.9365C8.90314 9.86866 8.20922 8.97881 7.34186 8.80084L2.48471 7.19916C1.44388 7.02119 0.749958 5.95337 0.923428 5.06354C0.923428 3.81778 2.13777 2.75 3.35206 2.75H6.47451C7.86228 2.75 9.07653 3.99576 9.25 5.41949" stroke="#757F98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 13.25V15.25" stroke="#757F98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 0.75V2.75"   stroke="#757F98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PlusBlueIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 0.75V11.25M0.75 6H11.25" stroke="#0D92EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/** Resize / expand handle icon for description field (bottom-right corner) */
const DescribeIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M1 9L9 1M6 9L9 6" stroke="#757F98" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// ── Sub-components ─────────────────────────────────────────────────────────

/** Pill-shaped Owner filter — uses same chevron as SelectField */
const OwnerSelector = ({ name = 'Jackson Noel', initials = 'JN' }) => (
  <div className="rm-owner">
    <span className="rm-owner-lbl">Owner</span>
    <button className="rm-owner-btn">
      <div className="rm-owner-avatar">{initials}</div>
      <span className="rm-owner-name">{name}</span>
      <DropdownChevron />
    </button>
  </div>
)

/** Label on left + freeform content on right — matches InputField alignment */
const FieldRow = ({ label, children, center = false }) => (
  <div className={`rm-row${center ? ' rm-row--center' : ''}`}>
    <span className="rm-row-label">{label}</span>
    <div className="rm-row-content">{children}</div>
  </div>
)

const SectionHeader = ({ title, right }) => (
  <div className="rm-section-hdr">
    <span className="rm-section-title">{title}</span>
    {right}
  </div>
)

// ── Dropdown option sets ───────────────────────────────────────────────────

const PIPELINE_OPTIONS = [
  { id: 'standard',   label: 'Standard'   },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'partner',    label: 'Partner'    },
]

const STAGE_OPTIONS = [
  { id: 'qualification', label: 'Qualification' },
  { id: 'proposal',      label: 'Proposal'      },
  { id: 'negotiation',   label: 'Negotiation'   },
  { id: 'closed_won',    label: 'Closed Won'    },
  { id: 'closed_lost',   label: 'Closed Lost'   },
]

// ── Main component ─────────────────────────────────────────────────────────

function RightModal({ title = 'Create Deal', onSave, onCancel }) {
  return (
    <div className="rm">
      <PanelHeader title={title} />

      <div className="rm-body">

        {/* ── Deal Information ────────────────────────────── */}
        <div className="rm-section">
          <SectionHeader
            title="Deal Information"
            right={<OwnerSelector />}
          />
          <div className="rm-fields">
            <InputField label="Deal Name"    placeholder="Enter" mandatory />
            <InputField label="Contact Name" placeholder="Enter" showLookup />
            <InputField label="Company Name" placeholder="Enter" showLookup />

            {/* Sub-Pipeline & Stage — mandatory dual SelectFields */}
            <FieldRow label="Sub-Pipeline & Stage" center>
              <div className="rm-dual">
                <SelectField placeholder="Pipeline"       options={PIPELINE_OPTIONS} mandatory />
                <SelectField placeholder="Choose a Stage" options={STAGE_OPTIONS}    mandatory />
              </div>
            </FieldRow>

            <InputField label="Closing Date" placeholder="MM/DD/YYYY" mandatory />

            {/* Amount with $ icon */}
            <FieldRow label="Amount" center>
              <div className="rm-amount-wrap">
                <input className="rm-amount-input" type="number" placeholder="0.00" />
                <span className="rm-amount-icon"><USDIcon /></span>
              </div>
            </FieldRow>

            {/* Description — 40px, resize icon at bottom-right */}
            <FieldRow label="Description" center>
              <div className="rm-textarea-wrap">
                <textarea
                  className="rm-textarea"
                  placeholder="A few words about this"
                />
                <span className="rm-describe-icon"><DescribeIcon /></span>
              </div>
            </FieldRow>
          </div>
        </div>

        {/* ── Additional Information ──────────────────────── */}
        <div className="rm-section rm-section--secondary">
          <SectionHeader title="Additional Information" />
          <div className="rm-fields">
            <InputField label="Final Amount" placeholder="Enter" />
          </div>
        </div>

        {/* ── + Products ──────────────────────────────────── */}
        <div className="rm-add-row">
          <button className="rm-add-btn">
            <PlusBlueIcon />
            <span className="rm-add-label">Products</span>
          </button>
        </div>

      </div>

      <Footer
        leftSlot={<FooterLink>Customize Fields</FooterLink>}
        actions={[
          { label: 'Cancel', variant: 'neutral', onClick: onCancel },
          { label: 'Save',   variant: 'primary', onClick: onSave   },
        ]}
      />
    </div>
  )
}

// ── Create Contact modal ───────────────────────────────────────────────────

export function CreateContact({ onSave, onCancel }) {
  return (
    <div className="rm">
      <PanelHeader title="Create Contact" />

      <div className="rm-body">

        {/* ── Contact Information ──────────────────────────── */}
        <div className="rm-section">
          <SectionHeader
            title="Contact Information"
            right={<OwnerSelector name="Flemming Raja" initials="FR" />}
          />
          <div className="rm-fields">
            <InputField label="First Name"      placeholder="Enter" />
            <InputField label="Last Name"       placeholder="Enter" mandatory />
            <InputField label="Title"           placeholder="Enter" />
            <InputField label="Email"           placeholder="Enter" />
            <InputField label="Company Name"    placeholder="Enter" showLookup />
            <InputField label="Mobile"          placeholder="Enter" />
            <InputField label="Phone"           placeholder="Enter" />
            <InputField label="Date of Birth"   placeholder="YYYY/MM/DD" />
            <InputField label="Home Phone"      placeholder="Enter" />

            <CheckboxField label="CusCheckbox" placeholder="" />

            <InputField label="Secondary Email" placeholder="Enter" />

            {/* Description textarea */}
            <FieldRow label="Description">
              <div className="rm-textarea-wrap">
                <textarea
                  className="rm-textarea"
                  placeholder="A few words about this contact"
                />
                <span className="rm-describe-icon"><DescribeIcon /></span>
              </div>
            </FieldRow>

            <InputField label="QuickBooks ID" placeholder="Enter" />
          </div>
        </div>

        {/* ── Address Information ──────────────────────────── */}
        <div className="rm-section rm-section--secondary">
          <SectionHeader title="Address Information" />
          <div className="rm-fields">
            <InputField label="Street"          placeholder="Enter" />
            <InputField label="City"            placeholder="Enter" />
            <InputField label="State / Province" placeholder="Enter" />
            <InputField label="Zip / Postal Code" placeholder="Enter" />
            <InputField label="Country"         placeholder="Enter" />
          </div>
        </div>

      </div>

      <Footer
        leftSlot={<FooterLink>Customize Fields</FooterLink>}
        actions={[
          { label: 'Cancel', variant: 'neutral', onClick: onCancel },
          { label: 'Save',   variant: 'primary', onClick: onSave   },
        ]}
      />
    </div>
  )
}

export default RightModal
