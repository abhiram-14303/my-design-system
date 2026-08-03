# IMPORTANT — Read before building any page

- Font: ZohoPuvi — loaded automatically via @font-face from https://my-design-system-mcdamjnb.onslate.in/fonts/
- Copy src/index.css exactly as-is into the new project — do NOT change font paths
- Background: always white (#FFFFFF)
- Text color: always #212129
- Never add dark themes or custom color schemes
- Never recreate components — always copy the exact source files from this repo

## ID REFERENCES (read this first)
Every component, every Dropdown variant, and (eventually) every icon in this
file has a short id — e.g. `button`, `dropdown-views`, `checkbox`. A prompt
may contain a bare token like `ds:<id>` (copied from the "Copy ID" button on
the component library page instead of typed by hand). If you see one:
1. Open this file and jump straight to the section anchored `<id>` — look for
   `<a id="<id>"></a>` right above the matching heading.
2. Use exactly the file(s)/snippet documented in that section only. Do not
   search the rest of this file, do not guess, and do not recreate the
   component from scratch.

Example: `ds:dropdown-views` → go straight to `#dropdown-views` below and use
the Dropdown component with `variant="views"` as documented there. Multiple
tokens (e.g. `ds:checkbox ds:radio ds:toggle`) mean all of those ids apply.

## FONT SETUP (required)
After creating the project, run these commands to download the fonts:
mkdir -p public/fonts
curl -o public/fonts/ZohoPuvi-Regular.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Regular.ttf"
curl -o public/fonts/ZohoPuvi-Medium.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Medium.ttf"
curl -o public/fonts/ZohoPuvi-Semibold.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Semibold.ttf"

Also copy the header logo used by SideMenu:
mkdir -p public/img
curl -o public/img/bigin-icon.png "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/img/bigin-icon.png"

## GLOBAL CSS RESET (required — read this or icons will render black)

`src/index.css` must contain the reset below. Do **not** put `color` on the
universal `*` selector — put it on `body` instead.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'ZohoPuvi', sans-serif;
  /* no color here */
}
body {
  background: white;
  color: #212129;
}
```

Reason: every icon in this library is an inline SVG using `stroke="currentColor"`
so hover/selected states can recolor it purely with CSS (e.g. SideMenu turns
icons green on hover). A `* { color: ... }` rule sets `color` directly on the
`<svg>` node itself and overwrites whatever the wrapper element tries to apply —
icons silently render black in every state, no matter what the component does.
Keeping `color` on `body` preserves normal text-color inheritance without this
side effect.

# Design System Components

All components use ZohoPuvi font (Regular 400, Medium 500, Semibold 600).
Base text color: #212129. Background: white. No Tailwind, no CSS-in-JS, no UI
library dependency — every component is a plain `.jsx` + matching `.css` file
with inline SVG icons. Copy the files listed under **Depends on** together with
the component you want; nothing else needs installing beyond `react` + `react-dom`.

Browse every component live: `npm install && npm run dev`, then open
`src/pages/ComponentLibrary.jsx` in the browser and click through the left menu.
That file itself is a demo harness, not something to import into your app.

Every page (and every Dropdown variant individually) has a **"Copy ID"**
button next to its title. Clicking it copies a compact `ds:<id>` token (not a
sentence) — paste that token into your prompt as-is. See "ID REFERENCES" at
the top of this file for how that token gets resolved.

---

<a id="button"></a>
## Button

**File:** `Button.jsx` / `Button.css` · **Depends on:** —

**Import:** `import Button from './components/Button'`

### Props
| Prop | Options | Default |
|------|---------|---------|
| variant | `primary`, `failure` | `primary` |
| size | `large`, `medium`, `small` | `large` |
| state | `default`, `hover`, `active`, `disabled` | `default` |
| children | button label text | — |
| onClick | function | — |

### Usage
```jsx
<Button variant="primary" size="large" state="default">Submit</Button>
<Button variant="failure" size="medium" state="default">Delete</Button>
<Button variant="primary" size="large" state="disabled">Submit</Button>
```

### Sizes
- large: height 40px, padding 0 22px
- medium: height 32px, padding 0 16px
- small: height 28px, padding 0 12px

### Colors
- primary default: #17BB8D
- primary hover/active: gradient to #009A6F
- failure default: #FF5050
- failure hover/active: gradient to #E03838
- all buttons: white text, border-radius 999px, font-weight 600

---

<a id="inputfield"></a>
## InputField

**File:** `InputField.jsx` / `InputField.css` · **Depends on:** —

**Import:** `import InputField from './components/InputField'`

### Props
| Prop | Options | Default |
|------|---------|---------|
| label | string | `'Label Name'` |
| placeholder | string | `'Enter'` |
| state | `default`, `secondary`, `hover`, `focus`, `filled-focused`, `filled-unfocused`, `readonly`, `disabled`, `error` | — |
| value | string | `''` |
| error | boolean | — |
| errorMessage | string | `'It cannot be empty'` |
| onChange | function | — |
| size | `large`, `medium`, `small` | `large` |
| showDropdown | boolean | `false` |
| showLookup   | boolean | `false` |
| showClear    | boolean | `false` |
| showNew      | boolean | `false` |
| mandatory    | boolean — adds a 3px `#FF5050` left border for required fields, immune to hover/focus | `false` |

### Usage
```jsx
// Interactive (manages its own hover/focus/fill states)
<InputField label="Email" placeholder="Enter your email" onChange={(val) => setEmail(val)} />

// With validation error
<InputField label="Email" placeholder="Enter your email" error={true} errorMessage="Email cannot be empty" />

// Static display of a specific state
<InputField label="Disabled" state="disabled" />

// With dropdown and lookup icon
<InputField label="Company" placeholder="Select company" showDropdown={true} showLookup={true} />

// Required field (red left border)
<InputField label="Contact Name" placeholder="Enter" mandatory />
```

### Specs
- Width: 400px max
- Height: 40px
- Border radius: 8px
- Padding: 0 12px
- Gap between label and input: 20px
- Error message: right-aligned, #FF5050, 12px
- Border default: #BBCBD7
- Border focus/hover: #16B387
- Error border: #FF5050, background #FFF3F3

---

<a id="checkbox"></a>
## Checkbox

**File:** `Checkbox.jsx` / `Checkbox.css` · **Depends on:** —

**Import:** `import Checkbox from './components/Checkbox'`

### Props
| Prop | Options | Default |
|------|---------|---------|
| checked | boolean | `false` |
| indeterminate | boolean (dash state, overrides `checked` visual) | `false` |
| disabled | boolean | `false` |
| blocked | boolean (looks disabled + not clickable, different visual from `disabled`) | `false` |
| strikethrough | boolean — draws a line through the label | `false` |
| variant | `common`, `list` (list = table-row style, no outer padding) | `common` |
| forceHover | boolean — force the hover visual (for style-guide display only) | `false` |
| label | string | — |
| onChange | function | — |

### Usage
```jsx
<Checkbox label="Remember me" checked={checked} onChange={() => setChecked(v => !v)} />
<Checkbox variant="list" checked={rowChecked} onChange={toggleRow} />
<Checkbox indeterminate label="Select all" />
```

### Colors
- checked fill: #17BB8D (border #00A879 on hover/active)
- unchecked border: rgba(75,85,110,0.3)
- disabled border: rgba(75,85,110,0.15)

---

<a id="radio"></a>
## Radio

**File:** `Radio.jsx` / `Radio.css` · **Depends on:** —

**Import:** `import Radio from './components/Radio'`

### Props
| Prop | Options | Default |
|------|---------|---------|
| checked | boolean | `false` |
| disabled | boolean | `false` |
| strikethrough | boolean | `false` |
| label | string | — |
| name | string — radio group name | — |
| onChange | function | — |

### Usage
```jsx
<Radio name="plan" label="Monthly" checked={plan === 'monthly'} onChange={() => setPlan('monthly')} />
<Radio name="plan" label="Yearly"  checked={plan === 'yearly'}  onChange={() => setPlan('yearly')} />
```

### Colors
- checked ring: #17BB8D (hover #009A6F)
- checked ring background tint: #EDFAF5
- disabled ring: #A8DFCA

---

<a id="toggle"></a>
## Toggle

**File:** `Toggle.jsx` / `Toggle.css` · **Depends on:** —

**Import:** `import Toggle from './components/Toggle'`

### Props
| Prop | Options | Default |
|------|---------|---------|
| checked | boolean — on/off | `false` |
| disabled | boolean | `false` |
| strikethrough | boolean | `false` |
| showOnOff | boolean — shows "On"/"Off" text beside the track | `false` |
| label | string — optional descriptive label shown after On/Off | — |
| onChange | function | — |

### Usage
```jsx
<Toggle checked={enabled} onChange={() => setEnabled(v => !v)} showOnOff />
<Toggle checked={emailAlerts} onChange={toggleEmailAlerts} label="Email alerts" />
```

### Colors
- on track: #17BB8D (hover #009A6F)
- off track: #C9D7E2
- disabled track: #E8EEF3, knob #F0F4F7

---

<a id="tabs"></a>
## Tabs

**File:** `Tabs.jsx` / `Tabs.css` · **Depends on:** —

**Import:**
```jsx
import PrimaryTabs, { PrimaryTabOption } from './components/Tabs'
```

The underlined primary tab bar (green 2px active indicator, 44px tall).
Default export `PrimaryTabs` renders a full bar from a `tabs` array; named
export `PrimaryTabOption` is the individual tab if you need to lay them out
yourself.

### Props (`PrimaryTabs`)
| Prop | Options | Default |
|------|---------|---------|
| tabs | array of `{ id, label }` | `[]` |
| value | active tab id | — |
| onChange | function(id) | — |
| compact | boolean — tighter layout for embedding inside a smaller container (e.g. the Dropdown "views" variant): 15px left padding, 20px gap | `false` |
| boldActive | boolean — render the active tab's label as semibold (600) instead of medium (500) | `false` |

### Usage
```jsx
<PrimaryTabs
  tabs={[{ id: 'import', label: 'Import' }, { id: 'export', label: 'Export' }]}
  value={activeTab}
  onChange={setActiveTab}
/>

// Compact, semibold-active — how the Dropdown "views" variant uses it
<PrimaryTabs compact boldActive tabs={viewTabs} value={activeView} onChange={setActiveView} />
```

### Colors
- active label: #212129 (semibold if `boldActive`), hover label: #0783DA, default label: #515159
- active underline: #16B387, 2px, extends 5px past each edge of the tab

---

<a id="dropdown"></a>
## Dropdown

**File:** `Dropdown.jsx` / `Dropdown.css`
**Depends on:** `Search.jsx/.css` (search field variants)

**Import:** `import Dropdown from './components/Dropdown'`

Renders only the floating list panel — it does not manage its own open/close
state or a trigger button. Use `SelectField` if you need a full dropdown
field with a trigger (it wraps `Dropdown` with `variant="simple"`
internally). One component, seven visual styles, switched with the `variant`
prop. Passing no `variant` renders the original plain list exactly as
before — fully backward compatible with existing usage. Any search field
used by a variant is the real `Search` component (`variant="cornered"`), not
a hand-rolled input.

### Which variant do I need?
Use this table to map a plain-language request to the exact `variant` value —
each row below is documented as its own subsection with full props + usage.

| If your teammate asks for... | Use `variant=` |
|---|---|
| a plain list / simple dropdown | `"simple"` (or omit `variant`) |
| a dropdown with icons next to each item | `"withIcons"` |
| an icon list with a title/header bar on top | `"withIconsAndTitle"` |
| an icon list with a search box on top | `"withIconsAndSearch"` |
| a plain (no-icon) list with a search box on top | `"withSearch"` |
| a contact/user picker (avatar + name + email) | `"users"` |
| a "views" style dropdown with search, grouped sections, and a create link | `"views"` |

<a id="dropdown-simple"></a>
### `variant="simple"` (default)
Plain selectable list (200px wide, rounded-10 white card with shadow).

| Prop | Options | Default |
|------|---------|---------|
| items | array of `{ id, label, icon?, trailingIcon?, destructive? }` | `[]` |
| value | selected item id | — |
| onChange | function(id) | — |

`destructive: true` keeps the row's default text/icon color (`#212129` /
`#606A81`, same as any other row) and only turns red (`#FF5050`, with a
`#FFF0F0` hover background) on hover — it is never red by default.
`trailingIcon` renders a small icon at the right edge of the row (e.g. a
warning triangle on an unverified email row). Rows with an `icon` get a
32x32 icon box, 5px row padding, and a 5px gap to the label; rows without
an icon keep the original 10px padding / 8px gap.

```jsx
<Dropdown
  items={[
    { id: 'a', label: 'Option A' },
    { id: 'delete', label: 'Delete', destructive: true },
  ]}
  value={selected}
  onChange={setSelected}
/>
```

<a id="dropdown-withicons"></a>
### `variant="withIcons"`
Exactly the same rendering as `simple` — a plain list where every item
carries a leading `icon`. Kept as its own named variant for clarity when
every row is icon-led (e.g. Set as Default / Rename / Delete).

```jsx
<Dropdown
  variant="withIcons"
  items={[{ id: 'rename', label: 'Rename', icon: <EditIcon /> }]}
  value={selected}
  onChange={setSelected}
/>
```

<a id="dropdown-withiconsandtitle"></a>
### `variant="withIconsAndTitle"`
A grey title header bar above an icon list — no search. 300px wide.

| Prop | Options | Default |
|------|---------|---------|
| header | string — grey header bar text | — |
| items | array of `{ id, label, icon, destructive? }` | `[]` |
| value | selected item id | — |
| onChange | function(id) | — |

```jsx
<Dropdown variant="withIconsAndTitle" header="Actions" items={iconItems} value={selected} onChange={setSelected} />
```

<a id="dropdown-withiconsandsearch"></a>
### `variant="withIconsAndSearch"`
A `Search` field above an icon list — no title header. 300px wide.

| Prop | Options | Default |
|------|---------|---------|
| items | array of `{ id, label, icon, destructive? }` | `[]` |
| searchPlaceholder | string | `'Search'` |
| value | selected item id | — |
| onChange | function(id) | — |

```jsx
<Dropdown variant="withIconsAndSearch" items={iconItems} value={selected} onChange={setSelected} />
```

<a id="dropdown-withsearch"></a>
### `variant="withSearch"` (no icons)
A `Search` field above a plain label list — no icons, no title. 300px wide.

| Prop | Options | Default |
|------|---------|---------|
| items | array of `{ id, label, destructive? }` | `[]` |
| searchPlaceholder | string | `'Search'` |
| value | selected item id | — |
| onChange | function(id) | — |

```jsx
<Dropdown variant="withSearch" items={[{ id: 'week', label: 'This Week' }]} value={selected} onChange={setSelected} />
```

<a id="dropdown-users"></a>
### `variant="users"`
Header + search + avatar/name/subtitle rows — e.g. a "Select Contacts"
picker. 300px wide. Search filters by name client-side using the real
`Search` component.

| Prop | Options | Default |
|------|---------|---------|
| header | string — optional grey header bar, e.g. `"Select Contacts"` | — |
| search | boolean — shows a `Search` field above the list | `false` |
| placeholder | string — search field placeholder | `'Search'` |
| rows | array of `{ id, name, subtitle, avatarColor?, avatarSrc? }` | `[]` |
| value | selected row id | — |
| onChange | function(id) | — |

Row height is 56px, avatar is 32px, and the gap between name and
subtitle/email is 5px. **On hover, only the name turns blue (`#0783DA`)** —
the subtitle/email stays its normal grey; the row background still gets the
usual `#F6F9FB` hover tint.

```jsx
<Dropdown
  variant="users"
  header="Select Contacts"
  search
  rows={[{ id: 'u1', name: 'Jackson Navi', subtitle: 'jackson.navi@example.com', avatarColor: '#6E8BE8' }]}
  value={selected}
  onChange={setSelected}
/>
```

<a id="dropdown-views"></a>
### `variant="views"`
`Search` field + grouped sections with header labels + plain label rows
(no icons, no tab bar) + a "+ Create View" link footer. 300px wide.

| Prop | Options | Default |
|------|---------|---------|
| sections | array of `{ title, rows: [{ id, label }] }` | `[]` |
| value | selected row id | — |
| onChange | function(id) | — |
| onCreate | function — called when "Create View" is clicked | — |

The "+ Create View" footer link **never changes color on hover** (stays
`#0783DA` on the same `#F6F9FB` background) — only the label text gets an
underline on hover.

```jsx
<Dropdown
  variant="views"
  sections={[
    { title: 'Created by Me', rows: [{ id: 'v1', label: 'My Team Deals' }] },
    { title: 'Public Views',  rows: [{ id: 'v4', label: 'All Deals' }] },
  ]}
  value={selectedView}
  onChange={setSelectedView}
  onCreate={openCreateViewModal}
/>
```

### Colors (shared across variants)
- selected row background: #E6F5FF, text #212129, font-weight 500 (medium) — applies to `simple`/`withIcons*`/`withSearch` rows, the `users` selected name, and the `views` selected label
- hover row (any variant): background #F6F9FB, text turns #0783DA — icon (if present) also turns #0783DA to match, except destructive rows
- icon row (has `icon`): 32x32 icon box, default icon color #606A81, 5px padding/gap
- destructive row: default text/icon color #212129 / #606A81 (same as any row) — turns red #FF5050 (text and icon) with #FFF0F0 background ONLY on hover
- section/title header bar background: #F6F9FB, 2px bottom padding
- search fields inside any Dropdown variant stretch to the panel's full width
- users variant hover: name text only turns #0783DA (subtitle/email stays grey)
- views rows: plain text label, no leading icon, no tab bar — label turns #0783DA on hover
- views "Create View" link: text #0783DA always, underline only on hover

---

<a id="selectfield"></a>
## SelectField

**File:** `SelectField.jsx` / `SelectField.css` · **Depends on:** `Dropdown.jsx` / `Dropdown.css`

**Import:** `import SelectField from './components/SelectField'`

A styled trigger button (40px, rounded-8, chevron) that opens a `Dropdown`
panel below it on click and closes on outside click. This is the component to
use for "choose one" fields in forms (e.g. Stage, Pipeline selectors).

### Props
| Prop | Options | Default |
|------|---------|---------|
| placeholder | string | `'Select'` |
| options | array of `{ id, label }` | `[]` |
| value | selected id (controlled) | — |
| onChange | function(id) | — |
| mandatory | boolean — 3px `#FF5050` left border, immune to hover/focus/open states | `false` |

### Usage
```jsx
<SelectField
  placeholder="Choose a Stage"
  options={[{ id: 'qualification', label: 'Qualification' }, { id: 'closed_won', label: 'Closed Won' }]}
  value={stage}
  onChange={setStage}
  mandatory
/>
```

---

<a id="search"></a>
## Search

**File:** `Search.jsx` / `Search.css` · **Depends on:** —

**Import:** `import Search, { SearchGlobal } from './components/Search'`

Default export `Search` is the standard light search field with three visual
variants. Named export `SearchGlobal` is the dark/global top-bar search style.

### Props (`Search`)
| Prop | Options | Default |
|------|---------|---------|
| variant | `rounded`, `cornered`, `dard` (dark) | `rounded` |
| showClose | boolean — external X button beside the field | `false` |
| placeholder | string | `'Search'` |
| disabled | boolean | `false` |
| value | controlled value (optional — otherwise manages its own state) | — |
| forceState | `hover`, `focused`, `null` — force a display state (style-guide use) | `null` |
| onChange / onClear / onClose | function | — |

### Usage
```jsx
<Search placeholder="Search" onChange={setQuery} />
<Search variant="dard" showClose onClose={closeSearch} />
<SearchGlobal placeholder="Search (cmd+k)" value={q} onChange={setQ} onClear={() => setQ('')} />
```

---

<a id="pill"></a>
## Pill

**File:** `Pill.jsx` / `Pill.css` · **Depends on:** —

**Import:** `import Pill from './components/Pill'`

### Props
| Prop | Options | Default |
|------|---------|---------|
| options | array of selectable pill values | `[]` |
| value | current selection | — |
| onChange | function | — |

### Usage
```jsx
<Pill options={['Day', 'Week', 'Month']} value={range} onChange={setRange} />
```

### Colors
- selected background: #D7EFFF, text #0783DA
- default background: transparent, text #515159

---

<a id="panelheader"></a>
## PanelHeader

**File:** `PanelHeader.jsx` / `PanelHeader.css` · **Depends on:** —

**Import:** `import PanelHeader from './components/PanelHeader'`

Title bar used at the top of modals/side panels, with an optional description
line and close button.

### Props
| Prop | Options | Default |
|------|---------|---------|
| title | string | — |
| description | string — if present, switches to the two-line header layout | — |
| showClose | boolean | `false` |
| onClose | function | — |

### Usage
```jsx
<PanelHeader title="Create Deal" showClose onClose={closeModal} />
<PanelHeader title="Edit Contact" description="Update contact details" showClose onClose={closeModal} />
```

### Specs
- Height: 56px (single line) — close button 28px circle, background #E7F1F7

---

<a id="footer"></a>
## Footer

**File:** `Footer.jsx` / `Footer.css` · **Depends on:** `Button.jsx` / `Button.css`

**Import:**
```jsx
import Footer, { FooterIconAction, FooterTextInfo, FooterLink, FooterBadge } from './components/Footer'
```

Bottom action bar used in modals/panels. Default export renders the right-hand
action buttons (via `Button` internally); the named exports are building
blocks for whatever you put in the left slot.

### Props (`Footer`)
| Prop | Options | Default |
|------|---------|---------|
| actions | array of `{ label, variant, onClick }` — rendered right-aligned as Buttons | `[{label:'Cancel',variant:'neutral'},{label:'Save',variant:'primary'}]` |
| leftSlot | any node — rendered left-aligned (e.g. a `FooterLink`) | `null` |
| centered | boolean — centers the action buttons instead of right-aligning | `false` |

### Named exports
- `FooterIconAction({ icon, label })` — icon (or grey placeholder) + optional label
- `FooterTextInfo({ children })` — muted info text
- `FooterLink({ children, onClick })` — blue text link/button
- `FooterBadge({ children })` — highlighted pill badge (e.g. "Pro Plan")

### Usage
```jsx
<Footer
  leftSlot={<FooterLink onClick={openFieldSettings}>Customize Fields</FooterLink>}
  actions={[
    { label: 'Cancel', variant: 'neutral', onClick: onCancel },
    { label: 'Save',   variant: 'primary', onClick: onSave },
  ]}
/>
```

---

<a id="sidemenu"></a>
## SideMenu

**File:** `SideMenu.jsx` / `SideMenu.css` · **Depends on:** `public/img/bigin-icon.png`

**Import:** `import SideMenu from './components/SideMenu'`

Self-contained Bigin navigation sidebar (219px wide, full height). No props —
it manages its own "selected item" state internally. Renders two sections,
MODULES (Pipelines, Contacts, Companies, Products, Activities, Messages,
RouteIQ) and TOOLS (LeadGen, AI, Automation, Communication, Integrations &
Toppings, Dashboards), plus the header with the Bigin logo + collapse icon.

### Usage
```jsx
<div style={{ display: 'flex' }}>
  <SideMenu />
  <main style={{ flex: 1 }}>{/* page content */}</main>
</div>
```

### States
- default: icon `#606A81`, label `#212129`
- hover: background `#F6F9FB`, icon + label `#00A879`, label goes medium weight
- selected: background `#E7F6F2`, icon + label `#00A879`, label medium weight

---

<a id="rightmodal"></a>
## RightModal

**File:** `RightModal.jsx` / `RightModal.css`
**Depends on:** `PanelHeader.jsx/.css`, `Footer.jsx/.css` (→ `Button.jsx/.css`), `InputField.jsx/.css`, `SelectField.jsx/.css` (→ `Dropdown.jsx/.css`)

**Import:** `import RightModal from './components/RightModal'`

The "Create Deal" slide-in panel (650px wide). **Use this file as the
reference pattern for building any new "Create X" panel** (Create Contact,
Create Company, etc.) — see the recipe below.

### Props
| Prop | Options | Default |
|------|---------|---------|
| title | string | `'Create Deal'` |
| onClose | function | — |
| onSave | function | — |
| onCancel | function | — |

### Usage
```jsx
<RightModal title="Create Deal" onClose={close} onSave={handleSave} onCancel={close} />
```

### Recipe for a new "Create X" panel
1. `PanelHeader` for the title bar with `showClose`.
2. A scrollable body containing labeled field rows — reuse `InputField` for
   text/lookup fields and `SelectField` for dropdown fields.
3. Required fields get the `mandatory` prop (red left border), e.g.
   `<InputField label="Contact Name" mandatory />`.
4. `Footer` at the bottom: `leftSlot={<FooterLink>Customize Fields</FooterLink>}`,
   `actions={[{label:'Cancel'}, {label:'Save', variant:'primary'}]}`.
5. If you copy `RightModal.css` as a starting point instead of writing fresh
   CSS, rename the `rm-` class prefix to match your new component's name so
   styles don't collide with the original modal if both are on the page.

---

<a id="pagesources"></a>
## PageSources

**File:** `PageSources.jsx` / `PageSources.css`
**Depends on:** `SideMenu.jsx/.css` (→ `public/img/bigin-icon.png`), `Checkbox.jsx/.css`

**Import:** `import PageSources from './components/PageSources'`

Full "Contacts" list page (no props) — top bar with search + app icons, page
header (title, view toggle, primary action button), tabs row, filter/sort
toolbar, data table (checkbox column, sortable header, avatar + status-circle
rows, hover state), and a footer with record counts.

### Usage
```jsx
<PageSources />
```

Use this as the reference pattern for any other full list/table page (Deals,
Companies, etc.) — swap the `COLUMNS` and `ROWS` data at the top of the file
and adjust the grid-template-columns in `PageSources.css` to match.

---

<a id="quickpreview"></a>
## QuickPreview

**File:** `QuickPreview.jsx` / `QuickPreview.css` · **Depends on:** —

**Import:**
```jsx
import QuickPreview, { PREVIEWS, CONTACT, DEAL } from './components/QuickPreview'
```

Data-driven 550px record-preview side panel. Pass a `data` config object
describing the header type and body sections — the component has no
hardcoded record type. `PREVIEWS` exports 10 ready-made examples matching
every record type in the Figma file: Contact (+ back-bar variant), Company
(+ back-bar variant), Deal, Product, Task, Event, and Call.

### Props
| Prop | Options | Default |
|------|---------|---------|
| data | config object — see shape below | — |

### `data` shape
```js
{
  header: {
    avatar: 'photo' | 'logo' | 'person' | null,   // null = simple text-only header (Deal/Task/Event/Call style)
    initials, avatarColor,                          // used when avatar: 'photo'
    title, titleIcon, amount,
    role, company, owner,
    action: { label, kind: 'green' | 'split', icon: 'mail' },  // primary button, optional
    stage,                                           // blue stage pill text, optional (Deal style)
    detailRows: [{ label, value, caret }],           // Deal-style detail lines, optional
    backBar: boolean,                                // "← Back to Pipeline Records" bar, optional
    tabs: ['Information', 'Notes'],                  // omit 'Notes' for single-tab records
  },
  sections: [
    { type: 'iconFields', label, fields: [{ icon, value }] },
    { type: 'labelValues', label, labelWidth, rows: [{ label, value, color, icon }] },
    { type: 'secondaryContacts', label, rows: [{ name, email, color }] },
    { type: 'tag', mode: 'pills' | 'link', tags: [{ t, c }] },
    { type: 'description', text, long },
    { type: 'otherInfo', rows: ['Field Label', ...], open },
  ],
  modified: 'Jun 23, 2025 04:50AM',
}
```

### Usage
```jsx
// Use a ready-made preset
import QuickPreview, { PREVIEWS } from './components/QuickPreview'
<QuickPreview data={PREVIEWS[0]} /> {/* Contact */}

// Or build your own record type
<QuickPreview data={{
  header: { avatar: 'photo', initials: 'AB', avatarColor: '#6E8BE8', title: 'Alex Baker', role: 'Sales Rep', owner: 'Lara Ethan', action: { label: 'Send Mail', kind: 'green', icon: 'mail' } },
  sections: [
    { type: 'iconFields', label: 'Basic Info', fields: [{ icon: <MailIcon />, value: 'alex@b.com' }] },
    { type: 'tag', mode: 'pills', tags: [{ t: 'VIP', c: 'orange' }] },
    { type: 'description', text: '--' },
  ],
  modified: 'Jun 23, 2025 04:50AM',
}} />
```
