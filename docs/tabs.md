# Tabs

File: `Tabs.jsx` / `Tabs.css` · Depends on: —
Import: `import PrimaryTabs, { PrimaryTabOption } from './components/Tabs'`

Underlined primary tab bar (green 2px active indicator, 44px tall). `PrimaryTabs` renders a full bar from a `tabs` array; `PrimaryTabOption` is a single tab if laying out yourself.

| Prop (`PrimaryTabs`) | Options | Default |
|------|---------|---------|
| tabs | array of `{ id, label }` | `[]` |
| value | active tab id | — |
| onChange | function(id) | — |
| compact | boolean — tighter layout (15px left padding, 20px gap) | `false` |
| boldActive | boolean — active label semibold(600) instead of medium(500) | `false` |

```jsx
<PrimaryTabs
  tabs={[{ id: 'import', label: 'Import' }, { id: 'export', label: 'Export' }]}
  value={activeTab}
  onChange={setActiveTab}
/>
<PrimaryTabs compact boldActive tabs={viewTabs} value={activeView} onChange={setActiveView} />
```

Colors: active label #212129 (semibold if boldActive), hover #0783DA, default #515159; active underline #16B387, 2px, extends 5px past each tab edge.

Copy the exact code above — do not recreate it.
