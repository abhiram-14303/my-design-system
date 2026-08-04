# Tabs

File: `Tabs.jsx` / `Tabs.css` · Depends on: —
Import: `import PrimaryTabs, { PrimaryTabOption } from './components/Tabs'`

Underlined primary tab bar (green 2px active indicator, 44px tall). `PrimaryTabs` renders a full bar from a `tabs` array; `PrimaryTabOption` is a single tab if laying out yourself.

| Prop (`PrimaryTabs`) | Options | Default |
|------|---------|---------|
| tabs | array of `{ id, label, count? }` | `[]` |
| value | active tab id | — |
| onChange | function(id) | — |
| showCount | boolean — show count badge on each tab | `false` |
| compact | boolean — tighter layout (15px left padding, 20px gap) | `false` |
| boldActive | boolean — active label semibold(600) instead of medium(500) | `false` |

```jsx
<PrimaryTabs
  tabs={[{ id: 'import', label: 'Import' }, { id: 'export', label: 'Export' }]}
  value={activeTab}
  onChange={setActiveTab}
/>

{/* With count badges */}
<PrimaryTabs
  tabs={[
    { id: 'all',      label: 'All',      count: 24   },
    { id: 'open',     label: 'Open',     count: 5    },
    { id: 'closed',   label: 'Closed',   count: '99+' },
  ]}
  value={activeTab}
  onChange={setActiveTab}
  showCount
/>

<PrimaryTabs compact boldActive tabs={viewTabs} value={activeView} onChange={setActiveView} />
```

Count badge: 18px tall pill, `#E6F5FF` background, `#212129` text, 13px / 500 weight. Appears only when `showCount={true}` and the tab object has a `count` field.

Colors: active label #212129 (semibold if boldActive), hover #0783DA, default #515159; active underline #16B387, 2px, extends 5px past each tab edge. Tab bar fills full width.

Copy the exact code above — do not recreate it.
