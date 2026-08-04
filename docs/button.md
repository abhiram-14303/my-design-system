# Button

File: `Button.jsx` / `Button.css` · Depends on: —
Import: `import Button from './components/Button'`

| Prop | Options | Default |
|------|---------|---------|
| variant | `primary`, `primary-outline`, `failure`, `failure-outline`, `neutral`, `ai`, `ai-solid` | `primary` |
| size | `large`, `medium`, `small` | `large` |
| state | `default`, `hover`, `active`, `disabled` | `default` |
| children | button label text | — |
| onClick | function | — |

```jsx
<Button variant="primary" size="large">Submit</Button>
<Button variant="primary-outline" size="medium">Cancel</Button>
<Button variant="failure" size="large">Delete</Button>
<Button variant="failure-outline" size="medium">Remove</Button>
<Button variant="neutral" size="medium">More</Button>
<Button variant="ai" size="medium">Manage</Button>
<Button variant="ai-solid" size="large">Generate</Button>
```

Sizes: large 40px / 22px pad, medium 32px / 16px, small 28px / 12px. Radius 999px.

| Variant | Default | Hover | Active | Disabled |
|---------|---------|-------|--------|---------|
| `primary` | #17BB8D fill, white text, weight 600 | gradient to #009A6F | #009A6F | 50% opacity |
| `primary-outline` | white, #00A879 text, #17BB8D border 1px, weight 500 | #17BB8D fill, white | #009A6F fill | 50% opacity |
| `failure` | #FF5050 fill, white text, weight 600 | gradient to #E03838 | #E03838 | 50% opacity |
| `failure-outline` | white, #FF5050 text, #E03838 border 1px, weight 500 | #FF5050 fill, white | #E03838 fill | 50% opacity |
| `neutral` | #F6F9FB fill, #212129 text, #C9D7E2 border 1px, weight 500 | gradient to #DEE9F0 | #DEE9F0 | 50% opacity |
| `ai` | white fill, gradient border, gradient text | gradient fill #139CFC→#16B387 (135deg), white | #0783DA→#00A879 (240deg), white | 50% opacity |
| `ai-solid` | gradient fill #139CFC→#16B387 (135deg), white text | #0783DA→#00A879 (135deg), white | same (240deg) | 50% opacity |

**AI Outline (`ai`) notes:**
- Gradient border: `160deg`, `#139CFC` solid→transparent→transparent→`#16B387` solid. Rendered via CSS `::before` mask trick so button width never shifts between states.
- Gradient text on default/disabled: rendered via `<span class="btn-ai-text">` inside the button.
- The `ai` variant always wraps children in that span — teammates don't need to add it.

Copy the exact code above — do not recreate it.
