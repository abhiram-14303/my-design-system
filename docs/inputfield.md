# InputField

File: `InputField.jsx` / `InputField.css` · Depends on: —
Import: `import InputField from './components/InputField'`

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
| showDropdown / showLookup / showClear / showNew | boolean | `false` |
| mandatory | boolean — 3px `#FF5050` left border, immune to hover/focus | `false` |

```jsx
<InputField label="Email" placeholder="Enter your email" onChange={(val) => setEmail(val)} />
<InputField label="Email" error errorMessage="Email cannot be empty" />
<InputField label="Contact Name" placeholder="Enter" mandatory />
```

Specs: 400px max width, 40px height, radius 8px, padding 0 12px, 20px label gap.
Colors: border default #BBCBD7, focus/hover #16B387, error border #FF5050 / bg #FFF3F3.

Copy the exact code above — do not recreate it.
