# Bigin Design System — AI Instructions

Package: `@abhiram-dd-14303/bigin-design-system`
CSS: `import '@abhiram-dd-14303/bigin-design-system/dist/bigin-design-system.css'` (add once in main.jsx)
Font: ZohoPuvi — included automatically via the CSS import above.

## CRITICAL RULES
- NEVER recreate any component from scratch. Always import from the package.
- NEVER use any other UI library for these components (no shadcn, no MUI, no antd).
- Always read the props table below before using a component.
- If a component variant is not listed here, it does not exist — do not invent one.

## Import
```js
import { Button, Checkbox, CheckboxField, Dropdown, Footer, InputField, PanelHeader, Pill, Radio, Search, SelectField, Toggle, PrimaryTabs, PrimaryTabOption } from '@abhiram-dd-14303/bigin-design-system'
```

---

## Button
7 variants, 3 sizes. All interactive states are built-in — do NOT pass `state` prop unless showing a static mockup.

```jsx
<Button variant="primary" size="large" onClick={fn}>Submit</Button>
<Button variant="primary-outline" size="medium" onClick={fn}>Cancel</Button>
<Button variant="failure" size="large" onClick={fn}>Delete</Button>
<Button variant="failure-outline" size="medium" onClick={fn}>Remove</Button>
<Button variant="neutral" size="medium" onClick={fn}>More</Button>
<Button variant="ai" size="medium" onClick={fn}>Manage</Button>
<Button variant="ai-solid" size="large" onClick={fn}>Generate</Button>
```

| Prop | Options | Default |
|------|---------|---------|
| variant | `primary` `primary-outline` `failure` `failure-outline` `neutral` `ai` `ai-solid` | `primary` |
| size | `large` `medium` `small` | `large` |
| onClick | function | — |
| children | label text | — |

Sizes: large=40px, medium=32px, small=28px.

---

## PrimaryTabs — Primary Tab Bar
Underlined tab bar with green active indicator. Use for main page-level navigation.

```jsx
<PrimaryTabs
  tabs={[{ id: 'import', label: 'Import' }, { id: 'export', label: 'Export' }]}
  value={activeTab}
  onChange={setActiveTab}
/>

// With count badges
<PrimaryTabs
  tabs={[{ id: 'all', label: 'All', count: 24 }, { id: 'open', label: 'Open', count: 5 }]}
  value={activeTab}
  onChange={setActiveTab}
  showCount
/>
```

| Prop | Options | Default |
|------|---------|---------|
| tabs | array of `{ id, label, count? }` | `[]` |
| value | active tab id | — |
| onChange | function(id) | — |
| showCount | boolean — show count badge | `false` |
| compact | boolean — tighter spacing | `false` |
| boldActive | boolean — bold active label | `false` |

---

## Pill — Secondary Tab / Pills Tab
Pill-shaped tab switcher. Use for secondary/filter-level tabs inside a page section.
**This is the "Secondary Tab" or "Pills Tab" in the design — NOT PrimaryTabs.**

```jsx
<Pill options={['All', 'Assistive AI', 'Agents', 'MCP']} value={active} onChange={setActive} />
<Pill options={['Day', 'Week', 'Month']} value={range} onChange={setRange} />
```

| Prop | Options | Default |
|------|---------|---------|
| options | array of strings | `[]` |
| value | current selection | — |
| onChange | function(value) | — |

---

## InputField
Text input with label, 9 states built-in. Interactive states (hover, focus) are automatic — do NOT manually set `state`.

```jsx
<InputField label="Email" placeholder="Enter your email" onChange={(val) => setEmail(val)} />
<InputField label="Email" error errorMessage="Email cannot be empty" />
<InputField label="Contact Name" mandatory placeholder="Enter" />
```

| Prop | Options | Default |
|------|---------|---------|
| label | string | `'Label Name'` |
| placeholder | string | `'Enter'` |
| value | string | `''` |
| onChange | function | — |
| size | `large` `medium` `small` | `large` |
| mandatory | boolean — red left border | `false` |
| error | boolean | — |
| errorMessage | string | `'It cannot be empty'` |

---

## SelectField
Dropdown select field — trigger button + floating list. Use for "choose one" form fields.

```jsx
<SelectField
  placeholder="Choose a Stage"
  options={[{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }]}
  value={stage}
  onChange={setStage}
/>
```

| Prop | Options | Default |
|------|---------|---------|
| placeholder | string | `'Select'` |
| options | array of `{ id, label }` | `[]` |
| value | selected id | — |
| onChange | function(id) | — |
| mandatory | boolean | `false` |

---

## Dropdown
Floating list panel only — no trigger. 7 variants. Use SelectField instead if you need a form field with a trigger button.

```jsx
// Simple list
<Dropdown items={[{ id: 'a', label: 'Option A' }, { id: 'del', label: 'Delete', destructive: true }]} value={sel} onChange={setSel} />

// With icons
<Dropdown variant="withIcons" items={[{ id: 'edit', label: 'Edit', icon: <EditIcon /> }]} value={sel} onChange={setSel} />

// With title header
<Dropdown variant="withIconsAndTitle" header="Actions" items={iconItems} value={sel} onChange={setSel} />

// With search + icons
<Dropdown variant="withIconsAndSearch" items={iconItems} value={sel} onChange={setSel} />

// With search, no icons
<Dropdown variant="withSearch" items={[{ id: 'week', label: 'This Week' }]} value={sel} onChange={setSel} />

// User rows (avatar + name + subtitle)
<Dropdown variant="users" header="Assign To" items={[{ id: '1', name: 'Jane', subtitle: 'jane@co.com', avatarUrl: '' }]} value={sel} onChange={setSel} />

// Views panel (sections + create link)
<Dropdown variant="views" sections={[{ title: 'My Views', items: [{ id: 'v1', label: 'All Contacts' }] }]} value={sel} onChange={setSel} createLabel="+ Create View" onCreateClick={fn} />
```

| variant | Use when |
|---------|---------|
| `simple` (default) | plain list, no icons |
| `withIcons` | every row has a leading icon |
| `withIconsAndTitle` | icon list with a grey header bar |
| `withIconsAndSearch` | icon list with search field |
| `withSearch` | plain list with search field |
| `users` | avatar + name + subtitle rows |
| `views` | grouped sections + fixed footer create link |

---

## Checkbox

```jsx
<Checkbox label="Remember me" checked={checked} onChange={() => setChecked(v => !v)} />
<Checkbox variant="list" checked={rowChecked} onChange={toggleRow} />
<Checkbox indeterminate label="Select all" onChange={fn} />
```

| Prop | Options | Default |
|------|---------|---------|
| checked | boolean | `false` |
| indeterminate | boolean | `false` |
| disabled | boolean | `false` |
| label | string | — |
| variant | `common` `list` | `common` |
| onChange | function | — |

---

## CheckboxField
Checkbox inside a form field row (label on left, bordered field on right).

```jsx
<CheckboxField label="Email Opt Out" checked={optOut} onChange={() => setOptOut(v => !v)} placeholder="Subscribed" />
```

| Prop | Options | Default |
|------|---------|---------|
| label | string | — |
| checked | boolean | `false` |
| disabled | boolean | `false` |
| placeholder | string | — |
| onChange | function | — |

---

## Radio

```jsx
<Radio name="plan" label="Monthly" checked={plan === 'monthly'} onChange={() => setPlan('monthly')} />
<Radio name="plan" label="Yearly" checked={plan === 'yearly'} onChange={() => setPlan('yearly')} />
```

| Prop | Options | Default |
|------|---------|---------|
| checked | boolean | `false` |
| disabled | boolean | `false` |
| list | boolean — lighter border for table rows | `false` |
| label | string | — |
| name | string | — |
| onChange | function | — |

---

## Toggle

```jsx
<Toggle checked={enabled} onChange={() => setEnabled(v => !v)} showOnOff />
<Toggle checked={alerts} onChange={toggleAlerts} label="Email alerts" />
```

| Prop | Options | Default |
|------|---------|---------|
| checked | boolean | `false` |
| disabled | boolean | `false` |
| showOnOff | boolean — shows On/Off text | `false` |
| label | string | — |
| onChange | function | — |

---

## Search

```jsx
<Search placeholder="Search contacts" onChange={setQuery} />
<Search variant="cornered" onChange={setQuery} />
<Search variant="dard" showClose onClose={closeSearch} />
<SearchGlobal placeholder="Search (cmd+k)" value={q} onChange={setQ} onClear={() => setQ('')} />
```

Import SearchGlobal separately: `import Search, { SearchGlobal } from '@abhiram-dd-14303/bigin-design-system'`

| Prop | Options | Default |
|------|---------|---------|
| variant | `rounded` `cornered` `dard` | `rounded` |
| showClose | boolean | `false` |
| placeholder | string | `'Search'` |
| disabled | boolean | `false` |
| onChange / onClear / onClose | function | — |

---

## PanelHeader
Title bar for modals and side panels.

```jsx
<PanelHeader title="Create Deal" showClose onClose={closeModal} />
<PanelHeader title="Edit Contact" description="Update contact details" showClose onClose={closeModal} />
```

| Prop | Options | Default |
|------|---------|---------|
| title | string | — |
| description | string | — |
| showClose | boolean | `false` |
| onClose | function | — |

---

## Footer
Bottom action bar for modals and panels.

```jsx
<Footer
  actions={[
    { label: 'Cancel', variant: 'neutral', onClick: onCancel },
    { label: 'Save', variant: 'primary', onClick: onSave },
  ]}
/>

// With left slot
<Footer
  leftSlot={<FooterLink onClick={openSettings}>Customize Fields</FooterLink>}
  actions={[{ label: 'Cancel', variant: 'neutral', onClick: onCancel }, { label: 'Save', variant: 'primary', onClick: onSave }]}
/>
```

Import named exports: `import Footer, { FooterLink, FooterTextInfo, FooterIconAction, FooterBadge } from '@abhiram-dd-14303/bigin-design-system'`

| Prop | Options | Default |
|------|---------|---------|
| actions | array of `{ label, variant, onClick }` | Cancel + Save |
| leftSlot | any node | `null` |
| centered | boolean | `false` |
