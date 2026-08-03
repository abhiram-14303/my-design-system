# SelectField

File: `SelectField.jsx` / `SelectField.css` · Depends on: `Dropdown.jsx` / `Dropdown.css`
Import: `import SelectField from './components/SelectField'`

A styled trigger button (40px, rounded-8, chevron) opening a `Dropdown` panel below it, closes on outside click. Use for "choose one" form fields (Stage, Pipeline, etc.).

| Prop | Options | Default |
|------|---------|---------|
| placeholder | string | `'Select'` |
| options | array of `{ id, label }` | `[]` |
| value | selected id (controlled) | — |
| onChange | function(id) | — |
| mandatory | boolean — 3px `#FF5050` left border, immune to hover/focus/open | `false` |

```jsx
<SelectField
  placeholder="Choose a Stage"
  options={[{ id: 'qualification', label: 'Qualification' }, { id: 'closed_won', label: 'Closed Won' }]}
  value={stage}
  onChange={setStage}
  mandatory
/>
```

Copy the exact code above — do not recreate it.
