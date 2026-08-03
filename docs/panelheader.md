# PanelHeader

File: `PanelHeader.jsx` / `PanelHeader.css` · Depends on: —
Import: `import PanelHeader from './components/PanelHeader'`

Title bar for modals/side panels, optional description line and close button.

| Prop | Options | Default |
|------|---------|---------|
| title | string | — |
| description | string — if present, switches to two-line layout | — |
| showClose | boolean | `false` |
| onClose | function | — |

```jsx
<PanelHeader title="Create Deal" showClose onClose={closeModal} />
<PanelHeader title="Edit Contact" description="Update contact details" showClose onClose={closeModal} />
```

Height 56px (single line), close button 28px circle, bg `#E7F1F7`.

Copy the exact code above — do not recreate it.
