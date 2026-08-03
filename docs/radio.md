# Radio

File: `Radio.jsx` / `Radio.css` · Depends on: —
Import: `import Radio from './components/Radio'`

| Prop | Options | Default |
|------|---------|---------|
| checked | boolean | `false` |
| disabled | boolean | `false` |
| strikethrough | boolean | `false` |
| label | string | — |
| name | string — radio group name | — |
| onChange | function | — |

```jsx
<Radio name="plan" label="Monthly" checked={plan === 'monthly'} onChange={() => setPlan('monthly')} />
<Radio name="plan" label="Yearly"  checked={plan === 'yearly'}  onChange={() => setPlan('yearly')} />
```

Colors: checked ring #17BB8D (hover #009A6F), ring bg tint #EDFAF5, disabled ring #A8DFCA.

Copy the exact code above — do not recreate it.
