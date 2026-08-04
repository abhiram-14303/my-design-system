# Radio

File: `Radio.jsx` / `Radio.css` · Depends on: —
Import: `import Radio from './components/Radio'`

| Prop | Options | Default |
|------|---------|---------|
| checked | boolean | `false` |
| disabled | boolean | `false` |
| list | boolean — lighter default border (list-row context) | `false` |
| label | string | — |
| name | string — radio group name | — |
| onChange | function | — |

```jsx
<Radio name="plan" label="Monthly" checked={plan === 'monthly'} onChange={() => setPlan('monthly')} />
<Radio name="plan" label="Yearly"  checked={plan === 'yearly'}  onChange={() => setPlan('yearly')} />
<Radio list name="plan" label="Free" checked={plan === 'free'} onChange={() => setPlan('free')} />
```

Colors: default ring border `rgba(75,85,110,0.6)`, white bg. List variant: `rgba(75,85,110,0.3)` border. Hover: `#17BB8D` border + `rgba(23,187,141,0.2)` glow. Checked: `#17BB8D` fill, white 8px dot. Disabled: `rgba(75,85,110,0.15)` border. Selected-disabled: `rgba(23,187,141,0.5)` fill.

Copy the exact code above — do not recreate it.
