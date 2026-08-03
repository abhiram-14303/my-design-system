# Footer

File: `Footer.jsx` / `Footer.css` · Depends on: `Button.jsx` / `Button.css`
Import: `import Footer, { FooterIconAction, FooterTextInfo, FooterLink, FooterBadge } from './components/Footer'`

Bottom action bar for modals/panels. Default export renders right-hand action buttons (via `Button`); named exports are building blocks for the left slot.

| Prop (`Footer`) | Options | Default |
|------|---------|---------|
| actions | array of `{ label, variant, onClick }` — right-aligned Buttons | `[{label:'Cancel',variant:'neutral'},{label:'Save',variant:'primary'}]` |
| leftSlot | any node — left-aligned (e.g. `FooterLink`) | `null` |
| centered | boolean — centers action buttons instead of right-aligning | `false` |

Named exports: `FooterIconAction({ icon, label })`, `FooterTextInfo({ children })`, `FooterLink({ children, onClick })`, `FooterBadge({ children })`.

```jsx
<Footer
  leftSlot={<FooterLink onClick={openFieldSettings}>Customize Fields</FooterLink>}
  actions={[
    { label: 'Cancel', variant: 'neutral', onClick: onCancel },
    { label: 'Save',   variant: 'primary', onClick: onSave },
  ]}
/>
```

Copy the exact code above — do not recreate it.
