# Card

File: `Card.jsx` / `Card.css` · Depends on: `Button.jsx`, `Button.css`, `src/assets/Summarizer.svg`, `src/assets/Play.svg`
Import: `import Card from './components/Card'`

| Prop | Options | Default |
|------|---------|---------|
| title | string | `'Summarizer'` |
| description | string | `'Auto-generate concise summaries for deals, contacts, and activities.'` |
| icon | image src | `Summarizer.svg` |
| onManage | function | — |
| onPlay | function | — |

```jsx
<Card
  title="Summarizer"
  description="Auto-generate concise summaries for deals, contacts, and activities."
  onManage={() => handleManage()}
  onPlay={() => handlePlay()}
/>
```

**States:**
- **Default**: white card, 1px `#E8EFF5` border, subtle shadow, icon in light blue `#EAF5FF` container, title + description, AI Outline medium (32px) Manage button.
- **Hover**: shadow deepens, vertical divider + Play button fade in to the right of Manage.

Card: 220px wide, 12px border-radius, 20px padding. Icon container: 40px × 40px, 8px radius. Title: 14px / 600 / `#212129`. Description: 13px / 400 / `#717179`, line-height 1.5. Play button and divider transition in with `opacity` on hover.

Copy the exact code above — do not recreate it.
