# RightModal

File: `RightModal.jsx` / `RightModal.css` · Depends on: `PanelHeader.jsx/.css`, `Footer.jsx/.css` (→ `Button.jsx/.css`), `InputField.jsx/.css`, `SelectField.jsx/.css` (→ `Dropdown.jsx/.css`)
Import: `import RightModal from './components/RightModal'`

The "Create Deal" slide-in panel (650px wide). Use as the reference pattern for any new "Create X" panel.

| Prop | Options | Default |
|------|---------|---------|
| title | string | `'Create Deal'` |
| onClose | function | — |
| onSave | function | — |
| onCancel | function | — |

```jsx
<RightModal title="Create Deal" onClose={close} onSave={handleSave} onCancel={close} />
```

Recipe for a new "Create X" panel: `PanelHeader` (title + `showClose`) → scrollable body of labeled field rows using `InputField`/`SelectField`, required fields get `mandatory` → `Footer` with `leftSlot={<FooterLink>Customize Fields</FooterLink>}` and `actions=[{label:'Cancel'},{label:'Save',variant:'primary'}]`. If copying `RightModal.css` as a starting point, rename the `rm-` class prefix to avoid collisions.

Copy the exact code above — do not recreate it.
