# Dropdown

File: `Dropdown.jsx` / `Dropdown.css` · Depends on: `Search.jsx/.css` (search variants)
Import: `import Dropdown from './components/Dropdown'`

Renders only the floating list panel — no open/close state, no trigger button. Use `SelectField` for a full field with a trigger (wraps this with `variant="simple"`). One component, seven visual styles via the `variant` prop. No `variant` = `simple` (original plain list, fully backward compatible).

Jump straight to the variant you need — each has its own anchor below:
`ds:dropdown-simple` `ds:dropdown-withicons` `ds:dropdown-withiconsandtitle` `ds:dropdown-withiconsandsearch` `ds:dropdown-withsearch` `ds:dropdown-users` `ds:dropdown-views`

## Strict rules — every variant, no exceptions
1. **Search stays fixed while the list scrolls** — rendered as a sibling outside the scrollable row list, never inside it.
2. **Default width is 280px** for every variant's outer container.
3. **Hovering a selected row still gives feedback** — background `#DCEEFC`, never plain hover, never nothing.
4. **A bottom action link (e.g. Views' "+ Create View") stays fixed** in its own footer while the list scrolls, never inside the scroll area.
5. **`negative` is a first-class alias for `destructive`** — both render identically: default color, red only on hover.
6. **Search actually filters** (case-insensitive substring on label/name); the scroll area is a *fixed* height, never a shrink-to-fit max-height — result count never resizes the dropdown; 0 matches shows a centered "No results found".

## Shared colors (all variants)
Selected row: bg `#E6F5FF`, text `#212129`, weight 500. Selected + hovered again: bg `#DCEEFC`. Hover (not selected): bg `#F6F9FB`, text/icon `#0783DA`. Icon box (rows with `icon`): 32x32, default color `#606A81`. Destructive/negative row: default color, red `#FF5050` text+icon with `#FFF0F0` bg only on hover. Header/title bar: bg `#F6F9FB`, 2px bottom padding.

---

<a id="dropdown-simple"></a>
## variant="simple" (default)
Plain selectable list, 280px wide, rounded-10 white card with shadow.

| Prop | Options | Default |
|------|---------|---------|
| items | array of `{ id, label, icon?, trailingIcon?, destructive?, negative? }` | `[]` |
| value | selected item id | — |
| onChange | function(id) | — |

`trailingIcon` renders a small icon at the row's right edge. Rows with `icon` get a 32x32 icon box, 5px padding, 5px gap; rows without keep 10px padding / 8px gap.

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

---

<a id="dropdown-withicons"></a>
## variant="withIcons"
Same rendering as `simple` — a plain list where every item carries a leading `icon`. Own variant name for clarity when every row is icon-led (Set as Default / Rename / Delete).

| Prop | Options | Default |
|------|---------|---------|
| items | array of `{ id, label, icon, destructive?, negative? }` | `[]` |
| value | selected item id | — |
| onChange | function(id) | — |

```jsx
<Dropdown
  variant="withIcons"
  items={[{ id: 'rename', label: 'Rename', icon: <EditIcon /> }]}
  value={selected}
  onChange={setSelected}
/>
```

---

<a id="dropdown-withiconsandtitle"></a>
## variant="withIconsAndTitle"
Grey title header bar above an icon list — no search. 280px wide.

| Prop | Options | Default |
|------|---------|---------|
| header | string — grey header bar text | — |
| items | array of `{ id, label, icon, destructive?, negative? }` | `[]` |
| value | selected item id | — |
| onChange | function(id) | — |

```jsx
<Dropdown variant="withIconsAndTitle" header="Actions" items={iconItems} value={selected} onChange={setSelected} />
```

---

<a id="dropdown-withiconsandsearch"></a>
## variant="withIconsAndSearch"
A `Search` field above an icon list — no title header. Fixed 320px scroll height regardless of result count.

| Prop | Options | Default |
|------|---------|---------|
| items | array of `{ id, label, icon, destructive?, negative? }` | `[]` |
| searchPlaceholder | string | `'Search'` |
| value | selected item id | — |
| onChange | function(id) | — |

```jsx
<Dropdown variant="withIconsAndSearch" items={iconItems} value={selected} onChange={setSelected} />
```

---

<a id="dropdown-withsearch"></a>
## variant="withSearch" (no icons)
A `Search` field above a plain label list — no icons, no title. Fixed 320px scroll height regardless of result count.

| Prop | Options | Default |
|------|---------|---------|
| items | array of `{ id, label, destructive?, negative? }` | `[]` |
| searchPlaceholder | string | `'Search'` |
| value | selected item id | — |
| onChange | function(id) | — |

```jsx
<Dropdown variant="withSearch" items={[{ id: 'week', label: 'This Week' }]} value={selected} onChange={setSelected} />
```

---

<a id="dropdown-users"></a>
## variant="users"
Header + search + avatar/name/subtitle rows — e.g. "Select Contacts". Fixed height + no-results behavior only apply when `search` is `true`.

| Prop | Options | Default |
|------|---------|---------|
| header | string — optional grey header bar | — |
| search | boolean — shows a `Search` field | `false` |
| placeholder | string | `'Search'` |
| rows | array of `{ id, name, subtitle, avatarColor?, avatarSrc? }` | `[]` |
| value | selected row id | — |
| onChange | function(id) | — |

Row height 56px, avatar 32px, name-to-subtitle gap 5px. On hover, only the name turns `#0783DA` (subtitle stays grey); row bg still `#F6F9FB`.

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

---

<a id="dropdown-views"></a>
## variant="views"
`Search` + grouped sections with header labels + plain label rows (no icons, no tab bar) + a "+ Create View" link footer. Search sits above the scrollable section list; "+ Create View" sits below it in its own footer — both fixed while only the middle list scrolls (600px fixed height). Search filters rows by label live, hiding a section entirely once it has zero matches.

| Prop | Options | Default |
|------|---------|---------|
| sections | array of `{ title, rows: [{ id, label }] }` | `[]` |
| value | selected row id | — |
| onChange | function(id) | — |
| onCreate | function — called on "Create View" click | — |

"+ Create View" link never changes color on hover (stays `#0783DA` on `#F6F9FB` bg) — only gets an underline.

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

---

Copy the exact code for your variant above — do not recreate it.
