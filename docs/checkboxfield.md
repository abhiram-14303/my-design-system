<a id="checkboxfield"></a>
# CheckboxField

A text input with a leading 40×40 checkbox zone. Uses the shared `Checkbox` component internally.

## Files
- `src/components/CheckboxField.jsx`
- `src/components/CheckboxField.css`
- Depends on: `src/components/Checkbox.jsx`, `src/components/Checkbox.css`

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | `'Label'` | Label text above the field |
| `placeholder` | string | `'Enter'` | Input placeholder text |

## Usage

```jsx
import CheckboxField from './components/CheckboxField'
import './components/CheckboxField.css'

<CheckboxField label="Field Label" placeholder="Enter value" />
```

## Notes
- Checkbox state is managed internally
- Displayed in default grey background style only — no separate hover/focus CSS states
- Clicking the checkbox zone toggles checked/unchecked
