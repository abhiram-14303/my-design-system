# Checkbox

File: `Checkbox.jsx` / `Checkbox.css` · Depends on: —
Import: `import Checkbox from './components/Checkbox'`

| Prop | Options | Default |
|------|---------|---------|
| checked | boolean | `false` |
| indeterminate | boolean (dash state) | `false` |
| disabled | boolean | `false` |
| blocked | boolean (looks disabled, not clickable — different from `disabled`) | `false` |
| strikethrough | boolean | `false` |
| variant | `common`, `list` (table-row style, no outer padding) | `common` |
| forceHover | boolean (style-guide use only) | `false` |
| label | string | — |
| onChange | function | — |

```jsx
<Checkbox label="Remember me" checked={checked} onChange={() => setChecked(v => !v)} />
<Checkbox variant="list" checked={rowChecked} onChange={toggleRow} />
```

Colors: checked fill #17BB8D (hover/active border #00A879), unchecked border rgba(75,85,110,.3), disabled border rgba(75,85,110,.15).

Copy the exact code above — do not recreate it.
