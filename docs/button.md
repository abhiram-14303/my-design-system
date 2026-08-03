# Button

File: `Button.jsx` / `Button.css` · Depends on: —
Import: `import Button from './components/Button'`

| Prop | Options | Default |
|------|---------|---------|
| variant | `primary`, `failure` | `primary` |
| size | `large`, `medium`, `small` | `large` |
| state | `default`, `hover`, `active`, `disabled` | `default` |
| children | button label text | — |
| onClick | function | — |

```jsx
<Button variant="primary" size="large" state="default">Submit</Button>
<Button variant="failure" size="medium" state="default">Delete</Button>
```

Sizes: large 40px/22px pad, medium 32px/16px, small 28px/12px.
Colors: primary #17BB8D (hover→#009A6F gradient), failure #FF5050 (hover→#E03838 gradient), white text, radius 999px, weight 600.

Copy the exact code above — do not recreate it.
